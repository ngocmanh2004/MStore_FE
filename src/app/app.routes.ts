import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './shared/layout/public-layout/public-layout.component';
import { HomeComponent } from './features/home/home.component';
import { AuthLayoutComponent } from './features/auth/layout/auth-layout/auth-layout.component'; 
import { ProductDetailComponent } from './features/product/pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent, 
    children: [
      {
        path: '', 
        component: HomeComponent 
      },
      {
        path: 'products/:slug',
        component: ProductDetailComponent
      }
    ]
  },

  {
    path: 'auth', 
    component: AuthLayoutComponent, 
    loadChildren: () => import('./features/auth/auth.routes').then(r => r.AUTH_ROUTES) 
  }
];