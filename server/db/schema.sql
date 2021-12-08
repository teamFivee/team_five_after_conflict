
DROP database IF EXISTS greenfield ;
CREATE DATABASE greenfield;


-- " to run this file type this command  "mysql -u root -p  < server/db/schema.sql"
USE greenfield;



-- //////////////////////////////////////// user table /////////////////////////////////////////////////////
CREATE TABLE user (
  userId int(8) PRIMARY KEY NOT NULL auto_increment ,
  userName varchar(255),
  Email varchar(255),
  balance int (8),
  img varchar(255),
  password varchar(255)

);


-- //////////////////////////////////////// game table  /////////////////////////////////////////////////////


CREATE TABLE game (
  gameId int(8) PRIMARY KEY NOT NULL auto_increment ,
  gameName varchar(255),
  price int(8),
  img varchar(255),
  owner int(8),
  FOREIGN KEY (owner) REFERENCES user(userId)

);


-- //////////////////////////////////////// transaction table /////////////////////////////////////////////////////

CREATE TABLE transaction (
  seller int(8) ,
  buyer  int(8),
  game int(8),
  status varchar(255),
  FOREIGN KEY (seller) REFERENCES user(userId),
  FOREIGN KEY (buyer) REFERENCES user(userId),
  FOREIGN KEY (game) REFERENCES game(gameId)

);

-- //////////////////////////////////////// user seeding /////////////////////////////////////////////////////

insert into user   (userName ,Email ,balance ,img , password ) values ("amir Hamemi" , "amir@gmail.com","500","https://bit.ly/3pvYBDf","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("amine jelassi" , "amine@gmail.com","500","https://bit.ly/3pCoSzw","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("ghassen tabebi" , "ghassen@gmail.com","500","https://bit.ly/3EzJ4IC","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("bilel mit7arech" , "bilel@gmail.com","500","https://bit.ly/3IvqGD6","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("foued" , "foued@gmail.com","500","https://bit.ly/31uMuhQ","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("donald trump" , "donald@gmail.com","500","https://bit.ly/3y2n72C","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("mr bean" , "bean@gmail.com","500","https://bit.ly/3EzJoHp","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("amir Hamemi" , "amir@gmail.com","500","https://bit.ly/3pvYBDf","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("amine jelassi" , "amine@gmail.com","500","https://bit.ly/3pCoSzw","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("ghassen tabebi" , "ghassen@gmail.com","500","https://bit.ly/3EzJ4IC","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("bilel mit7arech" , "bilel@gmail.com","500","https://bit.ly/3IvqGD6","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("foued" , "foued@gmail.com","500","https://bit.ly/31uMuhQ","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("donald trump" , "donald@gmail.com","500","https://bit.ly/3y2n72C","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("mr bean" , "bean@gmail.com","500","https://bit.ly/3EzJoHp","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("amir Hamemi" , "amir@gmail.com","500","https://bit.ly/3pvYBDf","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("amine jelassi" , "amine@gmail.com","500","https://bit.ly/3pCoSzw","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("ghassen tabebi" , "ghassen@gmail.com","500","https://bit.ly/3EzJ4IC","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("bilel mit7arech" , "bilel@gmail.com","500","https://bit.ly/3IvqGD6","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("foued" , "foued@gmail.com","500","https://bit.ly/31uMuhQ","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("donald trump" , "donald@gmail.com","500","https://bit.ly/3y2n72C","user");
insert into user   (userName ,Email ,balance ,img , password ) values ("mr bean" , "bean@gmail.com","500","https://bit.ly/3EzJoHp","user");


-- //////////////////////////////////////// game seeding /////////////////////////////////////////////////////


insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3pztWVt",1);
insert into game (gameName,price,img,owner) values ("super mario" ,1,"https://bit.ly/3Dwb7HM",4);
insert into game (gameName,price,img,owner) values ("" ,200,"https://bit.ly/3pztWVt",1);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",1);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",1);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",1);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",1);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",2);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",2);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",2);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",2);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",3);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",3);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",3);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",4);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",5);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",6);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",7);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",4);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",5);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",6);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",7);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",4);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",5);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",6);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",7);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",4);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",5);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",6);
insert into game (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",7);


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
