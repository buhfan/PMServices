import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  RegisterRequest,
  RegisterResponse,
  RegistrationService,
} from './registration.types';

@Injectable()
export class HttpRegistrationService implements RegistrationService {
  private readonly baseUrl = '/api/auth'; // или /api/orgs, как решишь

  constructor(private http: HttpClient) {}

  register(request: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.baseUrl}/register`, request);
  }
}
