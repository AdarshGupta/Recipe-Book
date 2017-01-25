// Meteor.subscribe('recipes');  Replaced with subscription at template level instead of whole client-side subscription

// Subscription at template level
Template.Recipes.onCreated(function() {
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});

console.log(Meteor.settings.public.ga.account);

Template.Recipes.helpers({
	recipes: function () {	// Can be replace by ()=> {}  which means This is the new ES2015 Arrow Function syntax. Essentially, you use it to preserve "this". () => { } accomplishes a function just as function() {} would, but passes the current 'this' into the function
		// ...
		return Recipes.find({}, {
			/*
			sort: Sort specifier,
			skip: Number,
			limit: Number,
			fields: Field specifier,
			reactive: Boolean,
			transform: Function
			*/
		});
	}
});