import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'powerplatform',
    loadComponent: () => import('./pages/powerapps/powerapps').then((m) => m.PowerApps),
  },
{
    path: '**',
    redirectTo: '',
  },
];
