import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';

export const routes: Routes = [
  {
    path: '',
    //redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  /*{
  path: 'register',
  loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
  },*/
  // запасной вариант — если путь не найден
  {
    path: '**',
    redirectTo: 'login',
  },
];
