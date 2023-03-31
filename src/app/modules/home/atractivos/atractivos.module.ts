import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtractivosPageRoutingModule } from './atractivos-routing.module';

import { AtractivosPage } from './atractivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtractivosPageRoutingModule
  ],
  declarations: [AtractivosPage]
})
export class AtractivosPageModule {}
