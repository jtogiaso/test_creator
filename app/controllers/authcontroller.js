

exports.sign = (req, res) => {
        res.render('sign', {
        title: 'quizomatic | home',
        subtitle: 'the latest in assessment',
		script: 'index'
    });
}

exports.dashboard = (req, res) => {
 	
	if (req.user.RoleId === 1){
		console.log("This guy is a creator!");
	 	res.render('dashboard-t', {
	        title: 'instructor dashboard',
	        subtitle: 'instructor dashboard',
	        script: 'testCreate'
	    });
	 }
	 else if (req.user.RoleId === 2){
	    res.render('dashboard-s', {
	        title: 'student dashboard',
	        subtitle: 'student dashboard',
	        script: 'testTake',
			data: ''
	    });
	 }
	 else if (req.user.RoleId === 3){
	 	res.send("You are a reviewer! This page is coming soon!");
	 }
	 else{
	 	res.send("This page does not exist");
	 }
 
}

exports.logout = (req, res) => {
 
    req.session.destroy( (err) => {
 
        res.redirect('/');
 
    });
 
}


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


exports.take_test = (req, res) => {
 
 	res.render("takeT", req.body.test);
 
}

