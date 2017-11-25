 
exports.signup = function(req, res) {
    
    res.render('index');
 
}

exports.signin = function(req, res) {
 
    res.render('index');
 
}

exports.dashboard = function(req, res) {
		console.log(req.user);
		console.log(req.sessionID);
 
    res.render('dashboard-t');
    //res.render('dashboard-s');
 
}



exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}