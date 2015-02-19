//https://raw.githubusercontent.com/TelescopeJS/Telescope/master/packages/telescope-i18n/package.js
Package.describe({summary: "Monday CRM base package"});

Package.onUse(function (api) {

  api.add_files(['' +
  'lib/base.js',
  'lib/helpers.js'
  ], ['client', 'server']);

  api.export([
    'findCompanyDataServerCallback',
    'getTemplate',
    'getSetting',
    'log',
    'checkNested',
    'getColumn',
    'assignToObject',
    'isObjectEmpty',
    'goTo'
  ]);

});
