import React from 'react';
import { Code, Terminal, Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const codeExample = `// Using fetch
const response = await fetch('https://api.ExpungeAI.com/v1/remove', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    image_url: 'https://example.com/image.jpg',
    // Optional parameters
    size: 'auto',
    format: 'png',
    quality: 'high'
  })
});


const result = await response.json();
console.log(result.output_url);`;


const installCLI = `npm install @ExpungeAI/client`

const endpoints = [
  {
    name: 'Remove Background',
    method: 'POST',
    endpoint: '/v1/remove',
    description: 'Remove background from a single image',
  },
  {
    name: 'Batch Process',
    method: 'POST',
    endpoint: '/v1/batch',
    description: 'Process multiple images in one request',
  },
  {
    name: 'Get Credits',
    method: 'GET',
    endpoint: '/v1/credits',
    description: 'Check remaining API credits',
  },
];

export default function DocsPage() {
  const [copied, setCopied] = React.useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">API Documentation</h1>

          {/* Quick Start */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Quick Start</h2>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Terminal size={20} className="text-blue-400" />
                  <span className="text-gray-300">Installation</span>
                </div>
              </div>
              <SyntaxHighlighter language="javascript" style={oneDark} className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                {installCLI}
              </SyntaxHighlighter>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Code size={20} className="text-blue-400" />
                  <span className="text-gray-300">Example Usage</span>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <SyntaxHighlighter language="javascript" style={oneDark} className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                {codeExample}
              </SyntaxHighlighter>

            </div>
          </section>

          {/* Authentication */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Authentication</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                All API requests require authentication using an API key. Include your API key
                in the Authorization header of your requests:
              </p>
              <div className="bg-gray-800 rounded-lg p-4 mt-4">
                <code className="text-blue-400">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
            </div>
          </section>

          {/* Endpoints */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">API Endpoints</h2>
            <div className="space-y-4">
              {endpoints.map((endpoint) => (
                <div key={endpoint.endpoint} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-medium text-white">{endpoint.name}</h3>
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {endpoint.method}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">{endpoint.description}</p>
                  <code className="text-blue-400">
                    https://api.ExpungeAI.com{endpoint.endpoint}
                  </code>
                </div>
              ))}
            </div>
          </section>

          {/* Rate Limits */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Rate Limits</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left text-gray-300 pb-4">Plan</th>
                    <th className="text-left text-gray-300 pb-4">Rate Limit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-gray-400 py-2">Free</td>
                    <td className="text-gray-400 py-2">50 requests/month</td>
                  </tr>
                  <tr>
                    <td className="text-gray-400 py-2">Pro</td>
                    <td className="text-gray-400 py-2">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="text-gray-400 py-2">Enterprise</td>
                    <td className="text-gray-400 py-2">Custom limits available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
