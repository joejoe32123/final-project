import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Clothes2PageRoutingModule } from './clothes2-routing.module';

import { Clothes2Page } from './clothes2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Clothes2PageRoutingModule
  ],
  declarations: [Clothes2Page]
})
export class Clothes2PageModule {}
