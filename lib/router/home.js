Router.route('/', {
  name: 'home',
  layoutTemplate: 'baseLayout',
  template: 'home',
  action: function () {
    this.render();
  }
});
