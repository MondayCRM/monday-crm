Template[getTemplate('importCsv')].created = function() {
  var instance = this;
  instance.preview = ReactiveVar(null);
  instance.columnHeaders = ReactiveVar(null);
};


Template[getTemplate('importCsv')].helpers({
  previewRow: function(rowName) {
    var preview = Template.instance().preview.get();
    return preview[rowName];
  },
  columnHeaders: function() {
    return Template.instance().columnHeaders.get();
  }
});


Template[getTemplate('importCsv')].events({
  'submit #import-csv-form': function (event, instance) {
    event.preventDefault();
    var csv = event.currentTarget.csv.value;

    var data = parsePreview(csv);
    instance.preview.set(data.preview);
    instance.columnHeaders.set(data.meta.fields);
  }
});
