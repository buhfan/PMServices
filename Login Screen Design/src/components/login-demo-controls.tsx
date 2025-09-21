import { Button } from './ui/button';
import { Card } from './ui/card';

interface LoginDemoControlsProps {
  isLoading: boolean;
  showError: boolean;
  onLoadingChange: (loading: boolean) => void;
  onErrorChange: (error: boolean) => void;
}

export function LoginDemoControls({
  isLoading,
  showError,
  onLoadingChange,
  onErrorChange
}: LoginDemoControlsProps) {
  return (
    <Card className="fixed top-4 right-4 p-4 z-50 bg-card/95 backdrop-blur-sm border border-border shadow-lg">
      <div className="space-y-3">
        <h3 className="text-sm">Демо состояния</h3>
        <div className="space-y-2">
          <Button
            variant={isLoading ? "default" : "outline"}
            size="sm"
            className="w-full text-xs"
            onClick={() => onLoadingChange(!isLoading)}
          >
            {isLoading ? "✓ " : ""}Skeleton загрузки
          </Button>
          <Button
            variant={showError ? "destructive" : "outline"}
            size="sm"
            className="w-full text-xs"
            onClick={() => onErrorChange(!showError)}
          >
            {showError ? "✓ " : ""}Ошибка валидации
          </Button>
        </div>
      </div>
    </Card>
  );
}