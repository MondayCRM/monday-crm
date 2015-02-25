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
  ACTIVITY_STATUS: {
    OPENED: 'opened',
    COMPLETED: 'completed'
  },
  ACTIVITY_STATUS_ICONS: {
    OPENED: 'mdi-device-access-time',
    COMPLETED: 'mdi-action-done'
  },
  ACTIVITY_TYPES: {
    NOTE: 'note',
    CALL: 'call',
    EMAIL: 'email',
    MEET: 'meet',
    TASK: 'task'
  },
  ACTIVITY_TYPES_ICONS: {
    NOTE: 'mdi-editor-border-color',
    CALL: 'mdi-maps-local-phone',
    EMAIL: 'mdi-communication-email',
    MEET: 'mdi-maps-place',
    TASK: 'mdi-action-speaker-notes'
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

activityStatuses = [];
_.each(Meteor.App.ACTIVITY_STATUS, function (value) {
  activityStatuses.push(value);
});

activityStatusesIcons = [];
_.each(Meteor.App.ACTIVITY_STATUS_ICONS, function (value) {
  activityStatusesIcons.push(value);
});

activityTypes = [];
_.each(Meteor.App.ACTIVITY_TYPES, function (value) {
  activityTypes.push(value);
});

activityTypesIcons = [];
_.each(Meteor.App.ACTIVITY_TYPES_ICONS, function (value) {
  activityTypesIcons.push(value);
});

contactsTypes = [];
_.each(Meteor.App.CONTACTS_TYPES, function (value) {
  contactsTypes.push(value);
});
