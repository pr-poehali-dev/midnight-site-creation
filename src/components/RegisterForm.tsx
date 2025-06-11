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

const registerSchema = z
  .object({
    name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
    email: z.string().email("Введите корректный email"),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
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

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(
        "Регистрация прошла успешно! Проверьте email для подтверждения.",
      );
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Имя</Label>
        <Input
          id="name"
          placeholder="Введите ваше имя"
          {...register("name")}
          className="h-12"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

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

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Повторите пароль"
          {...register("confirmPassword")}
          className="h-12"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
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
          <Icon name="UserPlus" className="mr-2" />
        )}
        {isLoading ? "Регистрация..." : "Зарегистрироваться"}
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
    </form>
  );
};

export default RegisterForm;
