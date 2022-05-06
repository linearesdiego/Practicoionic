import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicialPage } from './policial.page';

const routes: Routes = [
  {
    path: '',
    component: PolicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicialPageRoutingModule {}
