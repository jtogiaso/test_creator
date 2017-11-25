 var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app , passport) {
 
    app.get('/signup', authController.signup);
 	app.get('/signin', authController.signin);
 	app.post('/signup', passport.authenticate('local-signup',
 		{
	        successRedirect: '/dashboard-t',
	        //successRedirect: '/dashboard-s',
	 
	        failureRedirect: '/index'
	    } 	    
 
	));
	app.get('/dashboard-t', isLoggedIn, authController.dashboard);
	//app.get('/dashboard-s', isLoggedIn, authController.dashboard);	
	app.get('/logout',authController.logout);
	app.post('/signin', passport.authenticate('local-signin', 

		{
	        successRedirect: '/dashboard-t',
	        //successRedirect: '/dashboard-s',
	 
	        failureRedirect: '/index'
	    }	    
	));





	function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/dashboard-t');
    //res.redirect('/dashboard-s');
 
	}


	function isAlreadyLoggedIn(req, res, next) {
 
    if (!req.user)
     
        return next();
         
    res.redirect('/dashboard-t');
    //res.redirect('/dashboard-s');
 
	}
}
