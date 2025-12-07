import { Provider } from '@angular/core';
import { AUTH_SERVICE } from '../auth/auth.types';
import { RealAuthService } from '../auth/auth.service';
import { REGISTER_SERVICE } from '../registration/registration.types';
import { HttpRegistrationService } from '../registration/registration.service';

export const SECURITY_PROVIDERS: Provider[] = [
  { provide: AUTH_SERVICE, useClass: RealAuthService },
  { provide: REGISTER_SERVICE, useClass: HttpRegistrationService },
];