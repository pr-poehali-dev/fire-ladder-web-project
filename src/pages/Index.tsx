import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Shield" className="h-8 w-8 text-red-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Пожарные Лестницы</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-red-600 font-medium">Услуги</a>
              <a href="#gallery" className="text-gray-700 hover:text-red-600 font-medium">Галерея работ</a>
              <a href="#contacts" className="text-gray-700 hover:text-red-600 font-medium">Контакты</a>
              <a href="#pricing" className="text-gray-700 hover:text-red-600 font-medium">Цены</a>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Пожарные Лестницы
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Изготовление | Установка | Испытание
            </p>
            <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
              Профессиональный монтаж с соблюдением техники безопасности и всех строительных норм
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="text-sm bg-red-600 text-white px-4 py-2">
                <Icon name="FileText" className="h-4 w-4 mr-2" />
                ГОСТ Р 53254-2009
              </Badge>
              <Badge variant="secondary" className="text-sm bg-gray-700 text-white px-4 py-2">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                8(911)253-42-69
              </Badge>
              <Badge variant="secondary" className="text-sm bg-gray-700 text-white px-4 py-2">
                <Icon name="Mail" className="h-4 w-4 mr-2" />
                PGL2003@MAIL.RU
              </Badge>
            </div>

            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              <Icon name="Calculator" className="h-5 w-5 mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши Услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный комплекс услуг по пожарным лестницам с гарантией качества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Move3D" className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold">Вертикальные лестницы</CardTitle>
                <CardDescription>
                  Надежные конструкции для быстрой эвакуации с высотных зданий
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Соответствие ГОСТ
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Антикоррозийное покрытие
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Быстрый монтаж
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Stairs" className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold">Маршевые лестницы</CardTitle>
                <CardDescription>
                  Удобные и безопасные пожарные лестницы для эвакуации людей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Противоскользящие ступени
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Прочные перила
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Долговечность
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold">Кровельные ограждения</CardTitle>
                <CardDescription>
                  Защитные системы для безопасной работы на крышах зданий
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Высокая прочность
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Устойчивость к погоде
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Сертификация
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Галерея работ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры наших выполненных проектов по установке пожарных лестниц
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="img/e007bb51-1248-4e6e-b462-e3e530f314ca.jpg" 
                alt="Вертикальная пожарная лестница"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="secondary" size="sm">
                  <Icon name="Eye" className="h-4 w-4 mr-2" />
                  Подробнее
                </Button>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="img/a264db7b-6c78-4710-879e-eb30e71da2b7.jpg" 
                alt="Маршевая пожарная лестница"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="secondary" size="sm">
                  <Icon name="Eye" className="h-4 w-4 mr-2" />
                  Подробнее
                </Button>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="img/6dff48ec-c50a-40f9-92ae-bba0db6429a5.jpg" 
                alt="Кровельные ограждения"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="secondary" size="sm">
                  <Icon name="Eye" className="h-4 w-4 mr-2" />
                  Подробнее
                </Button>
              </div>
            </div>
            
            {[4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <Icon name="Image" className="h-12 w-12 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <Icon name="Eye" className="h-4 w-4 mr-2" />
                    Подробнее
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Цены на услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачная стоимость работ без скрытых платежей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Вертикальные лестницы</CardTitle>
                <div className="text-3xl font-bold text-red-600">от 15 000 ₽</div>
                <CardDescription>за погонный метр</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Изготовление
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Монтаж
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Испытание
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Документация
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-red-600 text-white">Популярно</Badge>
                <CardTitle className="text-2xl">Маршевые лестницы</CardTitle>
                <div className="text-3xl font-bold text-red-600">от 25 000 ₽</div>
                <CardDescription>за погонный метр</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Изготовление
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Монтаж
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Испытание
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Документация
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Гарантия 5 лет
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Кровельные ограждения</CardTitle>
                <div className="text-3xl font-bold text-red-600">от 8 000 ₽</div>
                <CardDescription>за погонный метр</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Изготовление
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Монтаж
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Испытание
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                    Документация
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами для расчета стоимости и консультации
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Наши контакты</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Phone" className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Телефон</p>
                    <p className="text-gray-600">8(911)253-42-69</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Mail" className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">PGL2003@MAIL.RU</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="MapPin" className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Адрес</p>
                    <p className="text-gray-600">Санкт-Петербург и Ленинградская область</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Clock" className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Режим работы</p>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Тип услуги
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option>Выберите тип услуги</option>
                    <option>Вертикальные лестницы</option>
                    <option>Маршевые лестницы</option>
                    <option>Кровельные ограждения</option>
                    <option>Консультация</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Комментарий
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    rows={3}
                    placeholder="Опишите ваш проект..."
                  />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Icon name="Send" className="h-4 w-4 mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <Icon name="Shield" className="h-8 w-8 text-red-600 mr-2" />
                <span className="text-xl font-bold">Пожарные Лестницы</span>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональное изготовление, установка и испытание пожарных лестниц 
                с соблюдением всех норм безопасности и ГОСТ.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-red-600 text-white">
                  ГОСТ Р 53254-2009
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Вертикальные лестницы</li>
                <li>Маршевые лестницы</li>
                <li>Кровельные ограждения</li>
                <li>Испытание конструкций</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>8(911)253-42-69</li>
                <li>PGL2003@MAIL.RU</li>
                <li>Санкт-Петербург</li>
                <li>Пн-Пт: 9:00 - 18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Пожарные Лестницы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;