 var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app , passport) {
	// console.log("<--------------------------------------------------------------------------->");
	// console.log(passport);
	// console.log("<--------------------------------------------------------------------------->");

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