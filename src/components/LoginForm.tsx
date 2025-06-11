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

    // Simulate Steam login verification
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Вход через Steam выполнен успешно!");
      window.location.href = "/dashboard";
    }, 2000);
  };

  return (
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
          <p className="text-red-500 text-sm">{errors.steamUsername.message}</p>
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
          <p className="text-red-500 text-sm">{errors.steamPassword.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-lg font-semibold"
        disabled={isLoading}
      >
        {isLoading ? (
          <Icon name="Loader2" className="animate-spin mr-2" />
        ) : (
          <Icon name="LogIn" className="mr-2" />
        )}
        {isLoading ? "Вход..." : "Войти"}
      </Button>

      <div className="text-center space-y-2">
        <p className="text-gray-600">
          Нет аккаунта?{" "}
          <Link
            to="/register"
            className="text-primary hover:text-primary-600 font-semibold"
          >
            Зарегистрироваться
          </Link>
        </p>
        <Link to="#" className="text-sm text-gray-500 hover:text-primary">
          Забыли пароль?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
