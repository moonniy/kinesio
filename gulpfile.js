var gulp = require('gulp');
var browserify = require('browserify');
var riotify = require("riotify");
var watchify = require('watchify');
var source = require('vinyl-source-stream');

gulp.task('riot', function(){
	browserify({entries: ['main.js']})
	.transform(riotify, {})
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('dist'))
});
