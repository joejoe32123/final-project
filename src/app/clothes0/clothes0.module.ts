import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Clothes0PageRoutingModule } from './clothes0-routing.module';

import { Clothes0Page } from './clothes0.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Clothes0PageRoutingModule
  ],
  declarations: [Clothes0Page]
})
export class Clothes0PageModule {}
