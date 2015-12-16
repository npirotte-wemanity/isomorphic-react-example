var ExtractTextPlugin = require("extract-text-webpack-plugin");
var gulp = require('gulp')
var webpack = require('gulp-webpack')

gulp.task('default', ['pack'])

gulp.task('pack', function () {
  gulp.src('src/app.jsx')
    .pipe(webpack({
      watch: true,
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
          },
          {
            test: /\.less$/,
            loader: 'classnames'
          }
        ],
        preLoaders: [
          {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader", "less-loader")
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin("styles.css")
      ]
    }))
    .pipe(gulp.dest('dist'))
})
