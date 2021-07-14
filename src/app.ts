import express from "express";
import {GameController} from "./controller/game_controller";
import errorHandler from "./middleware/errorMiddleWare";


class GameApp{
    app : express.Application;
    route : express.Router;
    constructor(){
        this.app = express();
        this.route = express.Router();
    }

    init(){
        return new Promise((resolve, reject) => {
            try{
                this.app.appConfiguration();   //TBD
                this.app.routeConfiguration(); //TBD
            }
            catch(error){
                console.log(error);
            }
            finally{
                this.app.use(errorHandler);
            }
        });
    }

    private appConfiguration(){
        //KNEX WILL BE INITIALIZED HERE.
        this.app.use(express.json());
    }

    private routeConfiguration() {
        const apiPath : string = "/api"
        this.app.use(apiPath, this.route);
        this.route.use("/", GameController);
    }
    
    listen(): Promise<boolean> {
        return new Promise((resolve, reject) => {
    
          const port = Number(process.env.APP_PORT || 3000);
          this.app.listen(port, () => {
            console.log("Express server started on port: " + port);
            resolve(true);
          });
    
        });
      }
}

const application = new GameApp();

export default application;