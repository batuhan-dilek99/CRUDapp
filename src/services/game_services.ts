import { games, Game } from "../db/game_interface";



export class GameService{
    async getAllGames() : Promise<Game[]>{
        return games;
    }

    /* async GetGame() : Promise<any>{
        
    } */

    async UpdateGame(newGame : Game) : Promise<void>{
        let index = games.findIndex(d => d.id === games['id']);               
        if (index > 0 || index == 0){
            games[index]['name'] = games['name'];
            games[index]['genre'] = games['genre'];
        }
    }

    async CreateGame(newGame:Game) : Promise<void>{
        games.push(newGame);
    }

    async DeleteGame(id : number) : Promise<void>{
        let index = games.findIndex(d => d.id === games['id']);
        if (index > 0 || index == 0){
            games.splice(index, 1);
        }
    }
}

/* export const getAllGames = async() : Promise<Game[]> => {
    return games;
}; */







/* export const UpdateGame = async(newGame:Game) : Promise<void> => {        
    let index = games.findIndex(d => d.id === games['id']);               
    if (index > 0 || index == 0){
        games[index]['name'] = games['name'];
        games[index]['genre'] = games['genre'];
    }
}

export const CreateGame = async(newGame:Game) : Promise<void> => {
    games.push(newGame);
}

export const DeleteGame = async(id : number) : Promise<void> => {
    let index = games.findIndex(d => d.id === games['id']);
    if (index > 0 || index == 0){
        games.splice(index, 1);
    }
} */