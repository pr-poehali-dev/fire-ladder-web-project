import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  return (
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
  );
};

export default Services;