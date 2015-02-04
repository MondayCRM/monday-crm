Router.route('/', {
  template: 'home',
  action: function () {
    this.render();
  }
});


Router.route('/deals', {
  name: 'dealsList',
  template: 'deals_list',
  data: function() {
    return {items: Deals.find({})}
  },
  action: function () {
    this.render();
  }
});

Router.route('/deal/:_id', {
  name: 'dealDetail',
  template: 'deal_detail',
  data: function() {
    return {
      deal: Deals.findOne({_id: this.params._id})
    };
  },
  action: function () {
    this.render();
  }
});


Router.route('/tasks', {
  template: 'tasks.tasksList',
  action: function () {
    this.render();
  }
});


Router.route('/admin/users', {
  name: 'admin.users',
  layoutTemplate: 'adminLayout',
  waitOn: function () {
    return Meteor.subscribe("users-i-can-manage");
  },
  action: function () {
    this.render();
  }
});

Router.route('/admin/user/:_id', {
  name: 'admin.userEdit',
  layoutTemplate: 'adminLayout',
  waitOn: function () {
    return Meteor.subscribe("users-i-can-manage", this.params._id);
  },
  data: function() {
      return Users.findOne({_id: this.params._id});
  },
  action: function () {
    this.render();
  }
});
