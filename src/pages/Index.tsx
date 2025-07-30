import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const CheckupItem = ({ children, icon }: { children: React.ReactNode; icon: string }) => (
  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-medical-light hover:shadow-md transition-shadow duration-200">
    <Icon name={icon} className="text-medical" size={20} />
    <span className="text-gray-700">{children}</span>
  </div>
);

const PriceComparison = ({ service, price }: { service: string; price: string }) => (
  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
    <span className="text-gray-700 text-sm">{service}</span>
    <span className="text-medical-dark font-semibold">{price}</span>
  </div>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-bg to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-medical-light">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-medical-dark">Поликлиника №2</h1>
          <p className="text-gray-600">ул. Братьев Быковых 16</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold text-medical-dark mb-4">
              Check-up
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Комплексное обследование для вашего здоровья
            </p>
            <div className="bg-gradient-to-r from-medical to-medical-dark text-white px-8 py-4 rounded-lg inline-block mb-8">
              <p className="text-lg font-semibold">✨ Это бесплатно и информативно!</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Important Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-medical-dark mb-12">
            Что важно знать?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Check-up */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-medical-dark flex items-center gap-2">
                  <Icon name="Stethoscope" size={24} />
                  Базовые обследования
                </CardTitle>
                <CardDescription>
                  Check-up включает в себя комплекс обследований для всех
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <CheckupItem icon="Activity">Общий клинический анализ крови</CheckupItem>
                <CheckupItem icon="Droplet">Исследование глюкозы и холестерина</CheckupItem>
                <CheckupItem icon="Heart">Регистрация электрокардиограммы</CheckupItem>
                <CheckupItem icon="Zap">Флюорография</CheckupItem>
                <CheckupItem icon="Eye">Измерение внутриглазного давления</CheckupItem>
                <CheckupItem icon="Shield">Исследование крови на ВИЧ</CheckupItem>
              </CardContent>
            </Card>

            {/* Age-specific */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-medical-dark flex items-center gap-2">
                  <Icon name="Calendar" size={24} />
                  Дополнительные обследования
                </CardTitle>
                <CardDescription>
                  Специальные исследования по возрасту и полу
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="40plus">
                    <AccordionTrigger className="text-left">
                      <Badge variant="outline" className="mr-2">40+</Badge>
                      Гражданам старше 40 лет
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pt-3">
                      <CheckupItem icon="Heart">Маммография для женщин</CheckupItem>
                      <CheckupItem icon="User">Исследование простатспецифического антигена для мужчин</CheckupItem>
                      <CheckupItem icon="Search">Исследование кала на скрытую кровь для всех</CheckupItem>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="women">
                    <AccordionTrigger className="text-left">
                      <Badge variant="outline" className="mr-2">♀</Badge>
                      Для всех женщин
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pt-3">
                      <CheckupItem icon="Microscope">Исследование гинекологического мазка на микрофлору и онкоцитологию</CheckupItem>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-12 px-4 bg-medical-bg">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-medical-dark mb-8">
            Почему лучше прийти к нам?
          </h2>
          
          <Card className="animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-medical-dark">
                Экономия в частных клиниках
              </CardTitle>
              <CardDescription>
                Средняя цена на исследования в частных клиниках
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <PriceComparison service="ОАК" price="450 ₽" />
              <PriceComparison service="Глюкоза крови" price="190 ₽" />
              <PriceComparison service="Общий холестерин" price="260 ₽" />
              <PriceComparison service="Регистрация электрокардиограммы с расшифровкой" price="815 ₽" />
              <PriceComparison service="Измерение внутриглазного давления" price="390 ₽" />
              <PriceComparison service="Исследование кала на скрытую кровь" price="1170 ₽" />
              <PriceComparison service="Маммография с описанием" price="1700 ₽" />
              <PriceComparison service="Простатспецифический антиген" price="500 ₽" />
              <PriceComparison service="ВИЧ" price="1500 ₽" />
              <PriceComparison service="Мазок на онкоцитологию" price="1780 ₽" />
              
              <div className="bg-gradient-to-r from-medical to-medical-dark text-white p-6 rounded-lg text-center mt-6">
                <p className="text-2xl font-bold">Вы экономите 6 805 рублей!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Diseases Detection */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-medical-dark mb-8">
            Что можно выявить?
          </h2>
          
          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Пройдя Check-up в нашей поликлинике, у вас появляется возможность выявить ряд заболеваний:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <Badge variant="secondary" className="p-2">анемии</Badge>
                <Badge variant="secondary" className="p-2">паразитарные инвазии</Badge>
                <Badge variant="secondary" className="p-2">сахарный диабет</Badge>
                <Badge variant="secondary" className="p-2">гипертоническая болезнь</Badge>
                <Badge variant="secondary" className="p-2">аритмии</Badge>
                <Badge variant="secondary" className="p-2">туберкулез</Badge>
                <Badge variant="secondary" className="p-2">ВИЧ</Badge>
                <Badge variant="secondary" className="p-2">заболевания кишечника</Badge>
                <Badge variant="secondary" className="p-2">заболевания молочных желез</Badge>
                <Badge variant="secondary" className="p-2">злокачественные новообразования</Badge>
                <Badge variant="secondary" className="p-2">и многие другие</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-medical to-medical-dark text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Запишитесь на обследования</h2>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Icon name="MapPin" size={24} />
                  <h3 className="text-xl font-semibold">Поликлиника №2</h3>
                </div>
                <p className="text-lg mb-6">ул. Братьев Быковых 16</p>
                
                <div className="bg-white/20 p-4 rounded-lg mb-6">
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="FileText" size={20} />
                    Не забудьте паспорт и полис ОМС
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-white text-medical hover:bg-gray-100 transition-colors"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
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
          <p className="text-medical-light">
            © 2024 Поликлиника №2. Забота о вашем здоровье.
          </p>
        </div>
      </footer>
    </div>
  );
}