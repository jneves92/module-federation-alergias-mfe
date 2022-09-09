import { Routes } from '@angular/router';

import { AlergiasListaComponent } from './alergias-lista.component';
import { AlergiasComponent } from './alergias.component';

export const ALERGIAS_ROUTES: Routes = [
  {
    path: '',
    component: AlergiasComponent,
    children: [
      {
        path: 'lista',
        component: AlergiasListaComponent
      }
    ]
  }
];
