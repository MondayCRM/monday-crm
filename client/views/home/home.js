if (Meteor.isClient) {
	Template.home.rendered = function () {
		$('ul.tabs').tabs();
	}
}