Settings = new Mongo.Collection("settings");

SettingsSchema = new SimpleSchema({
  language: {
    type: String,
    defaultValue: 'en',
    optional: true,
    autoform: {
      group: 'general',
      instructions: 'The app\'s language. Defaults to English.',
      options: function () {
        var languages = _.map(TAPi18n.getLanguages(), function (item, key) {
          return {
            value: key,
            label: item.name
          }
        });
        return languages
      }
    }
  },
});

Settings.attachSchema(SettingsSchema);
