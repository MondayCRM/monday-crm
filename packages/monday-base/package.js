//https://raw.githubusercontent.com/TelescopeJS/Telescope/master/packages/telescope-i18n/package.js
Package.describe({summary: "Monday CRM base package"});

Package.onUse(function (api) {

  api.add_files(['lib/base.js'], ['client', 'server']);

  api.export([
    'findCompanyDataServerCallback'
  ]);

});
