if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see lib/constants.js');
}

Meteor.App = {
  NAME: 'Meteor Boilerplate',
  ROLES: {
    ADMIN: "admin",
    SELLER: "seller",
    USER: "user"
  },
  LEAD_STATUS: {
    PENDING: 'pending',
    OPENED: 'opened',
    WON: 'won',
    LOST: 'lost'
  },
  TASK_STATUS: {
    OPENED: 'opened',
    CLOSED: 'closed'
  },
  ACTIVITY_TYPES: {
    CALL: 'call',
    EMAIL: 'email',
    MEET: 'meet'
  },
  CONTACTS_TYPES: {
    COMPANY: 'company',
    PERSON: 'person'
  }
};


leadStatuses = [];
_.each(Meteor.App.LEAD_STATUS, function (value) {
  leadStatuses.push(value);
});

taskStatuses = [];
_.each(Meteor.App.TASK_STATUS, function (value) {
  taskStatuses.push(value);
});

activityTypes = [];
_.each(Meteor.App.ACTIVITY_TYPES, function (value) {
  activityTypes.push(value);
});

contactsTypes = [];
_.each(Meteor.App.CONTACTS_TYPES, function (value) {
  contactsTypes.push(value);
});
