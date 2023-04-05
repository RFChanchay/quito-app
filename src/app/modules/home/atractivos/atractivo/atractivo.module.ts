import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtractivoPageRoutingModule } from './atractivo-routing.module';

import { AtractivoPage } from './atractivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtractivoPageRoutingModule
  ],
  declarations: [AtractivoPage]
})
export class AtractivoPageModule {}
