
DROP database IF EXISTS greenfield ;
CREATE DATABASE greenfield;


-- " to run this file type this command  "mysql -u root -p  < server/db/schema.sql"
USE greenfield;



-- //////////////////////////////////////// users table /////////////////////////////////////////////////////
CREATE TABLE users (
  userId int(8) PRIMARY KEY NOT NULL auto_increment ,
  userName varchar(255),
  Email varchar(255),
  balance int (8),
  img varchar(255),
  password varchar(255)
);


-- //////////////////////////////////////// games table  /////////////////////////////////////////////////////


CREATE TABLE games (
  gameId int(8) PRIMARY KEY NOT NULL auto_increment ,
  gameName varchar(255),
  price int(8),
  img varchar(255),
  owner int(8),
  FOREIGN KEY (owner) REFERENCES users(userId)

);


-- //////////////////////////////////////// transaction table /////////////////////////////////////////////////////

CREATE TABLE transaction (
  seller int(8) ,
  buyer  int(8),
  game int(8),
  status varchar(255),
  FOREIGN KEY (seller) REFERENCES users(userId),
  FOREIGN KEY (buyer) REFERENCES users(userId),
  FOREIGN KEY (game) REFERENCES games(gameId)

);

-- //////////////////////////////////////// users seeding /////////////////////////////////////////////////////

insert into users   (userName ,Email ,balance ,img , password ) values ("amir Hamemi" , "amir@gmail.com","500","https://bit.ly/3pvYBDf","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("amine jelassi" , "amine@gmail.com","500","https://bit.ly/3pCoSzw","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("ghassen tabebi" , "ghassen@gmail.com","500","https://bit.ly/3EzJ4IC","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("bilel mit7arech" , "bilel@gmail.com","500","https://bit.ly/3IvqGD6","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("foued" , "foued@gmail.com","500","https://bit.ly/31uMuhQ","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("donald trump" , "donald@gmail.com","500","https://bit.ly/3y2n72C","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("mr bean" , "bean@gmail.com","500","https://bit.ly/3EzJoHp","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("amir Hamemi" , "amir@gmail.com","500","https://bit.ly/3pvYBDf","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("amine jelassi" , "amine@gmail.com","500","https://bit.ly/3pCoSzw","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("ghassen tabebi" , "ghassen@gmail.com","500","https://bit.ly/3EzJ4IC","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("bilel mit7arech" , "bilel@gmail.com","500","https://bit.ly/3IvqGD6","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("foued" , "foued@gmail.com","500","https://bit.ly/31uMuhQ","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("donald trump" , "donald@gmail.com","500","https://bit.ly/3y2n72C","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("mr bean" , "bean@gmail.com","500","https://bit.ly/3EzJoHp","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("amir Hamemi" , "amir@gmail.com","500","https://bit.ly/3pvYBDf","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("amine jelassi" , "amine@gmail.com","500","https://bit.ly/3pCoSzw","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("ghassen tabebi" , "ghassen@gmail.com","500","https://bit.ly/3EzJ4IC","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("bilel mit7arech" , "bilel@gmail.com","500","https://bit.ly/3IvqGD6","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("foued" , "foued@gmail.com","500","https://bit.ly/31uMuhQ","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("donald trump" , "donald@gmail.com","500","https://bit.ly/3y2n72C","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("mr bean" , "bean@gmail.com","500","https://bit.ly/3EzJoHp","users");


-- //////////////////////////////////////// game seeding /////////////////////////////////////////////////////


insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3pztWVt",1);
insert into games (gameName,price,img,owner) values ("super mario" ,1,"https://bit.ly/3Dwb7HM",4);
insert into games (gameName,price,img,owner) values ("" ,200,"https://bit.ly/3pztWVt",1);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",1);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",1);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",1);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",1);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",2);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",2);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",2);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",2);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",3);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",3);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",3);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",4);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",5);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",6);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",7);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",4);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",5);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",6);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",7);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",4);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",5);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",6);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",7);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",4);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",5);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",6);
insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",7);


-- ////////////////////////////// transaction seeds //////////////////////////////////////////////////////////

INSERT into transaction   (seller,buyer,game , status) values (1,2,1,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,1,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,1,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,1,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,1,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,1,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,1,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,1,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,2,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,2,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,3,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,3,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,4,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,4,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,5,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,5,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,1,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,1,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,2,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,3,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,4,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,5,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,1,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,2,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,3,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,4,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,5,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,1,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,2,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,3,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,4,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,5,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,1,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,2,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,3,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,4,"pending");
INSERT into transaction   (seller,buyer,game , status) values (1,2,5,"pending");
