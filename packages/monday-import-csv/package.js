Package.describe({
  summary: "Monday CRM import CSV package",
  version: '0.0.1'
});

Package.onUse(function (api) {

  api.use([
    'monday-base',
    'templating',
    'underscore',
    'iron:router'
  ]);

  api.add_files([
    'lib/parser.js',
    'lib/routes.js'
  ], ['client', 'server']);


  api.add_files([
    'lib/client/templates/importCsv.html',
    'lib/client/templates/importCsv.js'
  ], ['client']);
});
