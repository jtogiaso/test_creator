

exports.sign = function(req, res) {
    res.render('sign');
}

exports.dashboard = function(req, res) {
 	
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

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}