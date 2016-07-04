Package.describe({
  name: 'cwattrus:open-sans',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Opens Sans for use in your Meteor app.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/cwattrus/open-sans-meteor',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');
  api.use('ecmascript');
  api.mainModule('open-sans.js');

  api.addAssets([
    'font/OpenSans-Light.woff',
    'font/OpenSans-Regular.woff',
    'font/OpenSans-Semibold.woff',
    'font/OpenSans-Bold.woff',
    'font/OpenSans-Extrabold.woff',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('cwattrus:open-sans');
  api.mainModule('open-sans-tests.js');
});
