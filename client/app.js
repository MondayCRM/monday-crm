Template.registerHelper('join', function(array) {
  return array.join(', ');
});

Template.registerHelper('gravatar', function(email, options) {
  options = options || {};
  return Gravatar.imageUrl(email, options);
});


_.extend(Blaze.View.prototype,{
  closest: function(searchedViewName, prefix){
    prefix = prefix || 'Template.';
    searchedViewName = prefix + searchedViewName;
    currentView = this;
    while (currentView && currentView.name != searchedViewName){
      currentView = currentView.parentView;
    }
    return currentView;
  },
  closestInstance: function(searchedViewName) {
    return this.closest(searchedViewName)._templateInstance;
  }
});



EditableText.saveOnFocusout=false;


Session.set("Mongol", {
  'collections': ['Contacts', 'JobPositions', 'Leads', 'Activities', 'Users', 'Settings'],
  'display': true,
  'opacity_normal': ".7",
  'opacity_expand': ".9"
});
