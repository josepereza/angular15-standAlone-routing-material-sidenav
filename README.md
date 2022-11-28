# AngularRouting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.
### Opcion main.ts (el provider del canActivate tambien puede ir con los providers dentro de la bootstrapAplication)
```
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CanActiveAdminService } from './app/services/can-active-admin.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const routes: Route[] = [
  {
    path: 'components',
    loadChildren: () =>
      import('./app/components/side-nav/routers').then(
        (route) => route.COMPONENT_ROUTES
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./app/components/admin/admin/admin.component').then(
        (route) => route.AdminComponent
      ),
   
    canActivate: [CanActiveAdminService],
  },
  {
    path: '**',
    redirectTo: 'components',
    pathMatch: 'full',
  },
];

bootstrapApplication(AppComponent, { providers: [provideRouter(routes),CanActiveAdminService, importProvidersFrom(BrowserAnimationsModule)] });
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# angular15-standAlone-routing-material-sidenav
