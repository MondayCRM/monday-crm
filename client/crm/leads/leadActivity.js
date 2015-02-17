Template.leads_activity.created = function () {
  var instance = this;

  instance.isEdited = new ReactiveVar(false);

  AutoForm.addHooks(instance.data._id, {
    onSuccess: function (operation, result, template) {
      this.template.view.closestInstance('leads_activity').isEdited.set(false);
    }
  });

};

Template.leads_activity.helpers({
  isEdited: function () {
    return Template.instance().isEdited.get();
  }
});


Template.leads_activity.events({
  'click .edit-activity': function (e, instance) {
    e.preventDefault();
    instance.isEdited.set(true);
  }
});


