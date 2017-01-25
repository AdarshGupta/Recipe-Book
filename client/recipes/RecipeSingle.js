// Meteor.subscribe('recipes');  Replaced with subscription at template level instead of whole client-side subscription

// Subscription at template level
Template.RecipeSingle.onCreated(function() {
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});

console.log(Meteor.settings.public.ga.account);

Template.RecipeSingle.helpers({
	recipe: function () {	// Can be replace by ()=> {}  which means This is the new ES2015 Arrow Function syntax. Essentially, you use it to preserve "this". () => { } accomplishes a function just as function() {} would, but passes the current 'this' into the function
		// ...
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id}, {
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