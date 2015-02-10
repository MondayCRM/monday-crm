parserOptions = {
  //header: true,
  skipEmptyLines: true
};


parsePreview = function(csv) {
  var options = _.extend(_.clone(parserOptions), {
    preview: 3
  });
  var parsed = Papa.parse(csv, options);


  var preview = {};
  _.each(parsed.data, function(row, index) {
    _.each(row, function(cell, columnName) {
      if(!preview[columnName]) preview[columnName] = [];
      preview[columnName][index] = cell;
    });
  });


  var fields = [];
  if(!checkNested(parsed, 'meta.fields')) {
    _.each(preview, function(row, columnName) {
      fields.push(columnName)
    });
  } else {
    fields = parsed.meta.fields;
  }


  parsed.preview = preview;
  parsed.fields = fields;

  return parsed;
};


prepareForInsert = function(entity) {
  var newEntity = {}, newKey = null;
  _.each(entity, function(value, key) {
    newKey = key;
    if(S(newKey).contains('.')) {
      newKey = newKey.split('.');
      assignToObject(newEntity, newKey, value);
    } else {
      newEntity[newKey] = value;
    }
  });

  return newEntity;
};

processCsv = function(csv, mapping) {
  var options = _.extend(_.clone(parserOptions), {});
  var parsed = Papa.parse(csv, options);
  var result = {
    imported: 0,
    skipped: 0,
    errors: []
  };

  _.each(parsed.data, function(row, index) {
    var entity = {};
    _.each(row, function(cell, columnName) {
      var key = mapping[columnName];
      if(!key) return;
      entity[mapping[columnName]] = cell;
    });

    entity = prepareForInsert(entity);

    if(!isObjectEmpty(entity)) {
      var context = Contacts.simpleSchema().namedContext();
      if(context.validate(entity, {modifier: false})) {
        Contacts.insert(entity);
        result.imported++;
        return
      } else {
        _.each(context.invalidKeys(), function (value) {
          var error = value.name,
              message = context.keyErrorMessage(error);
          result.errors.push('row: ' + (index + 1) + ', error: ' + message);
        });
      }
    }
    result.skipped++;
  });

  return result;
};
