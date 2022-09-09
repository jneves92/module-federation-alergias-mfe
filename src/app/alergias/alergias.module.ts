import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlergiasComponent } from './alergias.component';
import { ALERGIAS_ROUTES } from './alergias.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ALERGIAS_ROUTES)
  ],
  declarations: [
    AlergiasComponent
  ]
})
export class AlergiasModule { }
