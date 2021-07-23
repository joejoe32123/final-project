import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Clothes2Page } from './clothes2.page';

const routes: Routes = [
  {
    path: '',
    component: Clothes2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Clothes2PageRoutingModule {}
