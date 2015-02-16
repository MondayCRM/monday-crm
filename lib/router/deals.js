Router.route('/leads', {
  name: 'leads',
  template: 'leadsList',
  data: function() {
    return {
      leads: Leads.find({})
    }
  }
});
