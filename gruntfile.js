const rootFolder = "src";

module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    ts: {
      app: {
        files: [
          {
            src: [rootFolder + "/**/*.ts"],
            dest: "./dist"
          }
        ],
        options: {
          module: "commonjs",
          target: "es2017",
          sourceMap: false,
          emitDecoratorMetadata: true,
          experimentalDecorators: true
        }
      }
    },
    watch: {
      ts: {
        files: [rootFolder + "/**/*.ts", rootFolder + "/**/*.yaml"],
        options: {
          module: "commonjs",
          target: "es2017",
          sourceMap: false,
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
          livereload: {
            host: "localhost",
            port: 3000
          }
        },
        tasks: ["ts"]
      }
    },
    shell: {
      connect: {
        command:
          'SET NODE_ENV=development && concurrently --kill-others "nodemon ./dist | pino-pretty" "grunt watch"'
      }
    },
    open: {
      all: {
        path: "http://localhost:3000/docs/swagger",
        options: {
          delay: 4000
        }
      }
    },
    copy: {
      main: {
        expand: true,
        flatten: true,
        src: ["./src/**/*.yaml"],
        dest: "./dist/config/"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-shell");
  grunt.loadNpmTasks("grunt-newer");
  grunt.loadNpmTasks("grunt-open");
  grunt.loadNpmTasks("grunt-ts");

  grunt.registerTask("default", ["ts", "copy", "open", "shell:connect"]);
};
