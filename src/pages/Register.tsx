import AuthLayout from "@/components/AuthLayout";
import RegisterForm from "@/components/RegisterForm";

const Register = () => {
  return (
    <AuthLayout
      title="Регистрация Steam"
      subtitle="Войдите с вашими данными Steam"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
