
/*
Navicat MySQL Data Transfer

Source Server         : hehe
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : loginregister

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2020-01-06 15:04:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `usertable`
-- ----------------------------
DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usertable
-- ----------------------------
INSERT INTO `usertable` VALUES ('28', 'lisi', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'lisi@126.com', '2020-01-06 14:40:33');
INSERT INTO `usertable` VALUES ('29', 'zhangsan', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'zhangsan@126.com', '2020-01-06 14:40:53');
INSERT INTO `usertable` VALUES ('30', 'ä¸‰æ¯›', 'eaa67f3a93d0acb08d8a5e8ff9866f51983b3c3b', 'sanmao@126.com', '2020-01-06 15:03:00');
