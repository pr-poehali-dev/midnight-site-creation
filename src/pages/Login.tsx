import AuthLayout from "@/components/AuthLayout";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <AuthLayout title="Вход" subtitle="Добро пожаловать обратно!">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
