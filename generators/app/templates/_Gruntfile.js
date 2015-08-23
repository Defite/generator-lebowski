module.exports = function(grunt) {
	grunt.initConfig({
		stylus: {
			options: {
				use: [
					function() { return require('autoprefixer-stylus')('last 2 versions', 'ie 8'); }
				]
			},
			compile: {
				options: {
					compress: false
				},
				files: {
					'app/css/main.css': ['app/css/main.styl']
				}
			}
		},
		watch: {
			// Watch stylus files in "styl" directory
			stylus: {
				files: ['app/css/*.styl'],
				tasks: ['stylus']
			}
		}
	});

	// Load the plugin that provides the "watch" & "stylus" tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	// Default task(s).
	grunt.registerTask('default', ['watch']);
};
