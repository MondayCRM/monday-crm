Router.onBeforeAction(function() {
  if (!this.ready()) {
    this.render(getTemplate('loading'));
  } else {
    this.next();
  }
});





coreSubscriptions = new SubsManager({
  // cache recent 50 subscriptions
  cacheLimit: 50,
  // expire any subscription after 30 minutes
  expireIn: 30
});
