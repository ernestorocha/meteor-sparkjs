Package.describe({
  name: 'ernestorocha:sparkjs',
  summary: 'Package for easier sparkJS integration with Meteor',
  version: '0.0.2',
  git: 'https://github.com/ernestorocha/meteor-sparkjs.git'
});

Npm.depends({
    'spark': '0.2.2'
});

Package.onUse(function(api) {
  api.versionsFrom("0.9.4");
  api.addFiles(['sparkjs.js'], 'server');
  api.export('Spark', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ernestorocha:sparkjs');
  api.addFiles('ernestorocha:sparkjs-tests.js');
});
