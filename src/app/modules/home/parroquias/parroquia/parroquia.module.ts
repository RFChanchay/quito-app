import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParroquiaPageRoutingModule } from './parroquia-routing.module';

import { ParroquiaPage } from './parroquia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParroquiaPageRoutingModule
  ],
  declarations: [ParroquiaPage]
})
export class ParroquiaPageModule {}
