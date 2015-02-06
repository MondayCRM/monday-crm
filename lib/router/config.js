Router.configure({
  layoutTemplate: 'adminLayout',
  loadingTemplate: 'loading',

  waitOn: function () {
    return [
      Meteor.subscribe('contacts'),
      Meteor.subscribe('jobPositions'),
      Meteor.subscribe('deals'),
      Meteor.subscribe('activities'),
      Meteor.subscribe('tasks')
    ]
  }
});