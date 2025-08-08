import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  return (
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
  );
};

export default Gallery;