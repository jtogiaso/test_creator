// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require('express')
const app = express()
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const env = require('dotenv').load()
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 8080;
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

//For Handlebars
// =============================================================
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Static directory
// =============================================================
app.use(express.static("public"));

// Routes
// =============================================================
app.get('/', function(req, res) {
 
    res.sendFile(path.join(__dirname + '/app/public/index.html'));
 
});

require("./app/routes/api_routes.js")(app);
// let authRoute = 
require('./app/routes/auth.js')(app,passport);

 //load passport strategies for User login
require('./app/config/passport/passport.js')(passport, db.User);



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
				console.log(err)
			}

		}); 

	})
	.catch(function(err) {

		console.log(err, "Something went wrong with the Database Update!")

	})
;