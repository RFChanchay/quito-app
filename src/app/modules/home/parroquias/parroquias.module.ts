import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParroquiasPageRoutingModule } from './parroquias-routing.module';

import { ParroquiasPage } from './parroquias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParroquiasPageRoutingModule
  ],
  declarations: [ParroquiasPage]
})
export class ParroquiasPageModule {}
