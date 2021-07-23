import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'clothes0',
    loadChildren: () => import('./clothes0/clothes0.module').then( m => m.Clothes0PageModule)
  },
  {
    path: 'clothes1',
    loadChildren: () => import('./clothes1/clothes1.module').then( m => m.Clothes1PageModule)
  },
  {
    path: 'clothes2',
    loadChildren: () => import('./clothes2/clothes2.module').then( m => m.Clothes2PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'newcart',
    loadChildren: () => import('./newcart/newcart.module').then( m => m.NewcartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
