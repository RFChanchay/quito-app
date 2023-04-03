import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasPageRoutingModule } from './noticias-routing.module';

import { NoticiasPage } from './noticias.page';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasPageRoutingModule,
    HttpClientModule,
    
  ],
  declarations: [NoticiasPage,]
})
export class NoticiasPageModule {}
