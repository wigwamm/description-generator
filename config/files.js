/* Exports an object that defines
 *  all of the paths & globs that the project
 *  is concerned with.
 *
 * The "configure" task will require this file and
 *  then re-initialize the grunt config such that
 *  directives like <config:files.js.app> will work
 *  regardless of the point you're at in the build
 *  lifecycle.
 *
 * You can find the parent object in: node_modules/lineman/config/files.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('files', {
  ngtemplates: {
    dest: "generated/angular/template-cache.js"
  },

  coffee: {
    app: [
      "!app/js/**/_spec/*.coffee",
      "!app/js/**/_spec-e2e/*.coffee"
    ],
    spec: [
      "app/js/**/_spec/*.coffee"
    ]
  },

  js: {
    vendor: [
      "vendor/js/angular.js",
      "vendor/js/**/*.js"
    ],
    app: [
      "app/js/app.js",
      "app/js/**/*.js",
      "!app/js/**/_spec/*.js", "!app/js/**/_spec/*.coffee",
      "!app/js/**/_spec-e2e/*.js", "!app/js/**/_spec-e2e/*.coffee"
    ],
    spec: [
      "app/js/**/_spec/*.js"
    ]
  },

  less: {
    compile: {
      options: {
        paths: ["vendor/css/normalize.css", "vendor/css/**/*.css", "app/css/**/*.less"]
      }
    }
  }
});
