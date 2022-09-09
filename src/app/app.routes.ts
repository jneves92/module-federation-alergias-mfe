import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'alergias',
    loadChildren: () => import('./alergias/alergias.module').then(m => m.AlergiasModule),
    pathMatch: 'full'
  }
];
