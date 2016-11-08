module.exports = {
	bundles: {
		'dist/app-build': {
			'includes': [
				'[**/*.js]',
				'**/*.html!text',
				'**/*.css!text'
			],
			options: {
				inject: true,
				minify: true,
				depCache: true,
				rev: false
			}
		},
		'dist/aurelia': {
			includes: [
				'aurelia-framework',
				'aurelia-bootstrapper',
				'aurelia-fetch-client',
				'aurelia-router',
				'aurelia-animator-css',
				'aurelia-templating-binding',
				'aurelia-polyfills',
				'aurelia-templating-resources',
				'aurelia-templating-router',
				'aurelia-loader-default',
				'aurelia-history-browser',
				'aurelia-logging-console',
				'bootstrap',
				'bootstrap/css/bootstrap.min.css!text',
				'bootstrap-switch',
				'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css!text',
				'fetch',
				'jquery',
				'text'
			],
			options: {
				inject: true,
				minify: true,
				depCache: false,
				rev: false
			}
		}
	}
};
