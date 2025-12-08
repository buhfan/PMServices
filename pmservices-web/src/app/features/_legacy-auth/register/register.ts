import { Component } from '@angular/core';
import { FormBuilder, FormsModule} from '@angular/forms';
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
  selector: 'pm-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
  // ВАЖНО: сюда добавляем CommonModule и FormsModule
  imports: [CommonModule, FormsModule,MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule]
})
export class RegisterComponent {
  email = '';
  company = '';
  password = '';
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    @Inject(AUTH_SERVICE) private authService: AuthService
  ) {}

  onSubmit(): void {
    this.isLoading = true;
    this.errorMessage = null;

    /*const request: RegisterRequest = {
      email: this.email,
      company: this.company,
      password: this.password,
    };*/

    /*this.authService.login(request).subscribe({
      next: (response) => {
        console.log('Logged in, token:', response.token);
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Ошибка регистрации';
        this.isLoading = false;
      },
    });*/
  }
}
