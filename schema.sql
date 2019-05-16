DROP DATABASE IF EXISTS descriptionData;

CREATE DATABASE descriptionData;

USE descriptionData;

CREATE TABLE descriptions (
  id int NOT NULL AUTO_INCREMENT,
  name_ varchar(50) NOT NULL,
  best_use varchar(50) NOT NULL,
  climbing_show_type varchar(50) NOT NULL,
  last_ varchar(50) NOT NULL,
  upper_ varchar(50) NOT NULL,
  lining_ varchar(50) NOT NULL,
  outsole_ varchar(50) NOT NULL,
  footwear_closure varchar(50) NOT NULL,
  resole_ varchar(50) NOT NULL,
  gender_ varchar(50) NOT NULL,
  weight_ varchar(50) NOT NULL
  PRIMARY KEY (ID)
);

INSERT INTO transactions (id, name_, best_use, climbing_show_type, last_, upper_, lining_, outsole_, footwear_closure, resole_, gender_, weight_) VALUES ('La Sportiva Tarantulace Climbing Shoes', 'Rock Climbing', 'Neutral', 'Slip-Lasted', 'Leather/synthetic leather', 'No', 'FriXion RS rubber', 'Lace-up', 'Yes', 'Unisex', '1 lb. 2.3 oz.' );