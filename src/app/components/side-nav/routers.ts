import { Route } from '@angular/router';

export const COMPONENT_ROUTES: Route[] = [
  {
    path: 'component-one',
    loadComponent: () =>
      import('../component-one/component-one.component').then(
        (component) => component.ComponentOneComponent
      ),
  },
  {
    path: 'component-two',
    loadComponent: () =>
      import('../component-two/component-two.component').then(
        (component) => component.ComponentTwoComponent
      ),
  },
  {
    path: 'component-three',
    loadComponent: () =>
      import('../component-three/component-three.component').then(
        (component) => component.ComponentThreeComponent
      ),
  },
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
];