var gulp = require('gulp'),
	nib = require('nib'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat');

// Jade
gulp.task('jade', function() {
	gulp.src('assets/jade/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.on('error', console.log)
		.pipe(gulp.dest('www'));
}); 

// Stylus
gulp.task('stylus', function() {
    gulp.src('assets/stylus/app.styl')
		.pipe(stylus({
			use: nib(),
			import: 'nib'
		}))
		.on('error', console.log)
		.pipe(gulp.dest('www/css'));
});


// Coffee
gulp.task('coffee', function() {
	gulp.src('assets/coffee/*.coffee')
		.pipe(coffee({bare: true}).on('error', console.log))
		.pipe(concat('app.js'))
		.pipe(gulp.dest('www/js'));
});


// Watcher
gulp.task('watch', function() {
	// Create file on init
	gulp.start('jade', 'stylus', 'coffee');

	// Watchers
	gulp.watch('assets/jade/**/*.jade', ['jade']);
	gulp.watch('assets/stylus/**/*.styl', ['stylus']);
	gulp.watch('assets/coffee/*.coffee', ['coffee']);

});