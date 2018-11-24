/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';

var path = require('path');

module.exports = function (grunt) {

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'scripts/grunt/config'),
    data: {
      clean: ['web'],
      war: {
        target: {
          options: {
            war_verbose: true,
            war_dist_folder: 'build',           // Folder path seperator added at runtime.
            war_name: 'sampleui',            // .war will be appended if omitted
            webxml_welcome: 'index.html',
            webxml_display_name: 'Oracle FAW Data Config'
          },
          files: [
            {
              expand: true,
              cwd: 'web',
              src: ['**'],
              dest: ''
            }
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks("@oracle/grunt-oraclejet");
  grunt.loadNpmTasks('grunt-war');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask("build", "Public task. Calls oraclejet-build to build the oraclejet application. Can be customized with additional build tasks.", function (buildType) {
    grunt.task.run([`oraclejet-build:${buildType}`]);
  });

  grunt.registerTask("serve", "Public task. Calls oraclejet-serve to serve the oraclejet application. Can be customized with additional serve tasks.", function (buildType) {
    grunt.task.run([`oraclejet-serve:${buildType}`]);
  });
};
