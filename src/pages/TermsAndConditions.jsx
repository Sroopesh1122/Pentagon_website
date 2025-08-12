import React from "react";
import { FaBalanceScale, FaShieldAlt, FaExclamationTriangle, FaGavel } from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-white">
          <div className="flex items-center">
            <FaBalanceScale className="text-3xl mr-4" />
            <div>
              <h1 className="text-3xl font-bold">Terms and Conditions</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="prose prose-red max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-gray-700 mb-4">
                The terms <span className="font-semibold">"We" / "Us" / "Our"/”Company”</span> individually and collectively refer to <span className="font-semibold">Institution 1</span> and the terms <span className="font-semibold">"Visitor" / "User"</span> refer to the users.
              </p>
              <p className="text-gray-700 mb-4">
                This page states the Terms and Conditions under which you (Visitor) may visit this website ("Website"). Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this site.
              </p>
              
            </section>

            {/* Use of Content */}
            <section className="mb-10">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <FaShieldAlt className="text-red-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Use of Content</h2>
              </div>
              <p className="text-gray-700 mb-4">
                All logos, brands, marks headings, labels, names, signatures, numerals, shapes or any combinations thereof, appearing in this site, except as otherwise noted, are properties either owned, or used under licence, by the business and/or its associate entities who feature on this Website.
              </p>
              <p className="text-gray-700">
                The use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited. You may not sell or modify the content of this Website or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the respective organisation's or entity's written permission.
              </p>
            </section>

            {/* Acceptable Website Use */}
            <section className="mb-10">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <FaGavel className="text-red-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Acceptable Website Use</h2>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Security Rules</h3>
              <p className="text-gray-700 mb-4">
                Visitors are prohibited from violating or attempting to violate the security of the Web site, including, without limitation:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                <li>Accessing data not intended for such user or logging into a server or account which the user is not authorised to access</li>
                <li>Attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorisation</li>
                <li>Attempting to interfere with service to any user, host or network, including via means of submitting a virus or "Trojan horse" to the Website</li>
                <li>Sending unsolicited electronic mail, including promotions and/or advertising of products or services</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Violations of system or network security may result in civil or criminal liability. The business and/or its associate entities will have the right to investigate occurrences and will have the right to involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">General Rules</h3>
              <p className="text-gray-700 mb-4">
                Visitors may not use the Web Site in order to transmit, distribute, store or destroy material:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                <li>That could constitute or encourage conduct that would be considered a criminal offence or violate any applicable law or regulation</li>
                <li>In a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others</li>
                <li>That is libellous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful</li>
              </ul>
            </section>

            {/* Indemnity */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Indemnity</h2>
              <p className="text-gray-700">
                The User unilaterally agree to indemnify and hold harmless, without objection, the Company, its officers, directors, employees and agents from and against any claims, actions and/or demands and/or liabilities and/or losses and/or damages whatsoever arising from or resulting from their use of this website or their breach of the terms.
              </p>
            </section>

            {/* Liability */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Liability</h2>
              <p className="text-gray-700 mb-4">
                User agrees that neither Company nor its group companies, directors, officers or employee shall be liable for any direct or/and indirect or/and incidental or/and special or/and consequential or/and exemplary damages, resulting from:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                <li>The use or/and the inability to use the service</li>
                <li>Cost of procurement of substitute goods or/and services</li>
                <li>Any goods or/and data or/and information or/and services purchased or/and obtained or/and messages received or/and transactions entered into through or/and from the service</li>
                <li>Unauthorized access to or/and alteration of user's transmissions or/and data</li>
                <li>Any other matter relating to the service</li>
              </ul>
              <p className="text-gray-700">
                This includes but is not limited to, damages for loss of profits or/and use or/and data or other intangible, even if Company has been advised of the possibility of such damages.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer of Consequential Damages</h2>
              <p className="text-gray-700">
                In no event shall Company or any parties, organizations or entities associated with the corporate brand name us or otherwise, mentioned at this Website be liable for any damages whatsoever (including, without limitations, incidental and consequential damages, lost profits, or damage to computer hardware or loss of data information or business interruption) resulting from the use or inability to use the Website and the Website material, whether based on warranty, contract, tort, or any other legal theory, and whether or not, such organization or entities were advised of the possibility of such damages.
              </p>
            </section>

            {/* Acceptance */}
            <section className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Acceptance of Terms</h3>
              <p className="text-gray-700">
                By using this website, you signify your acceptance of these Terms and Conditions. If you do not agree to these terms, please do not use our website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TermsAndConditions
