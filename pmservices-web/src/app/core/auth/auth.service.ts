// src/app/core/auth/real-auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService, LoginRequest, LoginResponse } from './auth.types';

export class RealAuthService implements AuthService {
  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<LoginResponse> {
    // TODO: поменяешь на реальный URL API
    return this.http.post<LoginResponse>('/api/auth/login', request);
  }

  logout(): Observable<void> {
    return this.http.post<void>('/api/auth/logout', {});
  }
}