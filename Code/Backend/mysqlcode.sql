-- open your mysql workbench
-- create a connection with following details:
-- 1. name "BeFit" 
-- 2. localhost "Befit" 
-- 3. Password "Potsdam!sGr8"
-- 4. run the below code in workbench

create schema Befit;
use Befit;
-- table for users
CREATE TABLE `Befit`.`users` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(120) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE);

-- table for contact-us form
CREATE TABLE `Befit`.`Contact_Us` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `msg` VARCHAR(545) NOT NULL,
  PRIMARY KEY (`id`));