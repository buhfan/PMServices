import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface RegisterRequest {
  email: string;
  password: string;
  company: string;
}

export interface RegisterResponse {
  userId: string;           // потом подправим под реальный контракт
}

export interface RegistrationService {
  register(request: RegisterRequest): Observable<RegisterResponse>;
}

export const REGISTER_SERVICE = new InjectionToken<RegistrationService>('REGISTER_SERVICE');