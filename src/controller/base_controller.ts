import * as express from "express";
export default class BaseController {
    router: express.Router;
  
    constructor() {
      this.router = express.Router();
    }
  }