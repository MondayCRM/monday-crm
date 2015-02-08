Meteor.startup(function () {

  Router.route('/import-csv', {
    name: 'importCsv',
    template: getTemplate('importCsv')
  });

});
