Package.describe({
  name: 'ernestorocha:sparkjs',
  summary: 'Package for easier sparkJS integration with Meteor',
  version: '0.0.1',
  git: 'https://github.com/ernestorocha/meteor-sparkjs.git'
});

Package.onUse(function(api) {
  api.versionsFrom("0.9.4");
  api.addFiles('lib/sparkjs/lib/device.js');
  api.addFiles('lib/sparkjs/lib/spark-api.js');
  api.addFiles('lib/sparkjs/lib/spark-browser-style.css');
  api.addFiles('lib/sparkjs/lib/spark-browser.js');
  api.addFiles('lib/sparkjs/lib/spark.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ernestorocha:sparkjs');
  api.addFiles('ernestorocha:sparkjs-tests.js');
});
