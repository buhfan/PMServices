import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.types';
import { MockAuthService } from './mock-auth.service';
import { RealAuthService } from './auth.service';
import { LoggedAuthService } from './logged-auth.service';
import { LoggerService } from '../logger.service';

// пока флаг жёстко в коде, потом вынесем в environment
const USE_MOCK_AUTH = true;

export function authServiceFactory(http: HttpClient, logger: LoggerService): AuthService {
  let inner: AuthService;

  if (USE_MOCK_AUTH) {
    inner = new MockAuthService();
  } 
  else {
    inner = new RealAuthService(http);
  }

  // оборачиваем выбранную реализацию в логгер-декоратор
  return new LoggedAuthService(inner, logger);
}