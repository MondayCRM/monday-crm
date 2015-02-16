Leads = new Mongo.Collection('leads');


Leads.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String,
    defaultValue: Meteor.App.DEAL_STATUS.OPENED,
    allowedValues: leadStatuses
  }
}));


Leads.helpers({
  getJobPositions: function() {
    return JobPositions.find({_id: {$in: this.jobPositions_ids}});
  },
  getActivities: function() {
    return Activities.find({reference: {_id: this._id, collection: 'Leads'}});
  }
});
