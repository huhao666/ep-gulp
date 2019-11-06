### 中力官网（PC 端）- gulp 使用

## 记录 gulp 压缩后存在的问题

- gulp 压缩遇到已经压缩过的 js 文件无法再继续压缩会报错跳除压缩程序;  
  解决方法：先把压缩过的js文件提前剪切到dist/js文件下;执行完gulp要记得吧dist里的js覆盖原项目js文件夹;

- 遇到报错

  ```js
    The following tasks did not complete: script
    Did you forget to signal async completion?
  ```

  原代码：

  ```js
  //压缩js文件
  gulp.task("script", function() {
    //找到文件
    gulp
      .src("js/*.js")
      //压缩文件
      .pipe(uglify())
      //保存压缩后的文件
      .pipe(gulp.dest("dist/js"));
  });
  ```

  解决方法：

  ```js
  //压缩js文件
  gulp.task("script", done => {
    //找到文件
    gulp
      .src("js/*.js")
      //压缩文件
      .pipe(uglify())
      //保存压缩后的文件
      .pipe(gulp.dest("dist/js"));
    done();
  });
  ```
