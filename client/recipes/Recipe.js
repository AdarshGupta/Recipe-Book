Template.Recipe.events({
	'click .toggle-menu': function () {
		// ...
		// To call Meteor method and pass arguments
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	}
});