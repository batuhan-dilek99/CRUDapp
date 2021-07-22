import * as express from "express";
import Joi, { string } from "joi";
import {GameService} from "../services/game_services";  
import BaseController from "./base_controller";
import {ValidationError} from "../common/http-exception";
import authSchema from "../validation/Validaiton"



class GameController extends BaseController{
    gameService : GameService;
    
    constructor(){
        super();
        this.initializeRoutes(),
        this.gameService = new GameService();
    }

    getAllGames(req : express.Request, res : express.Response, next : express.NextFunction){
        return this.gameService.getAllGames().then((list) => res.status(200).send(list));

    }   

    updateGame(req : express.Request, res : express.Response, next : express.NextFunction){
        const request = req.body;
        authSchema.gameIDValidation.validateAsync(request)
            .then((gameValidated) => {
                this.gameService.updateGame(gameValidated)
                    .then((game) => {
                        return res.status(200).send(game);
                    })
                    .catch((err) => {
                        next(err);
                    });
            })
            .catch((err : Joi.ValidationError) =>{
                next(new ValidationError(err.message));
            })
    }

    createGame(req : express.Request, res : express.Response, next : express.NextFunction){
        authSchema.gameValidationAdd.validateAsync(req.body)
            .then((gameValidated) => {
                this.gameService.createGame(gameValidated)
                    .then((game) => {
                        return res.status(200).send(game);
                    });
            })
            .catch((err : Joi.ValidationError) => {
                next(new ValidationError(err.message));
            });
    }

    deleteGame(req : express.Request, res : express.Response, next : express.NextFunction){
        const id = req.params.id;
        authSchema.gameIDValidation.validateAsync(id)
            .then((gameValidated) => {
                this.gameService.deleteGame(gameValidated)
                    .then((game) => {
                        return res.status(200).send();
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
        this.router.put("/id", this.updateGame.bind(this));
        this.router.delete("/id", this.deleteGame.bind(this));
        this.router.post("/", this.createGame.bind(this));
    }
}

const gamecontroller = new GameController();
export default gamecontroller.router;
