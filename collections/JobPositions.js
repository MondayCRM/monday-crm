JobPositions = new Meteor.Collection('jobPositions');

var jobPositionsSchema = new SimpleSchema([{
  employer_id: {
    type: String
  },
  jobholder_id: {
    type: String
  },
  name: {
    type: String,
    label: "Position name",
    optional: true
  },
  description: {
    type: String,
    optional: true
  }
}, contactsFieldsSchema]);

JobPositions.attachSchema(jobPositionsSchema);


JobPositions.helpers({
  getEmployerName: function() {
    if(!this.employer_id) return null;
    return Contacts.findOne(this.employer_id).name;
  },
  getJobholderName: function() {
    if(!this.jobholder_id) return null;
    return Contacts.findOne(this.jobholder_id).name;
  }
});
