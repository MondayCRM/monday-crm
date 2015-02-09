parsePreview = function(csv) {
  var parsed = Papa.parse(csv, {
    preview: 5,
    header: true,
    skipEmptyLines: true
  });

  var preview = {};
  _.each(parsed.data, function(row, index) {
    _.each(row, function(cell, columnName) {
      if(!preview[columnName]) preview[columnName] = [];
      preview[columnName][index] = cell;
    });
  });

  parsed.preview = preview;

  return parsed;
};
