Template[getTemplate('importCsv')].created = function() {
  var instance = this;
  instance.preview = ReactiveVar(null);
  instance.columnHeaders = ReactiveVar(null);
  instance.importableFields = ReactiveVar(null);
  instance.processButtonText = ReactiveVar('Import');
  instance.processErrors = ReactiveVar([]);
  Meteor.call('getContactsImportableFields', function(error, result) {
    instance.importableFields.set(result);
  });
};


Template[getTemplate('importCsv')].helpers({
  previewRow: function(rowName) {
    var preview = Template.instance().preview.get();
    return preview[rowName];
  },
  columnHeaders: function() {
    return Template.instance().columnHeaders.get();
  },
  fields: function() {
    var fields = Template.instance().importableFields.get();
    return fields.fields;
  },
  labelFor: function(field) {
    var fields = Template.instance().importableFields.get();
    return fields.labels[field];
  },
  processButtonText: function() {
    return Template.instance().processButtonText.get();
  },
  processErrors: function() {
    return Template.instance().processErrors.get();
  }
});


Template[getTemplate('importCsv')].events({
  'submit #import-csv-form': function (event, instance) {
    event.preventDefault();
    var csv = event.currentTarget.csv.value;

    var data = parsePreview(csv);
    instance.preview.set(data.preview);
    instance.columnHeaders.set(data.fields);
  },
  'submit #process-csv-data': function (event, instance) {
    event.preventDefault();
    instance.processButtonText.set('Processing...');
    var mapping = {};
    _.each($( event.currentTarget ).serializeArray(), function(value) {
      mapping[value.name] = value.value;
    });

    var result = processCsv(document.getElementById('import-csv-form').csv.value, mapping);
    instance.processButtonText.set('Imported: ' + result.imported + ', skipped: ' + result.skipped);
    instance.processErrors.set(result.errors);

  }
});
