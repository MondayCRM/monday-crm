Meteor.methods({
  findCompanyData: function(search) {
    var data = [];
    _.each(findCompanyDataServerCallback, function(cb) {
      data = cb(search, data);
    });

    return data;
  },

  getContactsImportableFields: function() {
    var importable = {
      fields: ['name', 'description', 'companyId', 'taxId', 'vatId', 'address.street', 'address.city', 'address.postalCode', 'address.country'],
      labels: {}
    };
    _.each(importable.fields, function(value) {
      importable.labels[value] = ContactsSchema.label(value)
    });

    return importable;
  }
});
