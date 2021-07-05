/* 
    *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
    Bu dosya game_routes.ts dosyasının bir alternatifi.
    Hangisi daha doğru olur bilemediğim için şimdilik
    böyle bir dosya yaptım.
    *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
*/





import { string } from "joi";
import {Game, games} from "../db/game_interface";
import * as GameService from "../services/game_services";
var express = require('express');
//import {authSchema} from "../controller/baseValidaiton";

const authSchema = require("../controller/baseValidaiton");

var route = express.Router();


/*export const errorHandler = async(req:Request , res:Response) => {
    const errorObject:{
        message ?: string,
        status_code ?: number,
    } = {};

    const message = "Something went wrong";
    res.status()


}*/


route.get("/games", async(req:any, res:any) => {
    const gameList : Game[] = await GameService.getAllGames();
    try{
        res.status(200).send(gameList);

    }
    catch(e){
        res.status(404).send("Something went wrong");
    }
})

route.post("/update", async(req : any, res:any) => {
    try{
    const result = await authSchema.validateAsync(req.body);
    console.log(result);
    const gameUpdate = req.body;
    await GameService.UpdateGame(gameUpdate);
    }
    catch(error){
        res.status(500).send("Something went wrong");
    }
    
})

route.post("/create", async(req:any, res:any) => {
    try{
        const result = await authSchema.validateAsync(req.body);
        const gameNew = req.body;
        await GameService.CreateGame(gameNew);
    }
    catch (error){
        res.status(500).send("Something went wrong");
    }
})

route.post("/delete", async(req:any,res:any) => {
    try{
        const result = await authSchema.validateAsync(req.body);
        const gameid : number = req.body['id'];
        await GameService.DeleteGame(gameid);
    }
    catch(error){
        res.status(500).send("Something went wrong");
    }

})