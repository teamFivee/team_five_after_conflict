
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
  salt varchar(255),
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
insert into users   (userName ,Email ,balance ,img , password ) values ("mr bean" , "bean@gmail.com","500","https://bit.ly/3EPbnmw","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("amir Hamemi" , "amir@gmail.com","500","https://bit.ly/3pvYBDf","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("amine jelassi" , "amine@gmail.com","500","https://bit.ly/3pCoSzw","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("ghassen tabebi" , "ghassen@gmail.com","500","https://bit.ly/3EzJ4IC","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("bilel mit7arech" , "bilel@gmail.com","500","https://bit.ly/3IvqGD6","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("foued" , "foued@gmail.com","500","https://bit.ly/31uMuhQ","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("donald trump" , "donald@gmail.com","500","https://bit.ly/3y2n72C","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("mr bean" , "bean@gmail.com","500","https://bit.ly/3EPbnmw","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("amir Hamemi" , "amir@gmail.com","500","https://bit.ly/3pvYBDf","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("amine jelassi" , "amine@gmail.com","500","https://bit.ly/3pCoSzw","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("ghassen tabebi" , "ghassen@gmail.com","500","https://bit.ly/3EzJ4IC","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("bilel mit7arech" , "bilel@gmail.com","500","https://bit.ly/3IvqGD6","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("foued" , "foued@gmail.com","500","https://bit.ly/31uMuhQ","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("donald trump" , "donald@gmail.com","500","https://bit.ly/3y2n72C","users");
insert into users   (userName ,Email ,balance ,img , password ) values ("mr bean" , "bean@gmail.com","500","https://bit.ly/3EPbnmw","users");


-- //////////////////////////////////////// game seeding /////////////////////////////////////////////////////


insert into games (gameName,price,img,owner) values ("League Of Legends" ,200,"https://res.cloudinary.com/team-5/image/upload/v1639044761/lol_a1rglm.jpg",1);
insert into games (gameName,price,img,owner) values ("Fortnite" ,1,"https://res.cloudinary.com/team-5/image/upload/v1639044823/fortnite_bwkk1s.jpg",4);
insert into games (gameName,price,img,owner) values ("BattleField V" ,200,"https://res.cloudinary.com/team-5/image/upload/v1639044772/battlefield_epp5dy.jpg",1);
insert into games (gameName,price,img,owner) values ("PUBG:Player Uknowns Battleground" ,200,"https://res.cloudinary.com/team-5/image/upload/v1639044801/pubg_otgci9.png",1);
insert into games (gameName,price,img,owner) values ("Valorant" ,200,"https://res.cloudinary.com/team-5/image/upload/v1639044782/Valorant_hvjgjf.jpg",1);
insert into games (gameName,price,img,owner) values ("Cyber Punk 2077" ,200,"https://res.cloudinary.com/team-5/image/upload/v1639044899/cyberpunk-2077-button-fin-1594877291453_ckkjuu.jpg",1);
insert into games (gameName,price,img,owner) values ("Red Dead Redemption II" ,200,"https://res.cloudinary.com/team-5/image/upload/v1639045293/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq_xzitq8.jpg",1);
insert into games (gameName,price,img,owner) values ("World of Warcraft" ,200,"https://images-ext-2.discordapp.net/external/9iM7N9q6JZKF7jZkoU2youv3PGW-4QTTQWhMwKQvZ7o/https/res.cloudinary.com/team-5/image/upload/v1639318976/world-of-warcraft-classic-button-01-1566253968524_dgimrb.jpg?width=670&height=670",2);
insert into games (gameName,price,img,owner) values ("Need For Speed : Heat" ,200,"https://res.cloudinary.com/team-5/image/upload/v1639046550/nfs-heat---button-fin-1565806445973_dwjyix.jpg",2);
insert into games (gameName,price,img,owner) values ("Grand Theft Auto V online" ,200,"https://res.cloudinary.com/team-5/image/upload/v1639046841/mobile-cover_s6awyu.jpg",2);
insert into games (gameName,price,img,owner) values ("Guardians Of the Galaxy" ,200,"https://res.cloudinary.com/team-5/image/upload/v1639045072/marvels-guardians-of-the-galaxy-pc-game-steam-cover_fmxo1r.jpg",2);
insert into games (gameName,price,img,owner) values ("Dark Souls III" ,200,"https://res.cloudinary.com/team-5/image/upload/v1639045176/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk_jxhalt.jpg",3);
insert into games (gameName,price,img,owner) values ("call of duty warzone" ,200,"https://images-ext-2.discordapp.net/external/mTuUd6fxrVLCRydXNlVPugjPS-Uyqs1Q2oSJX7VATiA/https/res.cloudinary.com/team-5/image/upload/v1639319512/WZ-Season-Three-Announce-TOUT_uruimk.jpg?width=1191&height=670",3);
insert into games (gameName,price,img,owner) values ("sims 4" ,200,"https://images-ext-1.discordapp.net/external/YX1aR_EGoysBNp0-t_AWuuEx1rDE2x4toOMxVApVsiA/https/res.cloudinary.com/team-5/image/upload/v1639319572/ts4-featured-image-base-refresh.png.adapt.crop191x100.1200w_obzmje.png",3);
insert into games (gameName,price,img,owner) values ("fifa 22" ,200,"https://images-ext-2.discordapp.net/external/SyvdUboFqs7PVk0xBuVAiqaGZbXBX2Z8KQPEFUc4CX0/https/res.cloudinary.com/team-5/image/upload/v1639319646/fifa-22-button-v2-1627092920671_gen3vy.jpg?width=670&height=670",4);

insert into games (gameName,price,img,owner) values ("boorder lands 2" ,200,"https://images-ext-2.discordapp.net/external/GNMlzqT0FkkOefng54JW2njyZ6PA53QDkIHa9fNX5t0/https/res.cloudinary.com/team-5/image/upload/v1639320781/ab67616d0000b273b701b41eafd3017976d026f0_is5kii.jpg",6);
insert into games (gameName,price,img,owner) values ("apex legends" ,200,"https://images-ext-2.discordapp.net/external/jGkfzinyUMDu-_THpNAZHAjWe3xdu288LBV0cZDC8u8/https/res.cloudinary.com/team-5/image/upload/v1639320833/apex-featured-image-emergence-season-battle-pass.jpg.adapt.crop191x100.1200w_fbwxfc.jpg?width=1191&height=670",7);
insert into games (gameName,price,img,owner) values ("cod modern warfare" ,200,"https://images-ext-1.discordapp.net/external/9MpPq56n42OLlrZMKKhHvf5F7Dfe7RWKsedbSRaoF1Q/https/res.cloudinary.com/team-5/image/upload/v1639320984/call-of-duty-modern-warfare.jpg_ekljjo.jpg?width=558&height=669",4);
insert into games (gameName,price,img,owner) values ("rainbow six siege" ,200,"https://images-ext-2.discordapp.net/external/gnrgLE3ZXrNLflZe1LgomvgzeA_6ABrw098yOQePSLo/https/res.cloudinary.com/team-5/image/upload/v1639321182/1qiQsqTGnDhQ1vK4xW8Ds6Zb_fkh55h.jpg?width=670&height=670",6);
-- insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",7);
-- insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",4);
-- insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",5);
-- insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",6);
-- insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",7);
-- insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",4);
-- insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",5);
-- insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",6);
-- insert into games (gameName,price,img,owner) values ("battel field" ,200,"https://bit.ly/3ovdFla",7);


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
