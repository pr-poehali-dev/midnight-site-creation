import AuthLayout from "@/components/AuthLayout";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <AuthLayout title="Вход Steam" subtitle="Войдите с данными Steam аккаунта">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
