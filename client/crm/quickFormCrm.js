AutoForm.setDefaultTemplateForType('afFormGroup', 'crm');

Template["afFormGroup_crm"].helpers({
  customAfFieldInputAtts: function () {
    var atts = _.clone(this.afFieldInputAtts || {});
    log('>>>>', atts);
    if(atts.type && atts.type == 'textarea' || atts.rows) {
      atts = AutoForm.Utility.addClass(atts, "materialize-textarea")
    }
    //atts.template = "bootstrap3";
    return atts;
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

