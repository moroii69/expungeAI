import React from 'react';
import { Wand2, CircleDashed, Image as ImageIcon, Layers, Video } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'Magic Brush',
    description: 'Precisely refine edges and make selective adjustments with our intelligent brush tool. Perfect for detailed touch-ups and professional-grade results.',
    comingSoon: 'On Deck'
  },
  {
    icon: CircleDashed,
    title: 'Background Blur Effect',
    description: 'Create stunning depth-of-field effects with AI-powered background blur. Ideal for portraits and product photography.',
    comingSoon: 'On Deck'
  },
  {
    icon: ImageIcon,
    title: 'Smart Background Replacement',
    description: 'Instantly swap backgrounds with AI-suggested scenes or custom images. Includes automatic lighting adjustment and perspective matching.',
    comingSoon: 'In Progress'
  },
  {
    icon: Layers,
    title: 'Batch Processing',
    description: 'Process hundreds of images simultaneously with our advanced batch processing system. Perfect for e-commerce and large-scale projects.',
    comingSoon: 'In Progress'
  },
  {
    icon: Video,
    title: 'Background Removal for Videos',
    description: 'Remove backgrounds from videos in real-time with our advanced AI technology. Support for multiple formats and resolutions.',
    comingSoon: 'Next Up'
  }
];

export default function ComingSoon() {
  return (
    <div className="py-24 bg-gray-900/50" id="coming-soon">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-400 text-lg">
            Exciting new features on the horizon
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-colors relative group"
            >
              <div className="absolute top-4 right-4 bg-blue-600/90 text-white text-sm px-3 py-1 rounded-full">
                {feature.comingSoon}
              </div>
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