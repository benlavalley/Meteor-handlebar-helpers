Package.describe({
	git: 'https://github.com/raix/Meteor-handlebar-helpers.git',
	name: 'raix:handlebar-helpers',
	version: '0.2.6',
	summary: 'Handlebar helpers',
});

Package.onUse(function (api) {
	api.versionsFrom('2.5');

	// Spark engine requires 'handlebars', Meteor UI requires 'templating'
  api.use('ecmascript', ['client', 'server']);
  api.use([
		'ui',
		'session', // we add Session to the helper scope
		'tracker',
	], 'client'); // Needed by helpers for test and live,
	api.use('underscore', ['client', 'server']);

	api.export('Helpers');
	api.addFiles('common.js', ['client', 'server']);
	api.addFiles('helpers.operators.js', 'client');
});

Package.onTest(function (api) {
	api.use(['tinytest',
		'ui',
		'test-helpers',
		'session',
		'templating',
		'blaze',
		'mongo-livedata']);

	api.use('raix:handlebar-helpers');

	api.addFiles(['helpers_tests.html',
		'helpers_tests.js',
	], 'client');
});
