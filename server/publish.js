Meteor.publish('recipes', function () {
	return Recipes.find({author: this.userId}, {
		/*
		sort: Sort specifier,
		skip: Number,
		limit: Number,
		fields: Field specifier,
		reactive: Boolean,
		transform: Function
		*/
	});
});

Meteor.publish('singleRecipe', function (id) {
	check(id, String);
	return Recipes.find({_id: id}, {
		/*
		sort: Sort specifier,
		skip: Number,
		limit: Number,
		fields: Field specifier,
		reactive: Boolean,
		transform: Function
		*/
	});
});