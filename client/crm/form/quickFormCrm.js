AutoForm.setDefaultTemplateForType('afFormGroup', 'crm');

Template["afFormGroup_crm"].helpers({
  isComponentType: function(types) {
    if(typeof types == 'string') {
      types = [types];
    }
    var fieldAtts = this.afFieldInputAtts || {};
    var type = AutoForm.getInputType(fieldAtts);
    return _.indexOf(types, type) > -1;
  },
  crmFieldLabelAtts: function () {
    var atts = this.afFieldLabelAtts;
    return atts;
  },
  crmFieldInputAtts: function () {
    var fieldAtts = this.afFieldInputAtts || {};
    var labelAtts = this.afFieldLabelAtts || {};
    if(fieldAtts.type && fieldAtts.type == 'textarea' || fieldAtts.rows) {
      fieldAtts = AutoForm.Utility.addClass(fieldAtts, "materialize-textarea")
    }

    //var options = parseOptions(this.atts, 'afFieldInput');
    //log('>>>> label >>>>', options);
    //log('>>>> options >>>>', options.ss.namedContext(options.formId));
    //log('>>>> type >>>>', AutoForm.getInputType(fieldAtts));

    if(!fieldAtts.id) {
      fieldAtts.id = Date.now();
    }

    if(!labelAtts.for) {
      labelAtts.for = fieldAtts.id;
    }

    return fieldAtts;
  },
  label: function () {

    var name = this.atts.name;
    var label = name; // default to field name

    // ugly hack to figure out if schema is Post (the only one that's modifiable right now)
    if (getCurrentTemplate().indexOf("post") !== -1 && !!postSchemaObject[name].label) {
      var label = postSchemaObject[name].label;
    }

    return i18n.t(label);

  }
});


function parseOptions(options, helperName) {
  var hash = (options || {}).hash || {};
  // Find the autoform context
  var afContext = AutoForm.find(helperName);
  // Call getDefs for side effect of throwing errors when name is not in schema
  hash.name && AutoForm.Utility.getDefs(afContext.ss, hash.name);
  return _.extend({}, afContext, hash);
}
