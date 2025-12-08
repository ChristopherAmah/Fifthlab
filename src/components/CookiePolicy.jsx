import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8 my-10">
      <header className="mb-8 border-b-2 border-[#00B4D8] pb-4">
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      </header>

      {/* --- 1. Introduction --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          This Cookies Notice explains what Cookies are and how We use them. You should read this Notice so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies.
        </p>
        <p className="text-gray-700">
          For further information on how We use, store and keep your personal data secure, see our Privacy Notice. We do not store sensitive personal information, such as mailing addresses, account, passwords, etc. in the Cookies We use.
        </p>
      </section>

      {/* --- 2. Interpretation and Definitions --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">2. Interpretation and Definitions</h2>
        <p className="text-gray-700 mb-4">
          Cookies are small text files that may be sent to and registered on your computer by the websites you visit, to then be re-sent to those same sites when you visit them again. It is thanks to these cookies that those websites can “remember” your actions and preferences (e.g., login data, language, font size, other display settings, etc.), so that you do not need to configure them again when you next visit the website, or when you change pages within a website.
        </p>
        <p className="text-gray-700 mb-4">
          Cookies are used for electronic authentication, monitoring of sessions, and storage of information regarding your activities when accessing a website. They may also contain a unique ID code that allows tracking of your browsing activities within a website, for statistical or advertising purposes. Some operations within a website may not be able to be performed without the use of cookies which, in certain cases, are technically necessary for the operation of the website.
        </p>
        <p className="text-gray-700 mb-4">
          When browsing a website, you may also receive cookies from websites or web servers other than the website being visited (i.e., “third-party cookies”). There are various types of cookies, depending on their characteristics and functions, which may be stored on your computer for different periods of time: “session cookies”, which are automatically deleted when you close your browser, and “persistent cookies”, which will remain on your device until their pre-set expiration period passes.
        </p>
        <p className="text-gray-700 mb-4">
          According to the law which may be applicable to you, your consent may not always be necessary for cookies to be used on a website. In particular, **“technical cookies”** – i.e. cookies which are only used to send messages through an electronic communications network, or which are needed to provide services you request – typically do not require this consent. This includes browsing or session cookies (used to allow users to login) and function cookies (used to remember choices made by a user when accessing the website, such as language or products selected for purchase).
        </p>
        <p className="text-gray-700 mb-4">
          On the other hand, **“profiling cookies”** – i.e., cookies used to create profiles on users and to send advertising messages in line with the preferences revealed by users while browsing websites – typically require specific consent from users, although this may vary according to the applicable law.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Definitions</h3>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
          <li>
            **Company** (referred to as either “the Company”, “We”, “Us” or “Our” in this Cookies Policy) refers to **FIFTHLAB, Plot 10, Joshua Ebun Ojo Off Rufus Giwa, Lekki Phase 1, Lagos Nigeria.**
          </li>
          <li>
            **Cookies** means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.
          </li>
          <li>
            **Website** refers to **FIFTHLAB**, accessible from <a href="https://thefifthlab.com/" className="text-indigo-600 hover:text-indigo-800 font-medium">https://thefifthlab.com/</a>
          </li>
          <li>
            **You** means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.
          </li>
        </ul>
      </section>

      {/* --- 3. The use of the Cookies --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">3. The use of the Cookies</h2>
        <p className="text-gray-700 mb-4">
          The Website uses the following types of cookies:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700 mb-6">
          <li>
            **Browsing or session cookies**, which are strictly necessary for the Website’s operation, and/or to allow you to use the Website’s content and Services.
          </li>
          <li>
            **Analytics cookies**, which allow Us to understand how users make use of the Website, and to track traffic to and from the Website.
          </li>
          <li>
            **Function cookies**, which are used to activate specific Website functions and to configure the Website according to your choices (e.g., language), in order to improve your experience.
          </li>
          <li>
            **Profiling cookies**, which are used to observe the preferences you reveal through your use of the Website and to send you advertising messages in line with those preferences.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          The Cookies We use are referred to as **“first-party cookies.”** and those that are used by our partners are **“third-party cookies”**. Because of how cookies work, our website cannot access third-party cookies; nor can other organisations access the data in the cookies we use on our website.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">Cookies present on the Website (First Party Cookies)</h3>
        
        {/* Cookie Table */}
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-100">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Domain Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cookie Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expiry
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Data Rows */}
              <tr className="hover:bg-gray-50"><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">thefifthlab.com</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">cf7msm_checkSession</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Session</td></tr>
              <tr className="hover:bg-gray-50"><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">thefifthlab.com</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">wplc_cid</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24 hours</td></tr>
              <tr className="hover:bg-gray-50"><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">thefifthlab.com</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">tcx_customerID</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 year</td></tr>
              <tr className="hover:bg-gray-50"><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">thefifthlab.com</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">nc_sid</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Session</td></tr>
              <tr className="hover:bg-gray-50"><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">thefifthlab.com</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">nc_status</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24 hours</td></tr>
              <tr className="hover:bg-gray-50"><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">thefifthlab.com</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">_icl_current_language...</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24 hours</td></tr>
              <tr className="hover:bg-gray-50"><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">thefifthlab.com</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">wplc_chat_status</td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24 hours</td></tr>
            </tbody>
          </table>
        </div>
        {/* End Cookie Table */}
      </section>

      {/* --- 4. How to Manage and Delete Your Cookies --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">4. How to Manage and Delete Your Cookies</h2>
        <p className="text-gray-700 mb-4">
          You can block or delete cookies used on the Website via your browser options. Your cookie preferences will be reset if different browsers are used to access the Website. For more information on how to set the preferences for cookies via your browser, please refer to the following instructions:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
          <li><a href="[Internet Explorer Link]" className="text-indigo-600 hover:text-indigo-800">Internet Explorer / Edge</a></li>
          <li><a href="[Firefox Link]" className="text-indigo-600 hover:text-indigo-800">Firefox</a></li>
          <li><a href="[Chrome Link]" className="text-indigo-600 hover:text-indigo-800">Chrome</a></li>
          <li><a href="[Safari Link]" className="text-indigo-600 hover:text-indigo-800">Safari</a></li>
        </ul>
        <blockquote className="border-l-4 border-yellow-500 bg-yellow-50 p-4 mt-6 text-yellow-800">
          <p className="font-semibold">CAUTION:</p>
          <p>If you block or delete technical and/or function cookies used by the Website, the Website may become impossible to browse, certain services or functions of the Website may become unavailable or other malfunctions may occur. In this case, you may have to modify or manually enter some information or preferences every time you visit the Website.</p>
        </blockquote>
      </section>

      {/* --- 5. Underpinning policies & procedures / Managing Cookies --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Underpinning Policies & Procedures / Managing Cookies</h2>
        <p className="text-gray-700 mb-4">
          You can block or delete cookies used on the Website via your browser options. Your cookie preferences will be reset if different browsers are used to access the Website. For more information on how to set the preferences for cookies via your browser, please refer to the following instructions:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
          <li><a href="[Internet Explorer Link]" className="text-indigo-600 hover:text-indigo-800">Internet Explorer / Edge</a></li>
          <li><a href="[Firefox Link]" className="text-indigo-600 hover:text-indigo-800">Firefox</a></li>
          <li><a href="[Chrome Link]" className="text-indigo-600 hover:text-indigo-800">Chrome</a></li>
          <li><a href="[Safari Link]" className="text-indigo-600 hover:text-indigo-800">Safari</a></li>
        </ul>
        <blockquote className="border-l-4 border-yellow-500 bg-yellow-50 p-4 mt-6 text-yellow-800">
          <p className="font-semibold">CAUTION:</p>
          <p>If you block or delete technical and/or function cookies used by the Website, the Website may become impossible to browse, certain services or functions of the Website may become unavailable or other malfunctions may occur. In this case, you may have to modify or manually enter some information or preferences every time you visit the Website.</p>
        </blockquote>
      </section>

      {/* --- 6. Withdraw Your Cookies Consent at Any Time / Contact --- */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">6. Withdraw Your Cookies Consent at Any Time</h2>
        <p className="text-gray-700 mb-4">
          If you do not wish to accept cookies in connection with your use of our website, you may delete and block or disable cookies via your browser settings. Refer to the instructions in Section 5 for guidance on how to do this.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Questions and Complaints</h3>
        <p className="text-gray-700 mb-2">
          If you have any questions or complaint about this Cookies Policy, you can contact us by email at:
          <br/>
          <a href="mailto:dpo@thefifthlab.com" className="text-indigo-600 hover:text-indigo-800 font-medium">dpo@thefifthlab.com</a>
        </p>
        <p className="text-gray-700">
          For the purpose of this Notice, the supervisory authority is the National Information Technology Development Agency (NITDA) and the complaint can be sent via email at:
          <br/>
          <a href="mailto:dpo@nitda.gov.ng" className="text-indigo-600 hover:text-indigo-800 font-medium">dpo@nitda.gov.ng</a>
        </p>
      </section>

      {/* --- 7. Approval --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">7. Approval</h2>
        <p className="text-gray-700">
          This policy has been approved by the management of Fifthlab and will be reviewed at least annually.
        </p>
      </section>

    </div>
  );
};

export default CookiePolicy;