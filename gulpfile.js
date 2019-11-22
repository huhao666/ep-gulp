const gulp = require("gulp");//全局gulp
const uglify = require("gulp-uglify"); //压缩js
const gulpif = require("gulp-if");//if条件
const cssUglify = require('gulp-minify-css');
const gulpclean = require("gulp-clean");//清除文件
const imagemin = require('gulp-imagemin');

//过滤条件
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


//执行任务
gulp.task('clean' , function(){
  return gulp.src([
     //'dist', //删除dist整个文件夹
     'dist/*', //删除dist下的test写任意子文件夹里的文件
     '!package.json'  //不删除package.json文件
    ] ).pipe(gulpclean());
});

gulp.task('html', function () {
  return gulp.src(["src/*.html","src/favicon.ico"])
      .pipe(gulp.dest("dist/"))
})

gulp.task('css',function(){
  return gulp.src('src/css/*.css')
      .pipe(gulpif(conditionCss, cssUglify())) 
      .pipe(gulp.dest('dist/css'))
})
gulp.task('cssmin',gulp.series('css', function () {
  return gulp.src('src/css/font/*')
      .pipe(gulp.dest("dist/css/font"));
}))

//压缩js文件
gulp.task("js", function() { 
  return gulp.src("src/js/*.js") 
      //压缩文件
      .pipe(gulpif(conditionJs, uglify()))
      //保存压缩后的文件 
      .pipe(gulp.dest("dist/js"));
});
//拷贝不需要处理js的文件
gulp.task('jsmin',gulp.series('js', function () {
  return gulp.src('src/js/layer/**')
      .pipe(gulp.dest("dist/js/layer"));
}))

// gulp.task('copyImage', function () {
//   return gulp.src('src/img/**/* ') 
//       .pipe(gulp.dest("dist/img"));
// })

// gulp.task('image', function () {
//   return gulp.src('src/img/*.{png,jpg,gif,ico}')
//   .pipe(imagemin())
//   .pipe(gulp.dest('dist/img'));
// }) 

//图片压缩
gulp.task("imagemin",function(){
  return gulp.src("src/img/**/*.{png,jpg,gif,ico}")
      .pipe(imagemin())
      .on('error', function(err){ // 报错防止中断
        console.error(err)
        this.emit('end');
      })
      .pipe(gulp.dest("dist/img"));  //放入到dist目录下面的images文件
})
 

//gulp.task("build", ["html","cssmin","jsmin","copyImage"]);

gulp.task('build',gulp.series('clean',gulp.parallel('html','cssmin','jsmin','imagemin')));
