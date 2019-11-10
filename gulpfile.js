const gulp = require("gulp");//全局gulp
const uglify = require("gulp-uglify"); //压缩js
const gulpif = require("gulp-if");//if条件
const cssUglify = require('gulp-minify-css');
const gulpclean = require("gulp-clean");//清除文件

var conditionJs = function(f) { 
  if (f.path.indexOf(".min.js", f.path.length - ".min.js".length) !== -1) {
    return false;
  } 
  return true;
};
var conditionCss = function(f) { 
  if (f.path.indexOf(".min.css", f.path.length - ".min.css".length) !== -1) {
    return false;
  } 
  return true;
};


// gulp.task('clean' , function(){
//   gulp.src([
//      //'dist', //删除dist整个文件夹
//      'dist/*', //删除dist下的test写任意子文件夹里的文件
//      '!package.json'  //不删除package.json文件
//     ] ).pipe(gulpclean());
// });

// gulp.task('html', function () {
//   gulp.src(["src/*.html","src/favicon.ico"])
//       .pipe(gulp.dest("dist/"))
// })

// gulp.task('css',function(){
//   gulp.src('src/css/*.css')
//       .pipe(gulpif(conditionCss, cssUglify())) 
//       .pipe(gulp.dest('dist/css'))
// })
// gulp.task('cssmin',['css'], function () {
//   gulp.src('src/css/font/*')
//       .pipe(gulp.dest("dist/css/font"));
// })

// //压缩js文件
// gulp.task("js", function() {
//   //找到文件
//   gulp.src("src/js/*.js") 
//       //压缩文件
//       .pipe(gulpif(conditionJs, uglify()))
//       //保存压缩后的文件 
//       .pipe(gulp.dest("dist/js"));
// });
// //拷贝不需要处理js的文件
// gulp.task('jsmin',['js'], function () {
//   gulp.src('src/js/layer/**')
//       .pipe(gulp.dest("dist/js/layer"));
// })
 
gulp.task('image', function () {
  return gulp.src(['src/img/**/*','!src/img/huodong/video'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
})


// gulp.task("build", ["html","cssmin","jsmin"]);