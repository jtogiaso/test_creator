

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
        console.log("This guy is a taker!");
	    res.render('dashboard-s', {
	        title: 'student dashboard',
	        subtitle: 'student dashboard',
	        script: 'testTake',
			test: ''
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


exports.take_test = (req, res) => {
    console.log("about to take test");
 	res.render('takeT', {
            title: 'take tesr',
            subtitle: 'take test',
            script: '',
            test: ''
        });
    console.log("test loaded");
}

