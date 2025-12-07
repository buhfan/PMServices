import { Component } from '@angular/core';
import { FormBuilder, FormsModule, Validators, ReactiveFormsModule, FormGroup  } from '@angular/forms';
import { Inject } from '@angular/core';
import { AUTH_SERVICE, AuthService, LoginRequest } from '../../../core/auth/auth.types';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'pm-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  // ВАЖНО: сюда добавляем CommonModule и FormsModule
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule]
})
export class LoginComponent {
  loginform: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    @Inject(AUTH_SERVICE) private authService: AuthService, private fb: FormBuilder
  ) {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!?,./\\\\\\\\])[A-Za-z\\d!?,./\\\\\\\\]{8,}$")]]
      
    }); 
  }

  onSubmit(): void {
    this.isLoading = true;
    this.errorMessage = null;

    if(this.loginform.invalid){
      this.loginform.markAllAsTouched();
      return;
    }
    const {email, password} = this.loginform.value;

    const request: LoginRequest ={
      email: email!,
      password: password!,
    }
    

    this.authService.login(request).subscribe({
      next: (response) => {
        console.log('Logged in, token:', response.token);
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Ошибка авторизации';
        this.isLoading = false;
      },
    });
  }
}
