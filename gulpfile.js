var gulp = require('gulp');
var riot = require('gulp-riot');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

gulp.task('riot', function(){
    gulp.src('components/*.js')
	.pipe(riot({
	    modular:true,
	    compact:true
	}))
	.pipe(gulp.dest('dist'))
});
