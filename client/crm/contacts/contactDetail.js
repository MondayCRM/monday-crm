Template[getTemplate('contactDetail')].events({
  'keyup #company-id': function(event) {
	var value = event.currentTarget.value;
 	var search = {fulltext: value};
	Meteor.call('findCompanyData', search, function(error, result) {
	});
  },
  'change #type': function(event) {
		console.log(event.target.value);
	}
});

Template.contactDetail.rendered = function () {
	$('select').material_select();
};

