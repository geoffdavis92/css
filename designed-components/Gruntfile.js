module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			grunt: {
				files: ['Gruntfile.js']
			},
			sass: {
				files: ['src/*.sass'],
				tasks: ['sass:compile']
			}
		},
		sass: {
			compile: {
				options: {
					style: 'compact'
				},
				files: [{
					expand: true,
					cwd: './src',
					src: ['style.sass'],
					dest: './public/',
					ext: '.css'
				}]
			},
			build: {
				options: {
					style: 'compressed',
					sourceMap: false
				},
				files: [{
					expand: true,
					cwd: './src',
					src: ['style.sass'],
					dest: './public/',
					ext: '.min.css'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default',['watch']);
	grunt.registerTask('build',['sass:build']);
}