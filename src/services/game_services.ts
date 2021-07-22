
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

    async updateGame(newGame : UpdateGame) : Promise<GameDB>{
        return new Promise((resolve, reject) => {
            this.gamerep.updateGame(newGame)
            .then((result) => {
                return resolve(result);
            })
            .catch((error) => {
                return reject(error);
            })
        })
    } 
       

    async createGame(newGame:CreateGame) : Promise<GameDB>{
        return new Promise((resolve, reject) => {
            this.gamerep.createGame(newGame)
                .then((result) => {
                    return resolve(result);
                })
                .catch((error) => {
                    return reject(error);
                })
        })
    }
        

    async deleteGame(id : number) : Promise<Boolean>{
        return new Promise((resolve, reject) => {
            this.gamerep.deleteGame(id)
                .then((result) => {
                    return resolve(result);
                })
                .catch((error) => {
                    return reject(error);
                })
        })
    }
} 

