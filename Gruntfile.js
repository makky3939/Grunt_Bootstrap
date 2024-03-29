module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      haml: {
        files: '**/*.haml',
        tasks: ['haml'],
        options: {
          livereload: true,
        },
      },
      coffee: {
        files: '**/*.coffee',
        tasks: ['coffee'],
        options: {
          livereload: true,
        },
      },
      sass: {
        files: '**/*.sass',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
    haml: {
      compile: {
        files: {
          "dst/index.html": ["src/haml/index.haml"]
        }
      }
    },
    coffee: {
      compile: {
        files: {
          "dst/javascripts/app.js": "src/coffee/app.coffee"
        }
      }
    },
    sass: {
      compile: {
        options: {
        },
        files: {
          "dst/stylesheets/style.css": "src/sass/style.sass"
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'dst/stylesheets/bootstrap.css': ['src/style/bootstrap.css']
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dst/javascripts/bootstrap.js': ['src/js/bootstrap.js'],
          'dst/javascripts/jquery-2.0.3.js': ['src/js/jquery-2.0.3.js']
        }
      }
    },
    clean: {
      build: ["dst"]
    }
  });

  grunt.registerTask('default', ['clean', 'haml', 'sass', 'cssmin', 'coffee', 'uglify'])
  
};
