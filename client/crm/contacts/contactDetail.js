Template[getTemplate('contactDetail')].rendered = function () {
  $('select').material_select();
};

Template[getTemplate('contactDetail')].helpers({
  typeIs: function(type, ifTrue, ifFalse) {
    ifTrue = ifTrue || true;
    ifFalse = ifFalse || false;
    return this.type == type ? ifTrue : ifFalse;
  }
});

Template[getTemplate('contactDetail')].events({
  'keyup #company-id': function (event) {
    var value = event.currentTarget.value;
    var search = {fulltext: value};
    Meteor.call('findCompanyData', search, function (error, result) {
    });
  },
  'click .toggle-type': function (event, instance) {
    var type = event.currentTarget.dataset.type;
    Contacts.update(this._id, {$set: {type: type}});
  }
});
