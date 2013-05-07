DROP TABLE IF EXISTS `contacts`;

CREATE TABLE `contacts` (
  `id` mediumint NOT NULl AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;