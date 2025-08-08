import React from 'react';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;