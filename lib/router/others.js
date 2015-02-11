Router.route('/', {
  name: 'home',
  layoutTemplate: 'baseLayout',
  template: getTemplate('home'),
  action: function () {
    this.render();
  }
});



Router.route('/sign-out', {
  name: 'signOut',
  template: getTemplate('home'),
  onBeforeAction: function() {
    Meteor.logout(function() {});
    goTo('home');
    this.next();
  }
});
