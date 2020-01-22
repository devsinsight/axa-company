# Restify + Typescript Template

This is a restify + typescript template with some useful frameworks for the development of a REST server. Here are some links used to build this template:

- [Restify API Guide][rst1]
- [Inversify Restify Utils][rst2]
- [Pino Pretty][rst3]
- [Grunt Watch][rst4]

[rst1]: http://restify.com
[rst2]: https://github.com/inversify/inversify-restify-utils
[rst3]: https://github.com/pinojs/pino-pretty
[rst4]: https://github.com/gruntjs/grunt-contrib-watch

# Installation

Create a folder for your project:

```sh
$ mkdir MyProjectName
$ cd MyProjectName
```

Clone the repository:

```sh
$ git clone https://github.com/devsinsight/restify-template-2020
```

# Development

to start the app and watch:

```sh
$ npm start
```

# Build

Development environment:

```sh
$ npm run build:dev
```

Production environment:

```sh
$ npm run build:prod
```

# Result

http://localhost:3000/foo?id=123
