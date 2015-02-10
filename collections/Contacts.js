Contacts = new Mongo.Collection('contacts');


ContactsSchema = new SimpleSchema([{
  name: {
    type: String
  },
  description: {
    type: String,
    optional: true
  },
  companyId: {
    type: String,
    optional: true
  },
  taxId: {
    type: String,
    optional: true
  },
  vatId: {
    type: String,
    optional: true
  },

  address: {
    type: Object,
    optional: true
  },
  'address.street': {
    type: String,
    optional: true
  },
  'address.city': {
    type: String,
    optional: true
  },
  'address.postalCode': {
    type: String,
    optional: true
  },
  'address.country': {
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

Contacts.attachSchema(ContactsSchema);
