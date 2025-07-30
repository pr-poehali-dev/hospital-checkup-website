import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const CheckupItem = ({ children, icon }: { children: React.ReactNode; icon: string }) => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-medical-light hover:shadow-md transition-all duration-300 hover:scale-105">
    <div className="flex-shrink-0 w-10 h-10 bg-medical/10 rounded-full flex items-center justify-center">
      <Icon name={icon} className="text-medical" size={20} />
    </div>
    <span className="text-gray-700 font-medium">{children}</span>
  </div>
);

const PriceItem = ({ service, price }: { service: string; price: string }) => (
  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-white to-medical-bg rounded-lg border border-medical-light/50 hover:shadow-sm transition-all duration-200">
    <span className="text-gray-700">{service}</span>
    <span className="text-medical-dark font-bold text-lg">{price}</span>
  </div>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-bg via-white to-medical-light/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-medical/5 to-medical-dark/5"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-medical/10 px-6 py-2 rounded-full mb-8">
              <Icon name="Heart" className="text-medical" size={20} />
              <span className="text-medical-dark font-semibold">Поликлиника №2</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-medical-dark mb-6 tracking-tight">
              Check-up
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Комплексное медицинское обследование для заботы о вашем здоровье
            </p>
            <div className="bg-gradient-to-r from-medical to-medical-dark text-white px-8 py-4 rounded-2xl inline-block mb-8 shadow-lg">
              <p className="text-xl font-bold flex items-center gap-2">
                <Icon name="Sparkles" size={24} />
                Это бесплатно и информативно!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Important Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-medical-dark mb-16 animate-fade-in">
            Что важно знать?
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Basic Checkup */}
            <Card className="animate-scale-in shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-medical-dark flex items-center gap-3">
                  <div className="w-12 h-12 bg-medical/10 rounded-xl flex items-center justify-center">
                    <Icon name="Stethoscope" size={28} className="text-medical" />
                  </div>
                  Базовые обследования
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Check-up включает в себя комплекс обследований для всех
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <CheckupItem icon="Activity">Общий клинический анализ крови</CheckupItem>
                <CheckupItem icon="Droplet">Исследование глюкозы и холестерина</CheckupItem>
                <CheckupItem icon="Heart">Регистрация электрокардиограммы</CheckupItem>
                <CheckupItem icon="Zap">Флюорография</CheckupItem>
                <CheckupItem icon="Eye">Измерение внутриглазного давления</CheckupItem>
                <CheckupItem icon="Shield">Исследование крови на ВИЧ</CheckupItem>
              </CardContent>
            </Card>

            {/* Additional Examinations */}
            <Card className="animate-scale-in shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-medical-dark flex items-center gap-3">
                  <div className="w-12 h-12 bg-medical/10 rounded-xl flex items-center justify-center">
                    <Icon name="Users" size={28} className="text-medical" />
                  </div>
                  Дополнительные обследования
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Специальные исследования по возрасту и полу
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 40+ Citizens */}
                <div className="p-4 bg-medical-bg rounded-xl border border-medical-light">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="bg-medical text-white border-medical">40+</Badge>
                    <h4 className="font-semibold text-medical-dark">Гражданам старше 40 лет:</h4>
                  </div>
                  <div className="space-y-3">
                    <CheckupItem icon="Heart">Маммография для женщин</CheckupItem>
                    <CheckupItem icon="User">Исследование простатспецифического антигена для мужчин</CheckupItem>
                    <CheckupItem icon="Search">Исследование кала на скрытую кровь для всех</CheckupItem>
                  </div>
                </div>

                {/* Women */}
                <div className="p-4 bg-pink-50 rounded-xl border border-pink-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="bg-pink-100 text-pink-700 border-pink-300">♀</Badge>
                    <h4 className="font-semibold text-medical-dark">Для всех женщин:</h4>
                  </div>
                  <CheckupItem icon="Microscope">Исследование гинекологического мазка на микрофлору и онкоцитологию</CheckupItem>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Comparison Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-medical-bg to-medical-light/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-medical-dark mb-8 animate-fade-in">
            Почему лучше прийти к нам?
          </h2>
          
          <Card className="animate-scale-in shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-medical-dark mb-2">
                Экономия в частных клиниках
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Средняя цена на исследования в частных клиниках
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <PriceItem service="ОАК" price="450 ₽" />
              <PriceItem service="Глюкоза крови" price="190 ₽" />
              <PriceItem service="Общий холестерин" price="260 ₽" />
              <PriceItem service="Регистрация электрокардиограммы с расшифровкой" price="815 ₽" />
              <PriceItem service="Измерение внутриглазного давления" price="390 ₽" />
              <PriceItem service="Исследование кала на скрытую кровь" price="1170 ₽" />
              <PriceItem service="Маммография с описанием" price="1700 ₽" />
              <PriceItem service="Простатспецифический антиген" price="500 ₽" />
              <PriceItem service="ВИЧ" price="1500 ₽" />
              <PriceItem service="Мазок на онкоцитологию" price="1780 ₽" />
              
              <div className="bg-gradient-to-r from-medical to-medical-dark text-white p-8 rounded-2xl text-center mt-8 shadow-lg">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Icon name="TrendingDown" size={32} />
                  <p className="text-3xl font-bold">Вы экономите 6 805 рублей!</p>
                </div>
                <p className="text-medical-light opacity-90">При прохождении Check-up в нашей поликлинике</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Diseases Detection */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-medical-dark mb-12 animate-fade-in">
            Что можно выявить?
          </h2>
          
          <Card className="animate-scale-in shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                Пройдя Check-up в нашей поликлинике, у вас появляется возможность выявить ряд заболеваний:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "анемии", "паразитарные инвазии", "сахарный диабет", "гипертоническая болезнь",
                  "аритмии", "туберкулез", "ВИЧ", "заболевания кишечника",
                  "заболевания молочных желез", "злокачественные новообразования", "и многие другие"
                ].map((disease, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="p-3 text-sm bg-medical/5 text-medical-dark border border-medical/20 hover:bg-medical/10 transition-colors duration-200"
                  >
                    {disease}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-medical to-medical-dark text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-12">Запишитесь на обследования</h2>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={32} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold">Поликлиника №2</h3>
                    <p className="text-xl opacity-90">ул. Братьев Быковых 16</p>
                  </div>
                </div>
                
                <div className="bg-white/20 p-6 rounded-2xl mb-8 backdrop-blur-sm">
                  <p className="flex items-center justify-center gap-3 text-lg">
                    <Icon name="FileText" size={24} />
                    Не забудьте паспорт и полис ОМС
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-white text-medical hover:bg-gray-100 transition-all duration-300 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Icon name="Phone" size={24} className="mr-3" />
                  Записаться на приём
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medical-dark text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-medical-light opacity-80">
            © 2024 Поликлиника №2. Забота о вашем здоровье.
          </p>
        </div>
      </footer>
    </div>
  );
}