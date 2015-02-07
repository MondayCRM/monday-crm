Router.route('/contacts', {
  name: 'contacts',
  template: 'contactsList',
  data: function() {
    var contacts = Contacts.find({});
    return {
      contacts: contacts
    }
  }
});

Router.route('/contact/:_id', {
  name: 'contact',
  template: 'contactDetail',
  data: function() {
    var contact = Contacts.findOne({_id: this.params._id});
    return {
      contact: contact,
    };
  }
});


Router.route('/contact/new', {
  name: 'new-contact',
  template: 'contactDetail'
});

