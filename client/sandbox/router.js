Router.route('/sandbox/contactListBox', {
  layoutTemplate: 'sandboxLayout',
  name: 'contactListBox_sandbox',
  template: 'contactListBox_sandbox',
  action: function () {
    this.render();
  }
});

Router.route('/sandbox/contactDetail', {
  layoutTemplate: 'sandboxLayout',
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
