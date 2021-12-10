var data = require("./seed_data.js");
var Sequelize = require("sequelize");
const mysql = require("mysql2");
var games = require("./db/index");



var seedDb = function (data) {
  data.forEach((e) => {
    var game = {
      gameName: e.gameName,
      price: e.price,
      img: e.img,
      userName: e.owner,
    };
    games.create(game, (err, res) => {
      if (err) {
        console.log(err);
      }
      console.log("seed added");
    });
  });
};

seedDb(data);
