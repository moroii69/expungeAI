import React from 'react';
import { Menu, X, Github } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToUpload = () => {
    const element = document.getElementById('upload-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/">
            <div className="text-blue-500 font-bold text-2xl">ExpungeAI</div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="/docs" className="text-gray-300 hover:text-white transition-colors">API Docs</a>
            <a href="https://github.com/moroii69/expungeAI" target="_blank" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
              <Github size={18} />
              GitHub
            </a>

            <button
              onClick={scrollToUpload}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#docs" className="block text-gray-300 hover:text-white transition-colors">API Docs</a>
            <a href="https://github.com/moroii69/expungeAI" className="block text-gray-300 hover:text-white transition-colors flex items-center gap-1">
              <Github size={18} />
              GitHub
            </a>
            <button
              onClick={scrollToUpload}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}