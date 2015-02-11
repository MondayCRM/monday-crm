Template[getTemplate('signInForm')].created = function() {
  var instance = this;
  instance.errorMessage = new ReactiveVar(null);
};

Template[getTemplate('signInForm')].helpers({
  errorMessage: function() {
    return Template.instance().errorMessage.get();
  }
});

Template[getTemplate('signInForm')].events({
  'submit #sign-in-form': function(event, instance) {
    event.preventDefault();

    var form = event.currentTarget;
    Meteor.loginWithPassword(
        form.email.value,
        form.password.value,
        function(error) {
          if (error) {
            instance.errorMessage.set(error);
          }
        }
    );
  }
});
