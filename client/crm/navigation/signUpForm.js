Template[getTemplate('signUpForm')].created = function() {
  var instance = this;
  instance.errorMessage = new ReactiveVar(null);
};


Template[getTemplate('signUpForm')].helpers({
  errorMessage: function() {
    return Template.instance().errorMessage.get();
  }
});

Template[getTemplate('signUpForm')].events({
  'submit #sign-up-form': function(event, instance) {
    event.preventDefault();

    var form = event.currentTarget;
    Accounts.createUser({
      email: form.email.value,
      password: form.password.value,
      profile: {
        name: form.name.value
      }
    }, function(error) {
      if (error) {
        instance.errorMessage.set(error);
      }
    });
  }
});
