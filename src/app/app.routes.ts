import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './shared/layout/public-layout/public-layout.component';
import { HomeComponent } from './features/home/home.component';
import { AuthLayoutComponent } from './features/auth/layout/auth-layout/auth-layout.component'; 

export const routes: Routes = [
  // --- Route cho các trang Public (có Header/Footer) ---
  {
    path: '',
    component: PublicLayoutComponent, 
    children: [
      {
        path: '', 
        component: HomeComponent 
      }
    ]
  },

  {
    path: 'auth', // Các đường dẫn bắt đầu bằng /auth
    component: AuthLayoutComponent, 
    // Load các route con từ file auth.routes.ts
    loadChildren: () => import('./features/auth/auth.routes').then(r => r.AUTH_ROUTES) 
  }
  // -------------------------
];