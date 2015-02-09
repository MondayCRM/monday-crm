// ------------------------------ Settings ------------------------------ //

getSetting = function(setting, defaultValue){
  var settings = Settings.find().fetch()[0];

  if (Meteor.isServer && Meteor.settings && !!Meteor.settings[setting]) { // if on the server, look in Meteor.settings
    return Meteor.settings[setting];

  } else if (Meteor.settings && Meteor.settings.public && !!Meteor.settings.public[setting]) { // look in Meteor.settings.public
    return Meteor.settings.public[setting];

  } else if(settings && (typeof settings[setting] !== 'undefined')) { // look in Settings collection
    return settings[setting];

  } else if (typeof defaultValue !== 'undefined') { // fallback to default
    return  defaultValue;

  } else { // or return undefined
    return undefined;
  }

};


// ------------------------------ Dynamic Templates ------------------------------ //


templates = {};

getTemplate = function (name) {
  // if template has been overwritten, return this; else return template name
  return !!templates[name] ? templates[name] : name;
};


// ------------------------------ Router ------------------------------ //
goTo = function(url){
  Router.go(url);
};



// http://stackoverflow.com/questions/2631001/javascript-test-for-existence-of-nested-object-key
checkNested = function(obj /*, level1, level2, ... levelN*/) {
  var args = Array.prototype.slice.call(arguments),
      obj = args.shift();

  for (var i = 0; i < args.length; i++) {
    if (!obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
};

log = console.log.bind(console);
