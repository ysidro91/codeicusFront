# TaskApp

## Librerias utilizadas
* [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [Toastr](https://github.com/CodeSeven/toastr)
* [FontAwesome](https://fontawesome.com/)
* [Angular Material](https://v7.material.angular.io/)

## Comandos utilizados

Los archivos fueron creados con los siguientes comandos (yo hice manualmente algunas importaciones a modulos):


```
ng g m material --flat
ng g m components/shared
ng g c components/shared/menu -s --skip-tests
ng g c components/tasks -s --skip-tests --skip-import
ng g c components/tasks/showTasks -s --skip-tests --skip-import
ng g c components/tasks/manageTask -s --skip-tests --skip-import
ng g c components/info/showInfo -s --skip-tests --skip-import
ng g s services/notifications/notifications --skip-tests
ng g s services/tasks/tasks --skip-tests
ng g s services/tables/tables --skip-tests
ng g i interfaces/task
ng g p pipes/modified --skip-tests --skip-import

```

___
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
