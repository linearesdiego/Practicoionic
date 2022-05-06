import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicialPageRoutingModule } from './policial-routing.module';

import { PolicialPage } from './policial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicialPageRoutingModule
  ],
  declarations: [PolicialPage]
})
export class PolicialPageModule {}
