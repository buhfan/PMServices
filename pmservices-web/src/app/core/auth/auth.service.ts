import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface UserProfile {
  id: string;
  email: string;
  fullName?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiBaseUrl = environment.apiBaseUrl;
  private readonly authUrl = environment.authUrl;  
  readonly isLoggedIn = signal(false);
  readonly profile = signal<UserProfile | null>(null);
  readonly orgId = signal<string | null>(null);
  readonly orgRoles = signal<string[]>([]);
  readonly permissions = signal<string[]>([]);

  // Заглушки — потом подменим на Keycloak
  login(): void {
    // дальше здесь будет redirect на Keycloak
    console.warn('AuthService.login(): TODO – Keycloak redirect');
  }

  logout(): void {
    // дальше здесь будет вызов Keycloak logout
    console.warn('AuthService.logout(): TODO – Keycloak logout');
  }

  loadProfile(): void {
    // дальше здесь будет вызов /api/auth/me
    console.warn('AuthService.loadProfile(): TODO – call /api/auth/me');
  }

  hasPermission(permission: string): boolean {
    return this.permissions().includes(permission);
  }
}