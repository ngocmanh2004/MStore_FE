import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

// Định nghĩa các route con cho /auth
export const AUTH_ROUTES: Routes = [
  {
    path: 'login', // Đường dẫn sẽ là /auth/login
    component: LoginComponent 
  },
  {
    path: 'register', // Đường dẫn sẽ là /auth/register
    component: RegisterComponent
  },
  {
    path: '', // Nếu chỉ vào /auth, chuyển hướng về /auth/login
    redirectTo: 'login',
    pathMatch: 'full'
  }
];