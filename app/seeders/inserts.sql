

USE `test_creation`;

INSERT INTO `roles` (`role_type` ,`createdAt` , `updatedAt`)
VALUES ('Test Creator' , current_timestamp()  , current_timestamp()),
                ('Test Taker' , current_timestamp()  , current_timestamp() ),
        ('Test Reviewer' , current_timestamp() , current_timestamp());
        
INSERT INTO `users` (`firstname` , `lastname` , `email`, `password`, `status`, `createdAt` , `updatedAt` ,`RoleId`)
VALUES ('kelly' , 'fisher', 'kelly.fisher@gmail.com', '$2a$08$q32de7f2/uVB9XKCemt9DOsxCe4Y0mi0upxK1yB5/tYpKXD.aXjvG' , 'active' , current_timestamp()  , current_timestamp() , 1),
                ('frank' , 'till', 'frank.till@gmail.com', '$2a$08$XFhYgmln.C4TzTPrngYeaOiqm.wx6Grm4AUpSO/lTgPESmp3oXx5e' , 'active' , current_timestamp()  , current_timestamp() , 1),
        ('preston' , 'james', 'preston.james@gmail.com', '$2a$08$q32de7f2/uVB9XKCemt9DOsxCe4Y0mi0upxK1yB5/tYpKXD.aXjvG' , 'active' , current_timestamp()  , current_timestamp() , 2),
        ('shane' , 'tommen', 'shane.tommen@gmail.com', '$2a$08$XFhYgmln.C4TzTPrngYeaOiqm.wx6Grm4AUpSO/lTgPESmp3oXx5e' , 'active' , current_timestamp()  , current_timestamp() , 3);
        
INSERT INTO `tests` (`test_name`,`createdAt`,`updatedAt` , `UserId`)
VALUES ('Chemistry 101 First Quarter Test' ,current_timestamp() , current_timestamp() , 1),
                ('Game of Thrones Moments' ,current_timestamp() , current_timestamp() , 2),
        ('Top 10 Best Sports Teams' ,current_timestamp() , current_timestamp() , 2),
        ('Calculus 1040a' ,current_timestamp() , current_timestamp() , 1),
        ('History 202 ' ,current_timestamp() , current_timestamp() , 2),
        ('Javscript Objects' ,current_timestamp() , current_timestamp() , 1),
        ('Fist of the First Men' ,current_timestamp() , current_timestamp() , 2)
;

INSERT INTO `questions` (`question_phrase` ,`createdAt`,`updatedAt` , `TestId`)
VALUES ('Who is Jon Snow\'s real mother?' ,current_timestamp() , current_timestamp() , 2),
                ('How many men are there in the Night\'s Watch?' ,current_timestamp() , current_timestamp() , 2),
        ('What is x in (4x = 28)?' ,current_timestamp() , current_timestamp() , 4),
        ('What does JSON stand for?' ,current_timestamp() , current_timestamp() , 6),
        ('Where does Samwell Tarley orginate from?' ,current_timestamp() , current_timestamp() , 2),
        ('How many championships do the 49ers have?' ,current_timestamp() , current_timestamp() , 3),
        ('Brent Burns and Jonathan Corture play for which of the following teams?' ,current_timestamp() , current_timestamp() , 3),
        ('Which team is the only team to win 70+ games and not win an NBA Championship?' ,current_timestamp() , current_timestamp() , 3),
        ('Which team had a pitcher play the most dominant post-season pitching ever in 2014?' ,current_timestamp() , current_timestamp() , 3),
        ('Who had the most dominant regular season for a player in their particular sport? ' ,current_timestamp() , current_timestamp() , 3);

INSERT INTO `answers` (`answer_phrase` ,`createdAt`,`updatedAt` ,`correct_answer` ,`QuestionId`)
VALUES ('Ashara Dayne' ,current_timestamp() , current_timestamp() , True , 1),
                ('Catelyn Stark' ,current_timestamp() , current_timestamp() , False ,  1),
        ('Ellaria Martell' ,current_timestamp() , current_timestamp() , False ,  1),
        ('Cersei Lannister' ,current_timestamp() , current_timestamp() , False ,  1),
        ('5' ,current_timestamp() , current_timestamp() , True , 6),
        ('3' ,current_timestamp() , current_timestamp() , False , 6),
        ('1' ,current_timestamp() , current_timestamp() , False , 6),
        ('4' ,current_timestamp() , current_timestamp() , False , 6),
        ('598' ,current_timestamp() , current_timestamp() , False , 2),
        ('Less than 100' ,current_timestamp() , current_timestamp() ,True, 2),
        ('Over 2000' ,current_timestamp() , current_timestamp() , False , 2),
        ('251' ,current_timestamp() , current_timestamp() , False , 2),
        ('Horn Hill' ,current_timestamp() , current_timestamp() , True, 5),
        ('Storm\'s End' ,current_timestamp() , current_timestamp() , False      , 5),
        ('Hornihill' ,current_timestamp() , current_timestamp() , False, 5),
        ('Castle Black' ,current_timestamp() , current_timestamp() , False, 5),
        ('San Jose Sharks' ,current_timestamp() , current_timestamp() , False, 7),
        ('San Jose Earthquakes' ,current_timestamp() , current_timestamp() , True, 7),
        ('Dallas Stars' ,current_timestamp() , current_timestamp() , False, 7),
        ('Arizona Coyotes' ,current_timestamp() , current_timestamp() , False, 7),
        ('Golden State Warriors' ,current_timestamp() , current_timestamp() , True, 8),
        ('Chicago Bulls' ,current_timestamp() , current_timestamp() , False, 8),
        ('LA Lakers' ,current_timestamp() , current_timestamp() , False, 8),
        ('Boston Celtics' ,current_timestamp() , current_timestamp() , False, 8),
        ('San Diego Padres' ,current_timestamp() , current_timestamp() , False, 9),
        ('Miami Marlins' ,current_timestamp() , current_timestamp() , False, 9),
        ('Kansas City Royals' ,current_timestamp() , current_timestamp() , False, 9),
        ('San Francisco Giants' ,current_timestamp() , current_timestamp() , True, 9),
        ('Joe Montana' ,current_timestamp() , current_timestamp() , False, 10),
        ('Patrick Marleau' ,current_timestamp() , current_timestamp() , False, 10),
        ('Steph Curry' ,current_timestamp() , current_timestamp() , True, 10),
        ('Barry Bonds' ,current_timestamp() , current_timestamp() , False, 10);
        

-- SELECT `id`,`test_name` FROM `tests` WHERE `test_name`="Game of Thrones Moments";
-- SELECT * FROM `tests`;

-- SELECT `questions`.`id` AS `questions_id` , `question_phrase` , `questions`.`TestId`,`answers`.`id` AS `answers_id`,`answer_phrase`
-- FROM `answers`
-- INNER JOIN `questions` ON `answers`.`QuestionId` = `questions`.`id`;