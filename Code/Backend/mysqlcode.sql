-- open your mysql workbench
-- create a connection with following details:
-- 1. name "BeFit" 
-- 2. localhost "Befit" 
-- 3. Password "Potsdam!sGr8"
-- 4. run the below code in workbench


-- creating the schema for the project
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

  -- table For requests 
CREATE TABLE `Befit`.`requests` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `request` VARCHAR(445) NOT NULL,
  `reply` TINYINT NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `timestamp` datetime not null default(current_timestamp),
  PRIMARY KEY (`id`));

  -- table For subscribers
CREATE TABLE `Befit`.`subscribers` (
  `email` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  UNIQUE INDEX `idsubscribers_UNIQUE` (`email` ASC));