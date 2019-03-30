CREATE TABLE IF NOT EXISTS `user_chapter_test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id`  int(11) NOT NULL,
  `chapter_id` int(11) NOT NULL,
  `scored_marks` int(11) NOT NULL,
  `total_marks` int(11) NOT NULL,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP NULL,
  `update_date` datetime ON UPDATE CURRENT_TIMESTAMP NULL,
  `created_by` varchar(1024)  NULL,
  `updated_by` varchar(1024)  NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

