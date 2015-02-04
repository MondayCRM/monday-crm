Router.configure({
  layoutTemplate: 'baseLayout',

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