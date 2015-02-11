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
  'change #type': function (event) {
    var type = event.target.value;
    Contacts.update(this._id, {$set: {type: type}});
  }
/*
  ,
  'click [data-role="button"]': function(e) {
    if ($(e.target).text() == "edit"){
      $(e.target).text("save");
      Session.set("editing", true);
    }else{
      $(e.target).text('edit');
      Session.set("editing", false);
      }
  }
  */
});
