CREATE TABLE IF NOT EXISTS `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question`  TEXT NOT NULL,
  `option_a` varchar(244) NOT NULL,
  `option_b` varchar(244) NOT NULL,
  `option_c` varchar(244) NOT NULL,
  `option_d` varchar(244) NOT NULL,
  `correct_answer` varchar(244) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `chapter_id` int(11) NOT NULL,
  `model_paper_id` int(11) NOT NULL,
  `create_date` datetime DEFAULT CURRENT_TIMESTAMP NULL,
  `update_date` datetime ON UPDATE CURRENT_TIMESTAMP NULL,
  `created_by` varchar(1024)  NULL,
  `updated_by` varchar(1024)  NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

