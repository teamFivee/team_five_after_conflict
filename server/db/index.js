const mysql = require('mysql2');

const Promise = require('bluebird');
const database = 'greenfield';
var Sequelize = require('sequelize'); 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: database

});


var seq = new Sequelize(database,"root","root",{dialect: 'mysql'});

seq
  .authenticate()
  .then(() => {
    console.log("authenticate successed");
  })
  .catch(() => {
    console.log("authenticate failed");
  });


  var user = seq.define("user", {
    userId: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true 
    },
    usersName: {type : Sequelize.STRING  },
    Email : {type : Sequelize.STRING},
    balance : {type :Sequelize.INTEGER, defaultValue:0},
    salt : {type : Sequelize.STRING},
    img : {type : Sequelize.STRING},
    password : {type : Sequelize.STRING}
  });

  var game = seq.define("game", {
    gameId: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    gameName: {type : Sequelize.STRING  },
    price : {type : Sequelize.INTEGER},
    img : {type :Sequelize.STRING},
    userName : {type : Sequelize.INTEGER}
  });
  
  game.sync({alter : true}).then(data=>{
    console.log(data);
  }).catch(err => { console.log(err)})

  user.sync({alter : true}).then(data=>{
    console.log(data);
  }).catch(err => { console.log(err)})



module.exports = game
