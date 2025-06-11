import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSteamLogin = () => {
    setIsLoading(true);

    // Simulate Steam OAuth redirect
    toast.success("Перенаправление на Steam...");

    // In real implementation, this would redirect to Steam OpenID
    setTimeout(() => {
      // Simulate successful Steam auth and redirect to dashboard
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Icon name="Steam" className="mx-auto h-16 w-16 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">
          Войти через Steam
        </h3>
        <p className="text-gray-600">
          Используйте ваш Steam аккаунт для быстрой регистрации
        </p>
      </div>

      <Button
        onClick={handleSteamLogin}
        className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700"
        disabled={isLoading}
      >
        {isLoading ? (
          <Icon name="Loader2" className="animate-spin mr-2" />
        ) : (
          <Icon name="Gamepad2" className="mr-2" />
        )}
        {isLoading ? "Подключение..." : "Войти через Steam"}
      </Button>

      <div className="text-center">
        <p className="text-gray-600">
          Уже есть аккаунт?{" "}
          <Link
            to="/login"
            className="text-primary hover:text-primary-600 font-semibold"
          >
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
