import React from 'react';
import { Zap, Code, Image, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process images in under 2 seconds with our optimized AI model.',
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'Simple REST API with comprehensive documentation and SDKs.',
  },
  {
    icon: Image,
    title: 'High Quality',
    description: 'Support for high-resolution images up to 8K with perfect edge detection.',
  },
  {
    icon: Shield,
    title: 'Enterprise Ready',
    description: 'Bank-level security with 98.6% uptime SLA guarantee.',
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-900/50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features for Every Need
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to remove backgrounds with confidence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}