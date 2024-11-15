import React from 'react';

export function Hero() {
  return (
    <div className="relative bg-blue-600 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span className="block">Digital Solutions for</span>
          <span className="block text-blue-200">Modern Businesses</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          We provide cutting-edge technology solutions to help your business thrive in the digital age.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}