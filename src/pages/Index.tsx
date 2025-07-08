import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-omega-white font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-omega-white/95 backdrop-blur-sm border-b border-omega-gray">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bebas font-bold text-omega-black">
            ОМЕГА
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-omega-black hover:text-omega-orange transition-colors"
            >
              Что мы делаем
            </a>
            <a
              href="#portfolio"
              className="text-omega-black hover:text-omega-orange transition-colors"
            >
              Наши работы
            </a>
            <a
              href="#clients"
              className="text-omega-black hover:text-omega-orange transition-colors"
            >
              Клиенты
            </a>
            <a
              href="#contacts"
              className="text-omega-black hover:text-omega-orange transition-colors"
            >
              Контакты
            </a>
          </div>
          <Button className="bg-omega-orange hover:bg-omega-orange/90 text-white px-6">
            Обсудить проект
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-omega-white to-omega-gray">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl lg:text-7xl font-bebas font-bold text-omega-black leading-tight mb-6">
                КРЕАТИВНОЕ
                <br />
                <span className="text-omega-orange">BTL АГЕНТСТВО</span>
                <br />
                ПОЛНОГО ЦИКЛА
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Привлечем клиентов в ваш бизнес с помощью промо-мероприятий и
                акций. На рынке с 2014 года. Используем как стандартные средства
                воздействия, так и инновационные методы.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-omega-orange hover:bg-omega-orange/90 text-white px-8 py-3 text-lg">
                  Запустить кампанию
                </Button>
                <Button
                  variant="outline"
                  className="border-omega-black text-omega-black hover:bg-omega-black hover:text-white px-8 py-3 text-lg"
                >
                  Посмотреть портфолио
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="/img/d8754ea8-6eb7-4111-8fe1-c8cad2505822.jpg"
                alt="BTL агентство ОМЕГА - креативная команда"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-omega-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bebas font-bold text-omega-black mb-6">
              ЧТО МЫ ДЕЛАЕМ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр BTL-услуг для эффективного продвижения вашего
              бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Megaphone",
                title: "ПРОМО-АКЦИИ",
                description:
                  "Разработка и проведение промо-мероприятий, дегустации, презентации продукции",
              },
              {
                icon: "Users",
                title: "EVENT-МАРКЕТИНГ",
                description:
                  "Организация корпоративных мероприятий, конференций, выставок и праздников",
              },
              {
                icon: "Target",
                title: "BTL-КАМПАНИИ",
                description:
                  "Комплексные BTL-кампании с измеримыми результатами и аналитикой",
              },
              {
                icon: "Lightbulb",
                title: "КРЕАТИВНЫЕ РЕШЕНИЯ",
                description:
                  "Инновационные форматы активаций и нестандартные решения для брендов",
              },
              {
                icon: "Calendar",
                title: "СЕЗОННЫЕ АКТИВНОСТИ",
                description:
                  "Новогодние активации, летние кампании и праздничные мероприятия",
              },
              {
                icon: "Award",
                title: "LOYALTY ПРОГРАММЫ",
                description:
                  "Разработка программ лояльности и стимулирования продаж",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 animate-slide-in-right border-omega-gray hover:border-omega-orange"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon
                      name={service.icon}
                      size={48}
                      className="text-omega-orange group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-bebas font-bold text-omega-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-omega-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bebas font-bold text-omega-black mb-6">
              НАШИ РАБОТЫ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Успешные кампании и проекты, которые принесли результат нашим
              клиентам
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Запуск нового продукта",
                client: "Крупная FMCG компания",
                result: "+340% узнаваемости",
                category: "Промо-кампания",
              },
              {
                title: "Корпоративное мероприятие",
                client: "IT-компания",
                result: "500+ участников",
                category: "Event",
              },
              {
                title: "Сезонная активация",
                client: "Ритейл сеть",
                result: "+25% продаж",
                category: "BTL-кампания",
              },
              {
                title: "Loyalty программа",
                client: "Банк",
                result: "15% новых клиентов",
                category: "CRM",
              },
              {
                title: "Праздничная кампания",
                client: "Ресторанная сеть",
                result: "+50% трафика",
                category: "Event-маркетинг",
              },
              {
                title: "Презентация услуги",
                client: "Телеком оператор",
                result: "1000+ лидов",
                category: "Промо-акция",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-white hover:bg-omega-orange hover:text-white"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm bg-omega-orange text-white rounded-full group-hover:bg-white group-hover:text-omega-orange transition-colors">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bebas font-bold mb-2 group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 mb-3">
                    {project.client}
                  </p>
                  <div className="text-2xl font-bebas font-bold text-omega-orange group-hover:text-white">
                    {project.result}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-omega-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bebas font-bold text-omega-black mb-6">
              НАШИ КЛИЕНТЫ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Нам доверяют ведущие компании различных отраслей
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "МТС",
              "Сбербанк",
              "Coca-Cola",
              "McDonald's",
              "IKEA",
              "Samsung",
              "Adidas",
              "BMW",
              "L'Oréal",
              "Nestlé",
              "Danone",
              "PepsiCo",
            ].map((client, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-omega-gray rounded-lg flex items-center justify-center mx-auto hover:bg-omega-orange/10 transition-colors">
                  <span className="text-lg font-bebas font-bold text-omega-black">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-omega-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bebas font-bold mb-6">
                ГОТОВЫ ОБСУДИТЬ
                <br />
                <span className="text-omega-orange">ВАШ ПРОЕКТ?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Каждое из проводимых нами BTL мероприятий плодотворны, потому
                как специалисты, задействованные в реализации, предельно
                внимательны к мелочам.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-omega-orange" />
                  <span className="text-lg">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} className="text-omega-orange" />
                  <span className="text-lg">hello@omega-btl.ru</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-omega-orange" />
                  <span className="text-lg">Москва, ул. Тверская, д. 15</span>
                </div>
              </div>
            </div>

            <Card className="bg-white text-omega-black">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bebas font-bold mb-6">
                  ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full p-4 border border-omega-gray rounded-lg focus:border-omega-orange outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-4 border border-omega-gray rounded-lg focus:border-omega-orange outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full p-4 border border-omega-gray rounded-lg focus:border-omega-orange outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Расскажите о вашем проекте"
                      rows={4}
                      className="w-full p-4 border border-omega-gray rounded-lg focus:border-omega-orange outline-none resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-omega-orange hover:bg-omega-orange/90 text-white py-4 text-lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-omega-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bebas font-bold text-omega-orange mb-4">
                ОМЕГА
              </div>
              <p className="text-gray-400">
                BTL агентство полного цикла. На рынке с 2014 года.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bebas font-bold mb-4">УСЛУГИ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Промо-акции</li>
                <li>Event-маркетинг</li>
                <li>BTL-кампании</li>
                <li>Креативные решения</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bebas font-bold mb-4">КОМПАНИЯ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bebas font-bold mb-4">
                СОЦИАЛЬНЫЕ СЕТИ
              </h4>
              <div className="flex space-x-4">
                <Icon
                  name="Instagram"
                  size={24}
                  className="text-gray-400 hover:text-omega-orange transition-colors cursor-pointer"
                />
                <Icon
                  name="Linkedin"
                  size={24}
                  className="text-gray-400 hover:text-omega-orange transition-colors cursor-pointer"
                />
                <Icon
                  name="Facebook"
                  size={24}
                  className="text-gray-400 hover:text-omega-orange transition-colors cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ОМЕГА BTL. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
