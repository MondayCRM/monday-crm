Meteor.methods({
  findCompanyData: function(search) {
    var data = [];
    _.each(findCompanyDataServerCallback, function(cb) {
      log('data >>', data);
      data = cb(search, data);
    });

    return data;
  }
});
