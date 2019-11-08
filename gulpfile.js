const gulp = require("gulp");//全局gulp
const uglify = require("gulp-uglify"); //压缩js
const gulpif = require("gulp-if");//if条件
const gulpclean = require("gulp-clean");//清除文件

var condition = function(f) {
  if (f.path.indexOf(".min.js", f.path.length - ".min.js".length) !== -1) {
    return false;
  } 
  return true;
};

// gulp.task('clean' , function(){
//   return gulp.src([
//      'dist', //删除dist整个文件夹
//      'dist/test/**/*', //删除dist下的test写任意子文件夹里的文件
//      '!package.json'  //不删除package.json文件
//     ] ).pipe(gulpclean());
// });

gulp.task('html', function () {
  return gulp.src(["src/*.html","src/favicon.ico"])
        .pipe(gulp.dest("dist/"))
})

//压缩js文件
gulp.task("jsmin", function() {
  //找到文件
  return gulp.src("src/js/*.js") 
    //压缩文件
    .pipe(gulpif(condition, uglify()))
    //保存压缩后的文件 
    .pipe(gulp.dest("dist/js"));
});
 
// gulp.task('image', function () {
//   return gulp.src(['src/img/**/*','!src/img/huodong/video'])
//     .pipe(imagemin())
//     .pipe(gulp.dest('dist/img'))
// })

//拷贝不需要处理的文件
// gulp.task('copy', function () {
//   return gulp.src('src/js/layer/**')
//   .pipe(gulp.dest("dist/js/layer"));
// })

gulp.task("default", ["html", "jsmin"]);