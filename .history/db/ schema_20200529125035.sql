CREATE DATABASE sitepoint CHARACTER SET utf8 COLLATE utf8_general_ci;
USE burger_db;

CREATE TABLE burger (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50),
  city varchar(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO burgers (id) VALUES
(1, 'double double animal style'),
(2, 'western bacon cheese burger'),
(3, 'mcdouble'),
(4, 'ham-burger');