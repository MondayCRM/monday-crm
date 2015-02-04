Persons = new Mongo.Collection('persons');


var personsSchema = new SimpleSchema([{
  name: {
    type: String
  },
  description: {
    type: String,
    optional: true
  }
}, contactsFieldsSchema]);

Persons.attachSchema(personsSchema);
