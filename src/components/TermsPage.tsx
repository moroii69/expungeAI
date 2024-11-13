import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Terms</h2>
            <p className="text-gray-300">
              By accessing ExpungeAI, you agree to be bound by these terms of service and agree that
              you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
            <p className="text-gray-300">
              Permission is granted to temporarily download one copy of the materials (information
              or software) on ExpungeAI for personal, non-commercial transitory viewing only.
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-300">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
            <p className="text-gray-300">
              The materials on ExpungeAI are provided on an 'as is' basis. ExpungeAI makes no
              warranties, expressed or implied, and hereby disclaims and negates all other
              warranties including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
            <p className="text-gray-300">
              In no event shall ExpungeAI or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use the materials on ExpungeAI.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Privacy</h2>
            <p className="text-gray-300">
              Your privacy is important to us. It is ExpungeAI's policy to respect your privacy
              regarding any information we may collect while operating our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}