const rootFolder = "src";

module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    ts: {
      app: {
        files: [
          {
            src: [rootFolder + "/**/*.ts", "!" + rootFolder + "/.baseDir.ts"],
            dest: "./dist",
            rootDir: "./src"
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
        files: [rootFolder + "/**/*.ts"],
        options: {
          module: "commonjs",
          target: "es2017",
          sourceMap: false,
          emitDecoratorMetadata: true,
          experimentalDecorators: true
        },
        tasks: ["ts"]
      }
    },
    copy: {
      main: {
        expand: true,
        flatten: true,
        src: ["./src/**/*.yaml"],
        dest: "./dist/configuration/"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");

  grunt.registerTask("default", ["ts"]);
};
