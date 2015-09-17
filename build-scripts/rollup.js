var preprocess = require('preprocess').preprocess;
var eol = require('eol');

var doReplace = (process.argv[2] !== 'es6');

var rollup = require('rollup');
	
rollup.rollup({
	entry: 'src/loader.js',
	transform: function(source, id) {
		if (/\/src\/loader.js$/.test(id.replace('\\', '/'))) {
			return preprocess(eol.lf(source), {
				ES5: doReplace
			}, {
				type: 'js'
			});
		}
		
		return source;
	}
}).then(function(bundle) {
	var code = bundle.generate({
		format: process.argv[2].toString(),
		moduleName: 'PkmnLib'
	}).code;
	
	process.stdout.write(code);
});