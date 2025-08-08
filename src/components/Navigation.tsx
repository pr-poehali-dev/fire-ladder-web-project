import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  return (
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
  );
};

export default Navigation;