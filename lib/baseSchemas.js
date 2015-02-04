contactsFieldsSchema = new SimpleSchema({
  emails: {
    type: [Object],
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  phones: {
    type: [Object],
    optional: true
  },
  "phones.$.number": {
    type: String
  }
});
