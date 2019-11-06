const gulp = require('gulp'); 
const uglify = require('gulp-uglify');

//压缩js文件
gulp.task('script', done => {
  //找到文件
  gulp.src('js/*.js')
    //压缩文件
    .pipe(uglify())
    //保存压缩后的文件
    .pipe(gulp.dest('dist/js'));
    done();
})