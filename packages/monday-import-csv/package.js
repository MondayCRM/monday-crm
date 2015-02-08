Package.describe({
  summary: "Monday CRM import CSV package",
  version: '0.0.1'
});

Package.onUse(function (api) {

  api.use([
    'monday-base',
    'templating',
    'iron:router'
  ]);

  api.add_files([
    'lib/routes.js'
  ], ['client', 'server']);


  api.add_files([
    'lib/client/templates/importCsv.html'
  ], ['client']);
});
