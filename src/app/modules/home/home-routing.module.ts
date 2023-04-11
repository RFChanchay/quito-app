import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/atractivos',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage,
    children:[
      {
        path: 'parroquias',
        loadChildren: () => import('./parroquias/parroquias.module').then( m => m.ParroquiasPageModule)
      },
      {
        path: 'atractivos',
        loadChildren: () => import('./atractivos/atractivos.module').then( m => m.AtractivosPageModule)
      },
      {
        path: 'gastronomia',
        loadChildren: () => import('./gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
      },
      {
        path: 'noticias',
        loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
      },
      {
        path: 'configuracion',
        loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
