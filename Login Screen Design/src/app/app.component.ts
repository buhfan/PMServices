import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

interface HighlightItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly highlights: HighlightItem[] = [
    {
      icon: 'rocket_launch',
      title: 'Мгновенный доступ',
      description: 'Восстанавливайте незавершённые задачи ровно с того места, где остановились.'
    },
    {
      icon: 'verified_user',
      title: 'Безопасность',
      description: 'Двухфакторная авторизация и шифрование на стороне клиента по умолчанию.'
    },
    {
      icon: 'diversity_2',
      title: 'Единый доступ',
      description: 'Интеграция с Google Workspace, Microsoft Entra ID и другими провайдерами.'
    }
  ];

  readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    remember: [true]
  });

  readonly hidePassword = signal(true);
  readonly loading = signal(false);
  readonly statusMessage = signal('');
  readonly statusType = signal<'success' | 'error' | ''>('');

  constructor(private readonly fb: FormBuilder) {}

  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  togglePasswordVisibility(): void {
    this.hidePassword.update((value) => !value);
  }

  submit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.statusType.set('error');
      this.statusMessage.set('Пожалуйста, исправьте ошибки формы и попробуйте снова.');
      return;
    }

    const { email, remember } = this.loginForm.getRawValue();
    this.loading.set(true);
    this.statusType.set('');
    this.statusMessage.set('');

    setTimeout(() => {
      this.loading.set(false);
      this.statusType.set('success');
      this.statusMessage.set('Демо-вход выполнен успешно. Добро пожаловать!');
      this.loginForm.reset({
        email,
        password: '',
        remember
      });
    }, 1200);
  }

  signInWithProvider(provider: 'google' | 'microsoft'): void {
    if (this.loading()) {
      return;
    }

    const providerName = provider === 'google' ? 'Google' : 'Microsoft';
    this.statusType.set('success');
    this.statusMessage.set(`Попытка входа через ${providerName}. (Демо-режим)`);
  }
}
