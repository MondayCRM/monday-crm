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

Router.route('/sandbox/leadListBox', {
  layoutTemplate: 'sandboxLayout',
  name: 'leadListBox_sandbox',
  template: 'leadListBox_sandbox',
  action: function () {
    this.render();
  }
});
