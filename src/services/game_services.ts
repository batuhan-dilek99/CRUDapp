import { games, Game } from "../db/game_interface";

export const getAllGames = async() : Promise<Game[]> => {
    return games;
};




//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//tsconfig.json-> Strict Type-Checking Options-> strict = true statement'ını commentledim *
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*


export const UpdateGame = async(newGame:Game) : Promise<void> => {        // => kullandığımız zaman function keyword'nden kurtulmuş oluyoruz. async anladığım kadarıyla parametre.
    let index = games.findIndex(d => d.id === games['id']);               // Promise ise return type. C++ ---> void UpdateGame(Game newGame) const{} 
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
}