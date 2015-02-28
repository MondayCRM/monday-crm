Router.route('/sandbox/contactDetail', {
  layoutTemplate: 'sandboxLayout',
  name: 'contactDetail_sandbox',
  template: 'contactDetail_sandbox',
  action: function () {
    this.render();
  }
});
