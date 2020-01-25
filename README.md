# AXA - Company

Here is the api service with clients and policies endpoinds. You should be able to acces using some of the usernames (emails) and password. For this example the password to every client is: Pass@w0rd1

The API service is using oauth2 - resource owner flow which requires user/password credentians and client/secret credentials.

## Authentication && Authorization

    Click on the "Authorize" button on the top right of the screen.
    In the username input type some of the client's emails, for example:

```
        {
         "id":"a0ece5db-cd14-4f21-812f-966633e7be86",
         "name":"Britney",
         "email":"britneyblankenship@quotezart.com",
         "role":"admin"
        },
        {
         "id":"a3b8d425-2b60-4ad7-becc-bedf2ef860bd",
         "name":"Barnett",
         "email":"barnettblankenship@quotezart.com",
         "role":"user"
        }
```

    You can use the client credentials above to access to the api docs (swagger-docs), notice that there are one admin and one client. If not, you will receive an Authorization error (401 - No Authorized). Also, take into account the role.

    Then, type the password: Pass@w0rd1

    Finally, you need to enter the client_id and secret:
    client_id: axaClient
    secret: secret

# Libraries used in this example:

- [Restify API Guide][rst1]
- [Inversify Restify Utils][rst2]
- [Pino Pretty][rst3]
- [Grunt Watch][rst4]
- [Swagger][rst5]

[rst1]: http://restify.com
[rst2]: https://github.com/inversify/inversify-restify-utils
[rst3]: https://github.com/pinojs/pino-pretty
[rst4]: https://github.com/gruntjs/grunt-contrib-watch
[rst4]: https://swagger.io/docs/specification/2-0/what-is-swagger/

# Installation

Create a folder for your project:

```sh
$ mkdir MyProjectName
$ cd MyProjectName
```

Clone the repository:

```sh
$ git clone https://github.com/devsinsight/axa-company
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

http://localhost:3000/docs/swagger
