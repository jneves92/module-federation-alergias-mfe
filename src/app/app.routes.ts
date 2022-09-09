import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: '', loadChildren: () => import('./alergias/alergias.module')
    .then(m => m.AlergiasModule) , pathMatch: 'full'}
];
