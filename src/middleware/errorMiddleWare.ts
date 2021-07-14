import { HttpException } from "../common/http-exception"
import { Request, Response, NextFunction } from "express";


export default function errorHandler(error : HttpException, req : Request, res : Response, next : NextFunction) {
    const errObject = {
        message : error.message || "Something went wrong",
        status_code : error.status_code || 100,
    };
    res.status(error.status).send(error.message);
}

