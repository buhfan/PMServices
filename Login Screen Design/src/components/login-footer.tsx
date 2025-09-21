import { Button } from './ui/button';

export function LoginFooter() {
  return (
    <div className="mt-8 pt-6 border-t border-border text-center">
      <Button variant="link" className="p-0 h-auto text-xs text-muted-foreground">
        Политика и условия
      </Button>
    </div>
  );
}