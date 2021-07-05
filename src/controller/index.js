import * as gameCRUD from "./game_routes";

var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

/*router.get("/", gameCRUD.getAllGames);
router.get("/products", gameCRUD.getAllGames);
router.post("/update", gameCRUD.UpdateGame);
router.post("/delete", gameCRUD.DeleteGame);
router.post("/create", gameCRUD.CreateGame);*/

module.exports = router;
