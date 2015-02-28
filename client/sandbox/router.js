Router.route('/sandbox/contactListBox', {
  layoutTemplate: 'contactListBox_sandbox',
  name: 'contactListBox_sandbox',
  template: 'contactListBox_sandbox',
  action: function () {
    this.render();
  }
});

Router.route('/sandbox/contactDetail', {
  layoutTemplate: 'contactDetail_sandbox',
  name: 'contactDetail_sandbox',
  template: 'contactDetail_sandbox',
  action: function () {
    this.render();
  }
});

Router.route('/sandbox/leadBoxes', {
  layoutTemplate: 'sandboxLayout',
  name: 'leadBoxes_sandbox',
  template: 'leadBoxes_sandbox',
  action: function () {
    this.render();
  }
});
