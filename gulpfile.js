const concat = require('gulp-concat');
const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');


gulp.task('default', function(){
  return watch('./js/vendor/*.js',function(){
        gulp.src('./js/vendor/*.js')
        .pipe(babel({
          presets:['@babel/env']
      }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js/dist/'));
  })
})
