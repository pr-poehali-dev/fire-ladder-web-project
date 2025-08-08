import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
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
  );
};

export default Hero;