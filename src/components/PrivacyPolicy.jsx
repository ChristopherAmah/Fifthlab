import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-10 my-12">
      <header className="mb-8 border-b-2 border-[#00B4D8] pb-4">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      </header>

      {/* Introduction and Company Overview */}
      <section className="mb-10">
        <p className="text-gray-700 mb-4">
          **Fifthlab** (“We”, “Our”, or “Us”) operate at <a href="https://thefifthlab.com/" className="text-indigo-600 hover:text-indigo-800 font-medium">https://thefifthlab.com/</a> (the "website"). We are a fintech company with an ecosystem of advanced but simple solutions with the core focus of delivering client-centered products and services that make our client’s lives and daily operations easy.
        </p>
        <p className="text-gray-700 mb-4">
          We have created compelling solutions and products like our Core Banking Application, the Enterprise Resource Platform (ERP) for SMEs, the cooperatives platform, our payment, and an escrow account for e-commerce simplifying trade between buyers and sellers ("Services").
        </p>
        <p className="text-gray-700 italic mb-4">
          This Privacy Notice sets out Our practices and procedures regarding the collection, use and disclosure of your personal data and sensitive personal data when you visit, access, browse through and/or use our Services. You have control over the type of data that you make available to Us.
        </p>
        <p className="text-gray-700 border-l-4 border-red-400 pl-4 bg-red-50 p-3">
          **Note:** This notice does not apply to products, services, websites, or content offered by third parties or to job applicants/employees, whose information is subject to different privacy notices.
        </p>
      </section>

      {/* 1. General */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">1. General</h2>
        <p className="text-gray-700">
          Any changes we may make to this privacy notice in the future will be posted on this page and, where appropriate, notified to you by email. Please check back frequently to see any updates or changes to our privacy notice.
        </p>
      </section>

      {/* 2. Data that we collect from you */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">2. Data that we collect from you</h2>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
          <li>Information and content you provide;</li>
          <li>Platform credentials;</li>
          <li>Business Information;</li>
          <li>Name and email address if you sign up to receive our marketing communication;</li>
          <li>Personal data in the context of Our operation (e.g., name, gender, email address, and telephone number).</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Additional Collection Methods:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
          <li>We also collect and store data that you submit to us via email and through our contact form.</li>
          <li>
            We collect information using **cookies**. Please click <a href="https://thefifthlab.com/cookies-policy" className="text-indigo-600 hover:text-indigo-800 font-medium">here</a> to access our Cookies Policy, which explains what cookies we use on our platform, why we use them and how you can control them.
          </li>
        </ul>
      </section>

      {/* 3. The types data we may request from you are: */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">3. Types of Data We May Request and Retain</h2>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Requested From You (3):</h3>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
          <li>Contact information (name, DOB, address, email, phone, and first of kin details);</li>
          <li>Bank account details for payments;</li>
          <li>Passwords and security question answers;</li>
          <li>Financial interests, position, or loan repayment performance;</li>
          <li>Answers to questions required by third-party credit reference agencies;</li>
          <li>Information about your activities in using the Platform;</li>
          <li>Information from directors/individuals associated with your business.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Information We May Retain (3.1):</h3>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
          <li>Correspondence, registration history, and materials you post;</li>
          <li>Passports or other identification evidence for anti-money laundering and anti-fraud purposes;</li>
          <li>Records of any surveys (optional);</li>
          <li>Details of transactions you carry out and receipt/disbursement of repayments;</li>
          <li>Details of your visits to the Platform and the resources you access;</li>
          <li>(With explicit consent) Information about your physical or mental health or condition;</li>
          <li>(With explicit consent) Information relating to any criminal proceedings you have been involved in.</li>
        </ul>

        <p className="text-gray-700 mt-4">
          **3.2 Fraud Warning:** If you give us false or inaccurate information, and we suspect or identify fraud, we will record this.
        </p>
        <p className="text-gray-700 mt-2">
          **3.3 Third Parties:** We may also receive information about you from third party brokers, introducers or other referrers.
        </p>
      </section>

      {/* 4. What do we do with the information we collect from users of the Platform? */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">4. Use of Collected Information</h2>
        <p className="text-gray-700 mb-4">
          The main reason we use this information is to provide you with details about our products and services. We (or third party data processors) may also use the information where it is in our legitimate interest to do so, including to:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700 grid sm:grid-cols-2 gap-x-6">
          <li>Enable or enhance the functionalities of our systems;</li>
          <li>Contract with you and facilitate the delivery of the Services;</li>
          <li>Analyse and improve the safety and security of Our Products, Services and Online channels;</li>
          <li>Test and apply new product or system versions, patches, and updates;</li>
          <li>Improve the accuracy of our records;</li>
          <li>Contact you about products and Services we believe may be of interest;</li>
          <li>Fulfil a specific request and provide customer support;</li>
          <li>Monitor, prevent and detect fraud, enhance security, and combat spam/malware;</li>
          <li>Deliver administrative notices, alerts and communications;</li>
          <li>Verify your identity and assist with lost login/password details;</li>
          <li>Inform you about new features, troubleshoot problems, and protect against criminal activity;</li>
          <li>Prevent and detect any misuse of the Website or fraudulent activities;</li>
          <li>Meet legal requirements, including complying with court orders and subpoenas;</li>
          <li>Fulfill other purposes disclosed at the time you provide Personal Information.</li>
        </ul>
      </section>

      {/* 5. Our Principles of Data Processing */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">5. Our Principles of Data Processing</h2>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
          <li>Processed fairly, lawfully and transparently manner;</li>
          <li>Processed for a specific purpose and not incompatibly with that purpose;</li>
          <li>Adequate, relevant and limited to what is necessary;</li>
          <li>Kept accurate and, where necessary, kept up to date;</li>
          <li>Not kept for no longer than is necessary;</li>
          <li>Appropriate steps will be taken to keep your personal data secure.</li>
        </ul>
      </section>

      {/* 6. Lawful Basis for Processing Your Data */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">6. Lawful Basis for Processing Your Data</h2>
        <div className="space-y-4">
          <p className="border-l-4 border-purple-500 pl-4">
            **Consent:** If we use consent as a lawful basis, we will provide a consent form. You have the right to refuse or withdraw your consent at any time by contacting us at <a href="mailto:dpo@fifthlab.com" className="text-indigo-600 hover:text-indigo-800 font-medium">dpo@fifthlab.com</a>.
          </p>
          <p className="border-l-4 border-purple-500 pl-4">
            **Contract:** Processing is necessary for a contract you have with us or for pre-contractual steps taken at your request.
          </p>
          <p className="border-l-4 border-purple-500 pl-4">
            **Legal Obligation:** Processing is necessary where there is a statutory obligation upon us.
          </p>
          <div className="border-l-4 border-purple-500 pl-4">
            **Legitimate Interests:** Processing your data is necessary for our legitimate interests or the legitimate interests of a third party, provided your rights are not outweighed. These interests include:
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 text-sm">
              <li>Gaining insights from your behaviour (website/app);</li>
              <li>Delivering, developing and improving Our service;</li>
              <li>Enhancing, customise or modifying our services and communications;</li>
              <li>Determining whether marketing campaigns are effective;</li>
              <li>Enhancing data security.</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* 7. What constitutes consent? */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">7. What constitutes consent?</h2>
        <p className="text-gray-700 mb-4">
          We will not ask for your personal data unless we need it to provide services to you. You will be considered to have given your consent when:
        </p>
        <ul className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
          <li>You complete any form issued by FIFTHLAB requesting such personal information;</li>
          <li>You register, check or tick the acceptance box on any of our electronic platforms relating to terms and conditions of any service or product offered; and</li>
          <li>You accept the installation of cookies on your device.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          **How do I withdraw my consent?** If after you opt-in, you may withdraw your consent to the continued processing of your personal data, at any time, by contacting us at <a href="mailto:dpo@fifthlab.com" className="text-indigo-600 hover:text-indigo-800 font-medium">dpo@fifthlab.com</a>.
        </p>
      </section>
      
      {/* 8. Who do we share your information with? */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">8. Who do we share your information with?</h2>
        <p className="text-gray-700 mb-4">
          We may disclose your personal information to third parties where it is in our legitimate interest or we have a legal obligation to do so, including for the following reasons:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700 grid sm:grid-cols-2 gap-x-6">
          <li>Analytics and search engine providers;</li>
          <li>To monitor and analyse the use of our Service;</li>
          <li>Entities providing the Services (e.g., hosting, e-mail platforms);</li>
          <li>If you give your explicit consent;</li>
          <li>To complete a contract on your behalf;</li>
          <li>Persons authorized to perform technical maintenance (network equipment, etc.);</li>
          <li>Public entities, bodies or authorities for legal compliance;</li>
          <li>Persons authorised by FIFTHLAB (e.g., employees of CWG) who are under confidentiality obligations;</li>
          <li>Companies and other third parties performing services on our behalf (KYC, credit reference agencies, CRM providers);</li>
          <li>Other members of our corporate group, or a purchaser/potential purchaser of our business;</li>
          <li>Sharing of alerts derived from identity verification checks for anti-money laundering and fraud prevention;</li>
          <li>Legal obligation under existing laws and regulations.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          **8.2 Non-Sale Clause:** Save as set out in this privacy notice, we will not sell or disclose your data to any third party.
        </p>
      </section>

      {/* 9. Where we store your personal data */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">9. Where we store your personal data</h2>
        <p className="text-gray-700">
          We are committed to ensuring that your information is safe. We take all steps reasonably necessary to ensure that your data is treated securely by putting in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
        </p>
      </section>

      {/* 10. How long we keep your information */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">10. How long we keep your information</h2>
        <p className="text-gray-700">
          We will keep your data for as long as necessary to fulfil the purposes described in this privacy notice. We also retain data subject to relevant provisions of applicable laws, resolve disputes, enforce our legal agreements, or as prescribed by contract. Usage Data is generally retained for a shorter period, unless used to strengthen security or functionality, or if legally obligated for longer.
        </p>
      </section>

      {/* 11. Marketing and Communications */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">11. Marketing and Communications</h2>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
          <li>If you have registered and have not opted out, we may send you information on products, services, promotions, and special offers by phone, email and/or SMS.</li>
          <li>We will get your **express opt-in consent** before we share your personal data with any third party for marketing purposes.</li>
          <li>You can ask us or third parties to stop sending you marketing messages at any time by contacting us by email at <a href="mailto:dpo@fifthlab.com" className="text-indigo-600 hover:text-indigo-800 font-medium">dpo@fifthlab.com</a>.</li>
        </ul>
      </section>

      {/* 12. Your Rights */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">12. Your Rights</h2>
        <p className="text-gray-700 mb-3">You have the following rights:</p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
          <li>The right to request for **access** to your personal data;</li>
          <li>The right to **erasure** of your personal data (right to be forgotten);</li>
          <li>The right to **rectify or amend** inaccurate or incomplete personal data;</li>
          <li>The right to **object** to processing of your personal data;</li>
          <li>The right to **portability** of data; and</li>
          <li>The right to **lodge a complaint** with the Court, National Information Technology Development Agency (NITDA) or any other relevant supervisory authority.</li>
        </ul>
      </section>

      {/* 13. Security of Data */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">13. Security of Data</h2>
        <p className="text-gray-700 mb-2">
          We have put in place a range of administrative, technical, organisational and physical safeguards to avoid the loss, theft, misuse and unauthorised access, disclosure, alteration, and destruction of your information.
        </p>
        <p className="text-gray-700 italic border-l-4 border-yellow-400 pl-4 bg-yellow-50 p-3">
          Despite this, we cannot completely guarantee the security of any information you transmit via our Online Channels, as the internet is not an entirely secure place. We are committed to doing our best to protect you.
        </p>
      </section>

      {/* 14. International Transfer of Data */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">14. International Transfer of Data</h2>
        <p className="text-gray-700 mb-4">
          Your Personal Data may be transferred to Recipients located in several different countries. Where Personal Data is to be transferred to a country outside Nigeria, We shall put adequate measures in place to ensure the security of such Personal Data, including conducting a detailed transfer impact assessment (TIA).
        </p>
        <p className="text-gray-700 font-semibold mb-2">
          We will only transfer Personal Data out of Nigeria on one of the following conditions:
        </p>
        <ul className="list-lower-alpha list-inside ml-4 space-y-2 text-gray-700">
          <li>The consent of the Data Subject has been obtained;</li>
          <li>The transfer is necessary for the performance of a contract;</li>
          <li>The transfer is necessary to conclude a contract between Us and a third party in the interest of the Data Subject;</li>
          <li>The transfer is necessary for reason of public interest;</li>
          <li>The transfer is for the establishment, exercise or defense of legal claims;</li>
          <li>The transfer is necessary in order to protect the vital interests of the Data Subjects or other persons.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          To obtain any relevant information regarding any transfers, please contact our Data Protection Officer at <a href="mailto:dpo@fifthlab.com" className="text-indigo-600 hover:text-indigo-800 font-medium">dpo@fifthlab.com</a>.
        </p>
      </section>

      {/* 15. Remedy in the event of violation of privacy notice */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">15. Remedy in the event of violation of privacy notice</h2>
        <p className="text-gray-700 mb-4">
          Where there is any perceived violation of your rights, we shall take appropriate steps to remedy such violations. In the event of a data breach, we shall report the details of the breach to NITDA within 72 hours and will notify you immediately via email if the breach will result in risk and danger to your rights and freedoms.
        </p>
        <p className="text-gray-700 font-semibold mb-2">
          If you have any complaints, contact our Data Protection Officer.
        </p>
        <div className="border border-gray-300 p-4 rounded-md">
          <p className="font-bold">NITDA Contact Details:</p>
          <ul className="list-none space-y-1 text-gray-700 text-sm mt-1">
            <li>Tel: +234929220263, +2348168401851, +2347052420189</li>
            <li>Email: <a href="mailto:info@nitda.gov.ng" className="text-indigo-600 hover:text-indigo-800">info@nitda.gov.ng</a></li>
            <li>Website: <a href="https://www.nitda.gov.ng" className="text-indigo-600 hover:text-indigo-800">www.nitda.gov.ng</a></li>
          </ul>
        </div>
      </section>

      {/* 16. Changes to Our Privacy Notice & 17. Contacting us (Combined) */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b pb-1">16. Changes to Our Privacy Notice / 17. Contacting Us</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Changes to Notice:</h3>
        <p className="text-gray-700 mb-4">
          We may update our Privacy Notice from time to time. We will notify You of any changes by posting the new Privacy Notice on this page and via email and/or a prominent notice on Our Service, prior to the change becoming effective.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Contacting Us:</h3>
        <p className="text-gray-700">
          If you have any complaints or any questions about any aspect of this privacy notice or your information, you can contact Us by email:
          <br/>
          <a href="mailto:dpo@fifthlab.com" className="text-indigo-600 hover:text-indigo-800 font-bold text-lg">dpo@fifthlab.com</a>
        </p>
      </section>

    </div>
  );
};

export default PrivacyPolicy;