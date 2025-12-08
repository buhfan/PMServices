// src/app/core/auth/logged-auth.service.ts
import { AuthService, LoginRequest, LoginResponse } from './auth.types';
import { Observable } from 'rxjs';
import { LoggerService } from '../logger.service';

export class LoggedAuthService implements AuthService {
  constructor(
    private inner: AuthService,      // mock или real
    private logger: LoggerService,
  ) {}

  login(request: LoginRequest): Observable<LoginResponse> {
    this.logger.log('AuthService.login called', request);
    const result = this.inner.login(request);
    return result;
  }

  logout(): Observable<void> {
    this.logger.log('AuthService.logout called');
    return this.inner.logout();
  }
}