USE `test_creation`;

INSERT INTO `roles` (`role_type` ,`createdAt` , `updatedAt`)
VALUES ('Test Creator' , current_timestamp()  , current_timestamp()),
		('Test Taker' , current_timestamp()  , current_timestamp() ),
        ('Test Reviewer' , current_timestamp() , current_timestamp());
        
INSERT INTO `users` (`firstname` , `lastname` , `email`, `password`, `status`, `createdAt` , `updatedAt` ,`RoleId`)
VALUES ('kelly' , 'fisher', 'kelly.fisher@gmail.com', '$2a$08$3JwWyyftP6p49mMyonxV..efTuwjIPHu/ioX8tor2L3ZAwmkDYX76' , 'active' , current_timestamp()  , current_timestamp() , 1),
		('frank' , 'till', 'frank.till@gmail.com', '$2a$08$XFhYgmln.C4TzTPrngYeaOiqm.wx6Grm4AUpSO/lTgPESmp3oXx5e' , 'active' , current_timestamp()  , current_timestamp() , 1),
        ('preston' , 'james', 'preston.james@gmail.com', '$2a$08$u447MblnB79HFdsv1cK1NeXai/aNQoTKq8GZlQT1z/kX7LAuJ.kAG' , 'active' , current_timestamp()  , current_timestamp() , 2),
        ('shane' , 'tommen', 'shane.tommen@gmail.com', '$2a$08$nOmpbqkYuzaiWSrNGnZYS.CIyaQSjHrnAjv6szxI3JpXI85aGoyJO' , 'active' , current_timestamp()  , current_timestamp() , 3);
        
INSERT INTO `tests` (`test_name`,`createdAt`,`updatedAt` , `UserId`)
VALUES ('Chemistry 101 First Quarter Test' ,current_timestamp() , current_timestamp() , 2),
		('Game of Thrones Moments' ,current_timestamp() , current_timestamp() , 2),
        ('Top 10 Best Sports Teams' ,current_timestamp() , current_timestamp() , 1),
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
        ('How many championships do the 49ers have?' ,current_timestamp() , current_timestamp() , 3);

INSERT INTO `answers` (`answer_phrase` ,`createdAt`,`updatedAt` ,`correct_answer` ,`QuestionId`)
VALUES ('Ashara Dayne' ,current_timestamp() , current_timestamp() , True , 1),
		('Catelyn Stark' ,current_timestamp() , current_timestamp() , False ,  1),
        ('Ellaria Martell' ,current_timestamp() , current_timestamp() , False ,  1),
        ('Cersei Lannister' ,current_timestamp() , current_timestamp() , False ,  1),
        ('5' ,current_timestamp() , current_timestamp() , True , 6),
        ('1' ,current_timestamp() , current_timestamp() , False , 6),
        ('3' ,current_timestamp() , current_timestamp() , False, 6);

SELECT * FROM `tests`;