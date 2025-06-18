# Intranet

## Dev

To bundle for dist, use npm run launch.

## Database connection

Create a file named `cfg.json` in the root of the project and add the proper configuration:

```javascript
{
    /* [Common] Configuration to connect to the database */
    "db": [
        {
            "label"    : "default",
            "host"     : "localhost",
            "user"     : "some_user",
            "password" : "some_password",
            "database" : "some_db"
        }
    ],
    "secretForToken": "your custom secret salt used for token generation",
    /* [Common] Configuration to send email */
    "mail": { /* to use a gmail account */
        "default": { /* default is used unless it's specified to use a different one */
            "service": "gmail", /* gmail only, if not gmail don't set the property */
            "user": "some-email@gmail.com",
            "pass": "email-account-pass",
            "from": "Alias to show as recipient <some-email@gmail.com>"
        },
        "cartera": { /* for all things in Cartera app */
            "user": "some-email@gmail.com",
            "pass": "email-account-pass",
            "from": "Alias to show as recipient <some-email@gmail.com>",
            "host": "smtp.some-host.com",
            "secure": true
        }
    },
    /* [Common] Encryption keys for all things kept as secret */
    "encryption": {
        "private": "some-hash",
        "public": "some-other-hash"
    },
    /* [AppMoney] Recipients to send email */
    "money-mail-to": "some-email@mail.com",
    /* [AppCartera] Path to find receipts to send as email attachments */
    "receipts-path": "C:\\data\\receipts-temp\\",
}
```

With this, you can connnect to a MySQL database.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--configuration production` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Type generation

When you need to define a new Entity, follow these steps:

1. Create you entity definition file under /src/server/templates, the filename is the entity name + .json, use other templates to simplify it.
2. Add your entity name to src/server/TypeGeneratorServer.ts so that you can generate the entity ts file.
3. Build the app, go to /type-generator select your entity from the list and click "generate types"
   This will generate the file types and with that you can generate the database table.
4. Add your entity name to src/server/InstallModule.ts and build the app.
5. Go to /install to let the install script generate tables.

Done.
