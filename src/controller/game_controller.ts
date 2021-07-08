import * as express from "express";
import Joi, { string } from "joi";
import { runInThisContext } from "vm";
import {Game, games} from "../db/game_interface";
import {GameService} from "../services/game_services";  
import BaseController from "./base_controller";
import {ValidationError} from "../common/http-exception";
import authSchema from "../validation/baseValidaiton"



export class GameController extends BaseController{
    gameService : GameService;
    
    constructor(){
        super();
        this.initializeRoutes(),
        this.gameService = new GameService();
    }

    getAllGames(req : express.Request, res : express.Response, next : express.NextFunction){
        return this.gameService.getAllGames().then((list) => res.status(201).send(list));
    }   

    /* GetGame(req : express.Request, res : express.Response, next : express.NextFunction){
        const id = req.params.id;
        authSchema.gameIDValidation.validateAsync(id)
            .then((gameValidated) => {
                this.gameService.GetGame(gameValidated)
                    .then((game) => {
                        return res.status(201).send(game);
                    })
                    .catch((err) => {
                        next(err);
                    });
            })
            .catch((err : Joi.ValidationError) =>{
                next(new ValidationError(err.message));
            })
    } */

    UpdateGame(req : express.Request, res : express.Response, next : express.NextFunction){
        const id = req.params.id;
        authSchema.gameIDValidation.validateAsync(id)
            .then((gameValidated) => {
                this.gameService.UpdateGame(gameValidated)
                    .then((game) => {
                        return res.status(201).send(game);
                    })
                    .catch((err) => {
                        next(err);
                    });
            })
            .catch((err : Joi.ValidationError) =>{
                next(new ValidationError(err.message));
            })
    }

    CreateGame(req : express.Request, res : express.Response, next : express.NextFunction){
        authSchema.gameValidationAdd.validateAsync(req.body)
            .then((gameValidated) => {
                this.gameService.CreateGame(gameValidated)
                    .then((game) => {
                        return res.status(201).send(game);
                    });
            })
            .catch((err : Joi.ValidationError) => {
                next(new ValidationError(err.message));
            });
    }

    DeleteGame(req : express.Request, res : express.Response, next : express.NextFunction){
        const id = req.params.id;
        authSchema.gameIDValidation.validateAsync(id)
            .then((gameValidated) => {
                this.gameService.DeleteGame(gameValidated)
                    .then((game) => {
                        return res.status(201).send();
                    })
                    .catch((err) => {
                        next(err);
                    });
            })
            .catch((err : Joi.ValidationError) =>{
                next(new ValidationError(err.message));
            })
    }

    initializeRoutes(){
        this.router.get("/", this.getAllGames.bind(this));
        this.router.patch("/id", this.UpdateGame.bind(this));
        this.router.delete("/id", this.DeleteGame.bind(this));
        this.router.post("/", this.CreateGame.bind(this));
    }
}