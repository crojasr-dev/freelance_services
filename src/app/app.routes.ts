import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'powerplatform',
    loadComponent: () => import('./pages/powerplatform/powerplatform').then((m) => m.PowerPlatform),
  },
{
    path: '**',
    redirectTo: '',
  },
];
