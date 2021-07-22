import knex, { Knex } from 'knex'
import config from '../config'

class DBKnex{
    db !: Knex;
    private knexConfig : Knex.Config;
    private done : boolean;

    constructor(){
        this.knexConfig = {};
        this.done = false;

    }

    async init() : Promise<boolean>{
        return new Promise((resolve, reject) =>{
            try{
                console.log("Knex initialization");
                this.knexConfig = {
                    client: "pg",
                    connection: {
                      host: config.HOST,
                      port: config.PORT,
                      database: config.POSTGRES_DB,
                      user: config.USERNAME,
                      password: config.PASSWORD,
                    },
                    pool: {
                      min: 2,
                      max: 10,
                    },
                };

                this.db = knex(this.knexConfig);
                resolve(true);
            }
            catch(error){
                reject(error);
            }
        })
    }
}

const db = new DBKnex;
export default db;
