import { Routes } from '@angular/router';
/*import { LoginComponent } from './features/auth/login/login';*/

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/shell/placeholder/placeholder')
        .then(m => m.PlaceholderComponent),
  },
  { path: '**', redirectTo: '' },
];
