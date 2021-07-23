import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'shop',
        children: [
          {
            path: '',
            loadChildren: () => import('../shop/shop.module').then( m => m.ShopPageModule)
          }
        ]
      },

      {
        path: 'category',
        children: [
          {
            path: '',
            loadChildren: () => import('../category/category.module').then( m => m.CategoryPageModule)
          }
        ]
      },

      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },

    {
        path: 'cart',
        children: [
          {
             path:'',
              loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
          }
        ]
   
    },
    
        {
          path: 'shop', 
          redirectTo: '/tabs/shop',
          pathMatch: 'full'
        }

    ]
  },
    {
      path: '',
      redirectTo: '/tabs/shop',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
