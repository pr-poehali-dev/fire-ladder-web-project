import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Pricing = () => {
  return (
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
  );
};

export default Pricing;