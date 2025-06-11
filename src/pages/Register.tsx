import AuthLayout from "@/components/AuthLayout";
import RegisterForm from "@/components/RegisterForm";

const Register = () => {
  return (
    <AuthLayout title="Регистрация" subtitle="Создайте аккаунт, чтобы начать">
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
