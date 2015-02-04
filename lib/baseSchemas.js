contactsSchema = new SimpleSchema({
  emails: {
    type: Array,
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  phones: {
    type: Array,
    optional: true
  },
  "phones.$.number": {
    type: String
  },
  website: {
    type: Array,
    optional: true
  },
  "website.$.url": {
    type: String
  }
});
