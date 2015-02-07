Template[getTemplate('contactDetail')].events({
  'keyup #company-id': function(event) {
    value = event.currentTarget.value;
    log(value.length);
  }
});
