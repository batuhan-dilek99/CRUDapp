import express from "express";
import gamecontroller from "./controller/game_controller";
import errorHandler from "./middleware/errorMiddleWare";
import db from "./db/knex";

class GameApp{
    app : express.Application;
    route : express.Router;
    constructor(){
        this.app = express();
        this.route = express.Router();
    }

    init(){
        return new Promise((resolve, reject) => {
            try{
                this.appConfiguration();   
                this.routeConfiguration(); 
                db.init();
            }
            catch(error){
                console.log(error);
                reject(error);
            }
            finally{
                this.app.use(errorHandler);
                console.log("App configured.");
                resolve(true);
            }
        });
    }

    private appConfiguration(){
        this.app.use(express.json());
    }

    private routeConfiguration() {
        const apiPath : string = "/api"
        this.app.use(apiPath, this.route);
        this.route.use("/games", gamecontroller);
    }
    
    listen(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const port = Number(process.env.APP_PORT || 3000);
            try{
                this.app.listen(port, () => {
                    console.log("Express server started on port: " + port);
                    resolve(true);
                });
            }
            catch(error){
                console.log("Cannot started on port : " + port);
                reject(error);
            }
        });
      }
}

const application = new GameApp();

export default application;
