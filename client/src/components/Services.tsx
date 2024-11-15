import React from 'react';
import { CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Web Development',
    description: 'Custom web applications and websites built with modern technologies.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your business.',
    icon: GlobeAltIcon,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions for your digital needs
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center">
                <service.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
                {service.name}
              </h3>
              <p className="mt-2 text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}