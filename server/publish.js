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