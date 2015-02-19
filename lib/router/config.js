Router.configure({
  layoutTemplate: 'crmLayout',
  loadingTemplate: 'loading',

  waitOn: function () {
    return [
      Meteor.subscribe('settings'),
      Meteor.subscribe('contacts'),
      Meteor.subscribe('jobPositions'),
      Meteor.subscribe('leads'),
      Meteor.subscribe('activities')
    ]
  }
});
