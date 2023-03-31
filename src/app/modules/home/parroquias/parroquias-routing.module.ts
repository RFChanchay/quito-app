import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParroquiasPage } from './parroquias.page';

const routes: Routes = [
  {
    path: '',
    component: ParroquiasPage
  },
  {
    path: 'parroquia',
    loadChildren: () => import('./parroquia/parroquia.module').then( m => m.ParroquiaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParroquiasPageRoutingModule {}
