import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParroquiaPage } from './parroquia.page';

const routes: Routes = [
  {
    path: '',
    component: ParroquiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParroquiaPageRoutingModule {}
