FlowRouter.route('/', {
	name: 'Home',
	action(){
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});