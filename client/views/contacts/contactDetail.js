Template[getTemplate('contactDetail')].events({
  'keyup #company-id': function(event) {
    var value = event.currentTarget.value;

    var search = {fulltext: value};

    Meteor.call('findCompanyData', search, function(error, result) {

    });
  }
});
