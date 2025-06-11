import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Shield",
    title: "Безопасность",
    description: "Ваши данные защищены современными методами шифрования",
  },
  {
    icon: "Zap",
    title: "Быстрота",
    description: "Мгновенная регистрация и быстрый доступ к платформе",
  },
  {
    icon: "Users",
    title: "Сообщество",
    description: "Присоединяйтесь к тысячам активных пользователей",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создали платформу, которая объединяет простоту использования с
            мощными возможностями
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
