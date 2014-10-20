Package.describe({
  name: 'ernestorocha:sparkjs',
  summary: 'Package for easier sparkJS integration with Meteor',
  version: '0.0.1',
  git: 'https://github.com/ernestorocha/meteor-sparkjs.git'
});

Package.onUse(function(api) {
  api.versionsFrom("0.9.4");
  api.addFiles('ernestorocha:sparkjs.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ernestorocha:sparkjs');
  api.addFiles('ernestorocha:sparkjs-tests.js');
});
