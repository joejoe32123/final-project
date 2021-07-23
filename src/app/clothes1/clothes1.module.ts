import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Clothes1PageRoutingModule } from './clothes1-routing.module';

import { Clothes1Page } from './clothes1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Clothes1PageRoutingModule
  ],
  declarations: [Clothes1Page]
})
export class Clothes1PageModule {}
