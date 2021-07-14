import db from "../db/knex"
import { DatabaseError } from "../common/http-exception"
import CreateGame from "../interface/CreateGame";
import UpdateGame from "../interface/UpdateGame";
import GameDB from "../interface/GameDB";


class GameRepo{

    gameDB : typeof db;
    constructor(){
        this.gameDB = db;
    }


    async CreateGame(game : CreateGame) : Promise<GameDB>{
        return new Promise(async(resolve, reject) =>{
            this.gameDB.db("game")
                .insert({gamename : game.gameName, gamegenre : game.gameGenre})
                    .returning("*")
                        .then((result) => {
                            resolve(result[0]);
                        })
                        .catch((error) =>{
                            reject(new DatabaseError(error));
                        })
        });
    }

    async UpdateGame(game : UpdateGame) : Promise<GameDB>{
        return new Promise(async (resolve, reject) => {
            const  updatedgame = game;
            this.gameDB.db("game")
                .where("game.gameid", game.gameID)
                    .update(updatedgame, ["gameid", "gamename", "gamegenre"])
                        .then((result) => {
                            resolve(result[0]);
                        })
                        .catch((error) =>{
                            reject(new DatabaseError())
                        })
        })
    }

    async DeleteGame(id : number) : Promise<Boolean> {
        return new Promise(async (resolve, reject) => {
            this.gameDB.db("game").where("game.gameid", id).del()
                .then(() => {
                    resolve(true);
                })
                .catch((error) => {
                    reject(new DatabaseError(error));
                })
        })
    }

    async getAllGames() : Promise<GameDB> {
        return new Promise (async (resolve, reject) => {
            this.gameDB.db
                .select("gameID", "gameName", "gameGenre")
                    .from("game")
                        .leftJoin("gameid", "gamename", "gamegenre")
                            .groupBy("game.gameid")
                                .then((result) => {
                                    resolve(result[0]);
                                })
                                .catch((error) => {
                                    reject(new DatabaseError(error));
                                })
        })
    }

}

export default GameRepo;