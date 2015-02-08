Router.route('/deals', {
  name: 'deals',
  template: 'dealsList',
  data: function() {
    return {
      deals: Deals.find({})
    }
  }
});
