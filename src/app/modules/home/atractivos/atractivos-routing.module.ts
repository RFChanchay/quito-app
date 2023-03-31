import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtractivosPage } from './atractivos.page';

const routes: Routes = [
  {
    path: '',
    component: AtractivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtractivosPageRoutingModule {}
