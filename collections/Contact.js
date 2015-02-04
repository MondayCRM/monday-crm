Contacts = new Mongo.Collection('contacts');


var contactsSchema = new SimpleSchema([{
  name: {
    type: String
  },
  description: {
    type: String,
    optional: true
  },
  website: {
    type: [Object],
    optional: true
  },
  "website.$.url": {
    type: String
  }
}, contactsFieldsSchema]);

Contacts.attachSchema(contactsSchema);
