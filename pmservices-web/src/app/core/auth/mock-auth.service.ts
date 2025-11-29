// src/app/core/auth/mock-auth.service.ts
import { AuthService, LoginRequest, LoginResponse } from './auth.types';
import { Observable, of, delay } from 'rxjs';

export class MockAuthService implements AuthService {
  login(request: LoginRequest): Observable<LoginResponse> {
    const response: LoginResponse = {
      token: 'mock-token-for-' + request.email,
    };

    return of(response).pipe(delay(300)); // имитация сети
  }

  logout(): Observable<void> {
    return of(void 0).pipe(delay(100));
  }
}