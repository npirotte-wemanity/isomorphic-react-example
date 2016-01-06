var gulp = require('gulp')
var webpack = require('gulp-webpack')
var uglify = require('gulp-uglify')

gulp.task('default', ['pack'])

gulp.task('pack', function () {
  gulp.src('src/app.jsx')
    .pipe(webpack({
      watch: false,
      output: {
        filename: 'app.js'
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
              presets: ['react', 'es2015']
            }
          }
        ]
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})
