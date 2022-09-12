import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

import { AlergiasFormComponent } from './alergias-form.component';
import { AlergiasListaComponent } from './alergias-lista.component';
import { AlergiasComponent } from './alergias.component';

export const ALERGIAS_ROUTES: Routes = [
  {
    path: '',
    component: AlergiasComponent,
    children: [
      {
        path: 'lista',
        component: AlergiasListaComponent,
        children: [{
          path: 'planta',
          loadChildren: () => loadRemoteModule({
            type: 'manifest',
            remoteName: 'mfe-patientcare',
            exposedModule: './Module'
          }).then(m => m.PlantaModule)
        },
        {
          path: 'form',
          component: AlergiasFormComponent
        }]
      }
    ]
  }
];
