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
  email: z.string().email("Введите корректный email"),
  password: z.string().min(1, "Введите пароль"),
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

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Вход выполнен успешно!");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Введите ваш email"
          {...register("email")}
          className="h-12"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Пароль</Label>
        <Input
          id="password"
          type="password"
          placeholder="Введите пароль"
          {...register("password")}
          className="h-12"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
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
