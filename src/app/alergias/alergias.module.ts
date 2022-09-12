import { loadManifest } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlergiasListaComponent } from './alergias-lista.component';
import { AlergiasComponent } from './alergias.component';
import { ALERGIAS_ROUTES } from './alergias.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ALERGIAS_ROUTES)
  ],
  declarations: [
    AlergiasComponent,
    AlergiasListaComponent
  ]
})
export class AlergiasModule {

  public constructor() {
    loadManifest("/assets/mf.manifest.json",true)
      .then(x => console.log(x))
      .catch(err => console.error(err));
  }
}
