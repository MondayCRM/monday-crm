Activities = new Meteor.Collection('activities');

Activities.attachSchema(new SimpleSchema({
  reference: {
    type: Object
  },
  'reference._id': {
    type: String
  },
  'reference.collection': {
    type: String
  },
  type: {
    type: String,
    defaultValue: Meteor.App.ACTIVITY_TYPES.CALL,
    allowedValues: activityTypes
  },
  status: {
    type: String,
    defaultValue: Meteor.App.ACTIVITY_STATUS.OPENED,
    allowedValues: activityStatuses
  },
  description: {
    type: String,
    optional: true
  },
  createdBy_id: {
    type: String
  },
  assignedTo_id: {
    type: String,
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      }
    }
  }
}));
