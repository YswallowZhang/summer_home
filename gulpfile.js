var gulp = require('gulp'),
    less = require('gulp-less'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    // autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin= require('gulp-imagemin'),
    cache = require('gulp-cache'),
    htmlmin = require('gulp-htmlmin'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    revReplace = require('gulp-rev-replace'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

    
    gulp.task('less', function() {
    	return gulp.src('app/less/*.less')
    	.pipe(less())
    	// .pipe(autoprefixer())
    	.pipe(concat('index.css'))
    	.pipe(minifycss())
    	.pipe(gulp.dest('app/css'))
    	.pipe(gulp.dest('project/css'))    	
    	.pipe(browserSync.stream())
    });


  	gulp.task('useref', function() {
		return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulp.dest('project/js'));
	});




    gulp.task('js', function() {
    	return gulp.src('app/js/*.js')
    	.pipe(concat('index.js'))
    	.pipe(uglify())
    	// .pipe(rename({suffix:'.min'}))
    	.pipe(gulp.dest('project/js'))
    	.pipe(browserSync.stream())
    });


    gulp.task('images', function() {
    	return gulp.src('app/images/*.{jpg, png, gif, icon}')
    	.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    	.pipe(gulp.dest('project/images'))
    	.pipe(browserSync.stream())
    });

    gulp.task('html', function() {
    	return gulp.src('app/*.html')
    	.pipe(htmlmin())
    	.pipe(gulp.dest('project'))
    	.pipe(browserSync.stream())
    });


    gulp.task('browserSync', function() {
		browserSync({
			server: {
				baseDir:'project'
			},
		})
	});


    gulp.task('watch',['browserSync','html','less','images','js'], function() {
		gulp.watch('app/less/*.less',['less']);
		gulp.watch('app/*.html', ['html']);
		gulp.watch('app/images/*.{png, jpg, gif, ico}', ['images']);
		gulp.watch('app/js/*.js',['js']);
    });