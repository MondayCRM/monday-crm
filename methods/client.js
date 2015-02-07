Meteor.methods({
  findCompanyData: function(search) {
    var data = [];
    _.each(findCompanyDataServerCallback, function(cb) {
      data = cb(search, data);
    });

    return data;
  }
});
