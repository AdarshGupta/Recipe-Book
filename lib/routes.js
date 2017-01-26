// Though  thid didn't get any error acc. ti tutsplus to use it in MEteor lient check it
if (Meteor.isClient) {
	Accounts.onLogin(function() {
	FlowRouter.go('recipe-book');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('Home');
	});
}







// To not allow entry to recipe page without loggin in by( enter into url /recipe-book)
// when a route is triggered
FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('Home');
	}
}]);



FlowRouter.route('/', {
	name: 'Home',
	action(){
		// To redirect to recipes page if user is logged in
		if (Meteor.userId()) {
			FlowRouter.go('recipe-book');
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

// Don't repeat the names of the routes it could be ambiguous
FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});