import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      '50 images per month',
      'Basic resolution (1080p)',
      'Standard processing speed',
      'Basic API access',
      'Community support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    features: [
      'Unlimited images',
      '4K resolution support',
      'Priority processing',
      'Full API access',
      'Premium support',
      'Batch processing',
      'Custom integration',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'per month',
    features: [
      'Unlimited high-res images',
      '8K resolution support',
      'Dedicated infrastructure',
      'Custom API solutions',
      '24/7 priority support',
      'Advanced analytics',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <div className="py-24" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-400 text-lg">Choose the perfect plan for your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-blue-600 border-2 border-blue-400'
                  : 'bg-gray-800'
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="ml-2 text-gray-400">/{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <Check className={`w-5 h-5 ${plan.highlighted ? 'text-blue-200' : 'text-blue-500'}`} />
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}