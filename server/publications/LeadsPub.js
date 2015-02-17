Meteor.publish('leads', function () {
  return Leads.find({});
});
