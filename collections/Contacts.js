Contacts = new Mongo.Collection('contacts');


ContactsSchema = new SimpleSchema([{
  type: {
    type: String,
    defaultValue: Meteor.App.CONTACTS_TYPES.COMPANY,
    allowedValues: contactsTypes
  },
  name: {
    type: String
  },
  description: {
    type: String,
    optional: true
  },
  companyId: {
    type: String,
    label: 'Company Id',
    optional: true
  },
  taxId: {
    type: String,
    label: 'Tax Id',
    optional: true
  },
  vatId: {
    type: String,
    label: 'Vat Id',
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
