import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtractivosPage } from './atractivos.page';

const routes: Routes = [
  {
    path: '',
    component: AtractivosPage
  },
  {
    path: 'atractivo/:id',
    loadChildren: () => import('./atractivo/atractivo.module').then( m => m.AtractivoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtractivosPageRoutingModule {}
