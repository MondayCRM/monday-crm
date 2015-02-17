Router.route('/leads', {
  name: 'leads',
  template: 'leadsList',
  data: function() {
    return {
      leads: Leads.find({})
    }
  }
});


Router.route('/lead/:_id', {
  name: 'lead',
  template: 'leadDetail',
  data: function() {
    return {
      lead: Leads.findOne({_id: this.params._id})
    }
  }
});
