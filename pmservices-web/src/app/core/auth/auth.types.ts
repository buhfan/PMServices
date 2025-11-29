import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  // потом добавим userId, roles и т.п.
}

export interface AuthService {
  login(request: LoginRequest): Observable<LoginResponse>;
  logout(): Observable<void>;
}

export const AUTH_SERVICE = new InjectionToken<AuthService>('AUTH_SERVICE');