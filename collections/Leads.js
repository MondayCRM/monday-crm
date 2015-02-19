Leads = new Meteor.Collection('leads');

Leads.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String,
    defaultValue: Meteor.App.LEAD_STATUS.OPENED,
    allowedValues: leadStatuses
  },
  progress: {
    type: Number
  },
  createdBy_id: {
    type: String
  },
  assignedTo_id: {
    type: String
  },

  contacts_ids: {
    type: [Object],
    minCount: 0
  },
  "contacts_ids.$._id": {
    type: String
  },
  "contacts_ids.$.sort": {
    type: Number
  },

  jobPositions_ids: {
    type: [Object],
    minCount: 0
  },
  "jobPositions_ids.$._id": {
    type: String
  },
  "jobPositions_ids.$.sort": {
    type: Number
  }
}));


Leads.helpers({
  getContacts: function() {
    var ids = [];
    _.each(this.contacts_ids, function(value) {
      ids.push(value._id);
    });
    return Contacts.find({_id: {$in: ids}});
  },
  getJobPositions: function() {
    var ids = [];
    _.each(this.jobPositions_ids, function(value) {
      ids.push(value._id);
    });
    return JobPositions.find({_id: {$in: ids}});
  },
  getNotes: function() {
    return this.filterActivities({type: Meteor.App.ACTIVITY_TYPES.NOTE});
  },
  getActivities: function() {
    return Activities.find({reference: {_id: this._id, collection: 'Leads'}});
  },
  filterActivities: function(filter) {
    filter = _.extend(filter, {'reference._id': this._id, 'reference.collection': 'Leads'});
    return Activities.find(filter);
  }
});
