import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'] 
})
export class RegisterComponent {
  
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  // -------------------------

  onSubmit(form: any) {
    if (form.valid && form.value.password === form.value.confirmPassword) {
      console.log('Register data:', form.value);
    } else if (form.value.password !== form.value.confirmPassword) {
      console.error('Mật khẩu không khớp');
    }
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
  toggleConfirmPasswordVisibility(): void {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }
  // ----------------------
}