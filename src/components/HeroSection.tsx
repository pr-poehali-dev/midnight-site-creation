import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="gradient-bg min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Добро пожаловать
            <br />
            <span className="text-primary-200">в будущее</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Создайте аккаунт и откройте для себя новые возможности. Простая
            регистрация, мощные инструменты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-primary-50 transform hover:scale-105 transition-all duration-200 px-8 py-4 text-lg font-semibold"
            >
              <Link to="/register">
                <Icon name="UserPlus" className="mr-2" />
                Зарегистрироваться
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-200 px-8 py-4 text-lg font-semibold"
            >
              <Link to="/login">
                <Icon name="LogIn" className="mr-2" />
                Войти
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary-200/20 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
