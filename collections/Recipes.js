Recipes = new Mongo.Collection('recipes');

// Since we have removed the insecure package. This says who is allowed to insert
Recipes.allow({
	insert: function (userId, doc) {
		return !!userId;
	}
	// },
	// update: function (userId, doc, fields, modifier) {
	// 	//...
	// },
	// remove: function (userId, doc) {
	// 	//...
	// },
	// fetch: ['owner'],
	// transform: function () {
	// 	//...
	// }
});


Ingredient = new SimpleSchema({
	name: {
		type: String,
	},
	amount: {
		type: String
	}
});

RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	description: {
		type: String,
		label: "Description"
	},
	ingredients: {
		type: [Ingredient]
		// By putting 'Ingredient' in [] --> array, auto for automatically creates actions to add and drop 
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		autoform: {
			type: "hidden"
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId;
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date();
		},
		autoform: {
			type: "hidden"
		}
	}
});

Recipes.attachSchema(RecipeSchema);