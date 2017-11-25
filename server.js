// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const env = require('dotenv').load();
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 5201;
const path = require("path");

// Requiring our models for syncing
// =============================================================
const db = require("./app/models");

//For BodyParser
// =============================================================
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// For Passport
// =============================================================
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Static directory
// =============================================================
app.use(express.static('app/public'));

//For Handlebars
// =============================================================
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/app/views/layouts',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/app/views'));

// Routes
// =============================================================
app.get('/', function(req, res) {
     //res.sendFile(path.join(__dirname + '/app/public/index.html'));
    res.render('index', {
        title: 'quizomatic | home',
        subtitle: 'the latest in assessment',
		script: 'index'
    });
});

app.get('/dashboard-t', function(req, res) {
    res.render('dashboard-t', {
        title: 'instructor dashboard',
        subtitle: 'instructor dashboard',
        script: 'testCreate'
    });
});

app.get('/dashboard-s', function(req, res) {
    res.render('dashboard-s', {
        title: 'student dashboard',
        subtitle: 'student dashboard',
        script: 'testTake',
		data: ''
    });
});

app.get("/testTaker", function(req,res) {
	res.render("takeT", test);
});

require("./app/routes/api_routes.js")(app);
// let authRoute = 
require('./app/routes/auth.js')(app,passport);

 //load passport strategies for User login
require('./app/config/passport/passport.js')(passport, db.User);

// =============================================================
// The following block of code is for testing handlebars only. Delete before
// deploying project.
// 
// Testing handlebars for test-taking page.
// =============================================================

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

app.get("/testTaker", function(req,res) {
    res.render("testTake", test);
});

// =============================================================
// End of test block.
// =============================================================

// Syncing our sequelize models and then starting our Express app
// =============================================================
 
//Sync Database
db.sequelize.sync({ force: true })
	.then(function() {
		console.log('Nice! Database looks fine');


		app.listen(PORT, function(err) {

			if (!err){
				console.log("App listening on PORT " + PORT);
			}
			else {
				console.log(err);
			}

		}); 

	})
	.catch(function(err) {

		console.log(err, "Something went wrong with the Database Update!");

	})
;