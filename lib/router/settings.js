Router.route('/settings', {
  name: 'settings',
  template: 'settings',
  data: function() {
    return {
      settings: Settings.findOne()
    }
  }
});
