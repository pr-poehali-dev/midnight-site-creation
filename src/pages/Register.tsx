import AuthLayout from "@/components/AuthLayout";
import RegisterForm from "@/components/RegisterForm";

const Register = () => {
  return (
    <AuthLayout
      title="Регистрация через Steam"
      subtitle="Подключите ваш Steam аккаунт"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
