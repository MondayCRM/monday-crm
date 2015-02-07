//https://raw.githubusercontent.com/TelescopeJS/Telescope/master/packages/telescope-i18n/package.js
Package.describe({
  summary: "Monday CRM index podnikatela driver package",
  version: '0.0.1'
});

Package.onUse(function (api) {

  api.use(["monday-base"], ["client", "server"]);

  api.add_files([
    'lib/server/driver.js'
  ], ['server']);
});
