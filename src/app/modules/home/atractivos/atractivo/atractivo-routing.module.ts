import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtractivoPage } from './atractivo.page';

const routes: Routes = [
  {
    path: '',
    component: AtractivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtractivoPageRoutingModule {}
