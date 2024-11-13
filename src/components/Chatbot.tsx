import React, { useState } from 'react';
import { MessageCircle, X, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "How does the background removal work?",
    a: "Our AI-powered technology analyzes your image to identify the main subject and precisely removes the background in seconds."
  },
  {
    q: "What file formats are supported?",
    a: "We support JPG, PNG, and WEBP formats. Maximum file size is 10MB."
  },
  {
    q: "How accurate is the background removal?",
    a: "Our AI achieves 98.6% accuracy for most images. For complex cases, you can use our upcoming Magic Brush tool for fine-tuning."
  },
  {
    q: "Can I process multiple images?",
    a: "Yes! Our Pro and Enterprise plans support batch processing of multiple images simultaneously."
  },
  {
    q: "What's the maximum resolution supported?",
    a: "Free tier supports up to 1080p, Pro tier up to 4K, and Enterprise tier up to 8K resolution."
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-gray-800 rounded-lg shadow-lg mb-4 w-80 overflow-hidden">
          <div className="p-4 bg-gray-700 flex justify-between items-center">
            <h3 className="text-white font-semibold">Help Center</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-4 max-h-96 overflow-y-auto">
            {selectedQuestion ? (
              <div className="space-y-4">
                <button
                  onClick={() => setSelectedQuestion(null)}
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ChevronUp size={16} className="mr-1" /> Back to questions
                </button>
                <div className="text-gray-300">
                  <p className="font-semibold mb-2">{selectedQuestion}</p>
                  <p>{faqs.find(faq => faq.q === selectedQuestion)?.a}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {faqs.map((faq) => (
                  <button
                    key={faq.q}
                    onClick={() => setSelectedQuestion(faq.q)}
                    className="w-full text-left p-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors"
                  >
                    {faq.q}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-full p-4 shadow-lg"
      >
        <MessageCircle className="text-white" size={24} />
      </button>
    </div>
  );
}