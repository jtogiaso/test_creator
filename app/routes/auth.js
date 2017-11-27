 var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app , passport) {


	let user_type = true;
 
    app.get('/', isAlreadyLoggedIn, authController.sign);
 	app.post('/signup', passport.authenticate('local-signup', 
 		{
	        successRedirect: '/dashboard',
	 
	        failureRedirect: '/'
	    }
 
	));

	app.get('/dashboard', isLoggedIn, authController.dashboard);
	app.get('/logout',authController.logout);
	app.post('/signin', passport.authenticate('local-signin', 
		{
	        successRedirect: '/dashboard',
	 
	        failureRedirect: '/'
	    }
	));

	var testObj = {
        test_name: "whatever",
        1: {
            question_phrase: "question1",
            answers: {
                1: {phrase: "answer1"},
                2: {phrase: "answer2"},
                3: {phrase: "answer3"},
                4: {phrase: "answer4"}
            }
        },
        2: {
            question_phrase: "question2",
            answers: {
                1: {phrase: "answer1"},
                2: {phrase: "answer2"},
                3: {phrase: "answer3"},
                4: {phrase: "answer4"}
            }
        },
        3: {
            question_phrase: "question3",
            answers: {
                1: {phrase: "answer1"},
                2: {phrase: "answer2"},
                3: {phrase: "answer3"},
                4: {phrase: "answer4"}
            }
        },
        4: {
            question_phrase: "question4",
            answers: {
                1: {phrase: "answer1"},
                2: {phrase: "answer2"},
                3: {phrase: "answer3"},
                4: {phrase: "answer4"}
            }
        },
        5: {
            question_phrase: "question5",
            answers: {
                1: {phrase: "answer1"},
                2: {phrase: "answer2"},
                3: {phrase: "answer3"},
                4: {phrase: "answer4"}
            }
        }
    };

    var test = {
        testObj: testObj
    };

	app.get("/testTaker", authController.take_test);



	function isLoggedIn(req, res, next) {
 
		if (req.isAuthenticated()) {
		     
			return next();
		}

		res.redirect('/');
 
	}

	function isAlreadyLoggedIn(req, res, next) {
 
	    if (!req.user)
	     
	        return next();
	         
	    res.redirect('/dashboard');
 
	}
}