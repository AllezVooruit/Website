var gulp = require("gulp");
var less = require("gulp-less");
var sass = require("gulp-sass");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var eslint = require("gulp-eslint");
var scsslint = require("gulp-scss-lint");
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var autoprefixer = require("gulp-autoprefixer");
var rename = require("gulp-rename");
var cleanCSS = require("gulp-clean-css");
var del = require("del");

var paths = {
  styles: {
    src: "src/styles/**/*.scss",
    dest: "dist/assets/css/"
  },
  images: {
    src: "src/images/**/*",
    dest: "dist/assets/img/"
  },
  scripts: {
    src: "src/scripts/**/*.js",
    dest: "dist/assets/js/"
  },
  templates: {
    src: "src/templates/*.twig",
    dest: "dist/"
  },
  php: {
    src: "src/*.php",
    dest: "dist/"
  },
  includes: {
    src: "src/includes/**/*",
    dest: "dist/includes/"
  },
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del(["dist/**"]);
}

function copyTemplates() {
	return gulp.src(paths.templates.src)
    .pipe(gulp.dest(paths.templates.dest));
}

function copyIncludes() {
	return gulp.src(paths.includes.src)
    .pipe(gulp.dest(paths.includes.dest));
}

function copyPhp() {
	return gulp.src(paths.php.src)
    .pipe(gulp.dest(paths.php.dest));
}

/*
 * Define our tasks using plain functions
 */
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

function prefixes() {
  return gulp
    .src(paths.styles.src)
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest(paths.styles.dest));
}

function images() {
  return gulp
    .src(paths.images.src)
    .pipe(
      imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{ removeViewBox: true }]
      })
    )
    .pipe(gulp.dest(paths.images.dest));
}

function scripts() {
  return gulp
    .src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

function lintScss() {
  return gulp.src(paths.styles.src).pipe(
    scsslint({
      reporterOutputFormat: "Checkstyle"
    })
  );
}

function lintJavascript() {
  return gulp
    .src([paths.scripts.src, "!node_modules/**"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.prefixes = prefixes;
exports.images = images;
exports.watch = watch;
exports.copyTemplates = copyTemplates;
exports.copyPhp = copyPhp;
exports.copyIncludes = copyIncludes;
exports.lintScss = lintScss;
exports.lintJavascript = lintJavascript;

var build = gulp.series(clean, styles, scripts, prefixes, images, copyTemplates, copyPhp, copyIncludes);
var lint = gulp.series(lintScss, lintJavascript);

/*
 * Tasks
 */
gulp.task("build", build);
gulp.task("lint", lint);
gulp.task("default", build);
