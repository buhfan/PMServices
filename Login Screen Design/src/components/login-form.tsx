import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Skeleton } from './ui/skeleton';
import { Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  isLoading?: boolean;
  showError?: boolean;
}

export function LoginForm({ isLoading = false, showError = false }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setEmailError('Неверный формат электронной почты');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const isFormValid = email && password && !emailError;

  if (isLoading) {
    return (
      <div className="space-y-6" role="status" aria-label="Загрузка формы входа">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-4 w-28" />
        </div>
        <Skeleton className="h-12 w-full" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm">
          Электронная почта
        </Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="your.email@company.com"
            className={`h-12 ${emailError ? 'border-destructive focus:border-destructive' : ''}`}
            aria-describedby={emailError ? 'email-error' : undefined}
            aria-invalid={!!emailError}
          />
        </div>
        {emailError && (
          <p id="email-error" className="text-sm text-destructive">
            {emailError}
          </p>
        )}
        {showError && !emailError && (
          <p className="text-sm text-destructive">
            Пользователь с таким email не найден
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm">
          Пароль
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            className="h-12 pr-12"
            aria-invalid={showError && !!password}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-12 w-12 hover:bg-transparent focus:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
            tabIndex={0}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
        {showError && password && (
          <p className="text-sm text-destructive">
            Неверный пароль
          </p>
        )}
      </div>

      {/* Remember Me Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="remember"
          checked={rememberMe}
          onCheckedChange={(checked) => setRememberMe(checked as boolean)}
        />
        <Label
          htmlFor="remember"
          className="text-sm cursor-pointer"
        >
          Запомнить меня
        </Label>
      </div>

      {/* Primary Login Button */}
      <Button
        type="submit"
        className="w-full h-12"
        disabled={!isFormValid}
        aria-describedby={!isFormValid ? 'form-validation-message' : undefined}
      >
        Войти
      </Button>
      {!isFormValid && (email || password) && (
        <p id="form-validation-message" className="sr-only">
          Для входа необходимо заполнить все поля корректно
        </p>
      )}

      {/* Forgot Password Link */}
      <div className="text-center">
        <Button variant="link" className="p-0 h-auto text-sm">
          Забыли пароль?
        </Button>
      </div>

      {/* SSO Button */}
      <Button
        variant="outline"
        type="button"
        className="w-full h-12"
      >
        Войти через корпоративную учётную запись (SSO)
      </Button>
    </form>
  );
}