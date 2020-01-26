module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    ts: {
      src: {
        files: [
          {
            src: ["src/**/*.ts"],
            dest: "dist/"
          }
        ],
        options: {
          module: "commonjs",
          target: "es2017",
          sourceMap: true,
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
          fast: "never"
        }
      },
      test: {
        files: [
          {
            src: ["test/**/*.ts"],
            dest: "dist_test/"
          }
        ],
        options: {
          module: "commonjs",
          target: "es2017",
          sourceMap: true,
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
          fast: "never"
        }
      }
    },
    watch: {
      ts: {
        files: ["src/**/*.ts", "src/**/*.yaml"],
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
        dest: "./dist/setup/"
      }
    },
    clean: {
      dist: ["dist"],
      dist_test: ["dist_test"]
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-shell");
  grunt.loadNpmTasks("grunt-open");
  grunt.loadNpmTasks("grunt-ts");

  grunt.registerTask("default", [
    "clean:dist",
    "ts:src",
    "copy",
    "open",
    "shell:connect"
  ]);
  grunt.registerTask("test", ["clean:dist_test", "ts:test"]);
};
