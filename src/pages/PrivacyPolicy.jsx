import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
         </header>

        {/* Content Sections */}
        <div className="space-y-10">
          <section className="border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-red-500 mr-2">1.</span> Introduction
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Welcome to <strong className="text-red-500">Pentagon Space</strong> ("We," "Us," or "Our"). This Privacy Policy governs your use of 
                Our Website and explains how we collect, use, disclose, and protect your information. 
                By accessing or using the Website, you agree to this policy. If you disagree, please refrain from using our services.
              </p>
              <p>
                This document is an electronic record under the <strong className="text-red-500">Information Technology Act, 2000</strong> (India) and 
                doesn't require physical, electronic, or digital signatures.
              </p>
            </div>
          </section>

          <section className="border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-red-500 mr-2">2.</span> Information We Collect
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>To provide our services, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, age, gender</li>
                <li>Contact information and PIN code</li>
                <li>Payment details (credit/debit cards)</li>
                <li>Medical history and biometric data (where applicable)</li>
                <li>Usage data through cookies</li>
              </ul>
              <p>
                Information publicly available under laws like the <strong className="text-red-500">Right to Information Act, 2005</strong> isn't considered sensitive.
              </p>
            </div>
          </section>

          <section className="border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-red-500 mr-2">3.</span> How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Personalize user experience</li>
                <li>Process transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section className="border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-red-500 mr-2">4.</span> Cookies and Tracking
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>We use cookies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Assign unique User IDs</li>
                <li>Analyze traffic patterns</li>
                <li>Deliver targeted content</li>
              </ul>
              <p>
                Your IP address helps us understand geographic demographics but doesn't personally identify you.
              </p>
            </div>
          </section>

          <section className="border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-red-500 mr-2">5.</span> Information Sharing
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>We may share your information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>When required by law or legal process</li>
                <li>With trusted third-party service providers</li>
                <li>Within our corporate group for business operations</li>
              </ul>
            </div>
          </section>

          <section className="border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-red-500 mr-2">6.</span> Data Security
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>We implement:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption and firewall protection</li>
                <li>Limited access controls</li>
                <li>Regular security audits</li>
              </ul>
              <p>
                While we take reasonable measures, no internet transmission is 100% secure.
              </p>
            </div>
          </section>

          <section className="border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-red-500 mr-2">7.</span> Policy Updates
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may update this policy periodically. Continued use of the Website constitutes acceptance of changes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-red-500 mr-2">8.</span> Grievance Officer
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>For privacy concerns, contact our Grievance Officer:</p>
              <address className="not-italic bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="font-medium text-gray-900">Pentagon Space</span>
                </div>
                <div className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:[email]" className="text-red-500 hover:underline">[info@pentagonspace.in]</a>
                </div>
                <div className="flex items-start mb-3">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:[phone]" className="text-red-500 hover:underline">[+91 9901066669]</a>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>[765, 8th Cross Rd, Govindaraja Nagar Ward, MC Layout, Vijayanagar, Bengaluru, Karnataka 560040]</span>
                </div>
              </address>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Pentagon Space. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;