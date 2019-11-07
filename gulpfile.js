const gulp = require("gulp");
const uglify = require("gulp-uglify");
const gulpif = require("gulp-if"); 


var condition = function(f) {
  if (f.path.indexOf(".min.js", f.path.length - ".min.js".length) !== -1) {
    return false;
  } 
  return true;
};

//压缩js文件
gulp.task("jsmin", function() {
  //找到文件
  return gulp.src("src/js/*.js") 
    //压缩文件
    .pipe(gulpif(condition, uglify()))
    //保存压缩后的文件 
    .pipe(gulp.dest("dist/js"));
});
