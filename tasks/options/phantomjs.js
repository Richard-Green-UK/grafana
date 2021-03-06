module.exports = function(config,grunt) {
  'use strict';

  grunt.registerTask('phantomjs', 'Copy phantomjs binary to vendor/', function() {

    var dest = './vendor/phantomjs/phantomjs';
    var confDir = './node_modules/phantomjs-prebuilt/lib/';

    src = config.phjs

    if (!src){
      var m=grunt.file.read(confDir+"location.js")
      var src=/= \"([^\"]*)\"/.exec(m)[1];

      if (!grunt.file.isPathAbsolute(src)) {
        src = confDir+src;
      }
    }

    try {
      grunt.config('copy.phantom_bin', {
        src: src,
        dest: dest,
        options: { mode: true},
      });
      grunt.task.run('copy:phantom_bin');
    } catch (err) {
      grunt.verbose.writeln(err);
      grunt.fail.warn('No working Phantomjs binary available')
    }

  });
};
