import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToUpload = () => {
    const element = document.getElementById('upload-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Remove Backgrounds{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Instantly
            </span>{' '}
            with AI
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Professional-grade background removal powered by advanced AI. 
            Perfect for e-commerce, design, and marketing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToUpload}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Try it Free
              <ArrowRight size={20} />
            </button>
            <a
              href="/docs"
              className="px-8 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
            >
              View Documentation
            </a>

          </div>
          
          <div className="mt-12 text-gray-400 flex items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-white">98.6%</div>
              <div className="text-sm">Accuracy</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-white">&lt;3s</div>
              <div className="text-sm">Processing Time</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-white">10M+</div>
              <div className="text-sm">Trained Images</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}