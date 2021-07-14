
import db from "../db/knex"
import GameRepo from "../repository/game_repository"
import CreateGame from "../interface/CreateGame";
import UpdateGame from "../interface/UpdateGame";
import GameDB from "../interface/GameDB";

export class GameService{
    gamerep : GameRepo;

    constructor(){
        this.gamerep = new GameRepo();
    }

    async getAllGames() : Promise<GameDB>{
        return new Promise((resolve, reject) => {
            this.gamerep.getAllGames()
                .then((result) => {
                    return resolve(result);
                })
                .catch((error) => {
                    return reject(error);
                })
        })
    }

    async UpdateGame(newGame : UpdateGame) : Promise<GameDB>{
        return new Promise((resolve, reject) => {
            this.gamerep.UpdateGame(newGame)
            .then((result) => {
                return resolve(result[0]);
            })
            .catch((error) => {
                return reject(error);
            })
        })
    } 
       

    async CreateGame(newGame:CreateGame) : Promise<void>{
        return new Promise((resolve, reject) => {
            this.gamerep.CreateGame(newGame)
                .then((result) => {
                    return resolve(result[0]);
                })
                .catch((error) => {
                    return reject(error);
                })
        })
    }
        

    async DeleteGame(id : number) : Promise<Boolean>{
        return new Promise((resolve, reject) => {
            this.gamerep.DeleteGame(id)
                .then((result) => {
                    return resolve(result);
                })
                .catch((error) => {
                    return reject(error);
                })
        })
    }
} 

