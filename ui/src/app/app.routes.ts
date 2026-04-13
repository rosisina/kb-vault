import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/proof-shell/proof-shell.component').then(m => m.ProofShellComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
