import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './shared/layout/public-layout/public-layout.component';
import { HomeComponent } from './features/home/home.component';
import { AuthLayoutComponent } from './features/auth/layout/auth-layout/auth-layout.component';
import { ProductDetailComponent } from './features/product/pages/product-detail/product-detail.component';
import { ProductListComponent } from './features/product/pages/product-list/product-list.component'; // Import component mới

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
        path: 'products/:slug', // Route chi tiết sản phẩm
        component: ProductDetailComponent
      },
      {
        path: 'products/category/:categorySlug', // Route danh sách theo category
        component: ProductListComponent
      },
      {
        path: 'products', // Route danh sách chung (tất cả sản phẩm)
        component: ProductListComponent
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./features/auth/auth.routes').then(r => r.AUTH_ROUTES)
  }
];