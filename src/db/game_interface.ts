export interface Game{
    id : number | null;
    name : string;
    genre : string;

}

export const games : Game[] = [
    {
        id : 1,
        name : "Sea of Thieves",
        genre : "adventure"
    },

    {
        id : 2,
        name : "Battlefield",
        genre : "FPS"
    },

    {
        id : 3,
        name : "Celeste",
        genre : "8-bit"
    },

    {
        id : 4,
        name : "Age of Empires",
        genre : "strategy"
    },

    {
        id : 5,
        name : "Call of Duty",
        genre : "FPS"
    }

];