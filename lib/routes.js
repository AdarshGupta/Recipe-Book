FlowRouter.route('/', {
	name: 'Home',
	action(){
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/test', {
	name: 'test',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Test'});
	}
});