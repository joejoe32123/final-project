import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Clothes0Page } from './clothes0.page';

const routes: Routes = [
  {
    path: '',
    component: Clothes0Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Clothes0PageRoutingModule {}
