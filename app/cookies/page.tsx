import React from 'react';

// This component serves as the Cookie Policy page for Omkar Dalvi's portfolio website.
// It uses Tailwind CSS for styling and provides details about cookie usage in a clear and concise manner.

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Page container with background and text styling */}

      <header className="max-w-2xl mx-auto text-center mb-24">
        {/* Header section with page title */}
        <h1 className="text-5xl font-bold text-orange-600 mb-4">Cookie Policy</h1>
        <p className="text-lg leading-relaxed mb-4">
            This Cookie Policy explains how cookies are used on Omkar's portfolio website. By
            using this site, you agree to the use of cookies as described below.
          </p>
      </header>

      <main className="max-w-4xl mx-auto">
        {/* Main content section with maximum width and centered layout */}

        <section className="mb-6">
          {/* Section explaining what cookies are */}
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">What Are Cookies?</h2>
          <p className="text-lg leading-relaxed">
            Cookies are small text files placed on your device to help us provide a better user
            experience. They may store preferences or track website usage.
          </p>
        </section>

        <section className="mb-6">
          {/* Section detailing types of cookies used */}
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">What Cookies Do I Use?</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            {/* Unordered list with types of cookies */}
            <li>
              <strong>Essential Cookies:</strong> These are necessary for the basic functionality
              of the website, such as navigation and access to secure areas.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> These help analyze visitor behavior and improve
              the site experience. Data is anonymized.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          {/* Section about managing cookies */}
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">How to Manage Cookies</h2>
          <p className="text-lg leading-relaxed">
            You can control or delete cookies through your browser settings. For detailed
            instructions, please visit your browser's help section. Note that disabling cookies may
            affect the functionality of this website.
          </p>
        </section>

        <section className="mb-6">
          {/* Section about changes to the policy */}
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">Changes to This Cookie Policy</h2>
          <p className="text-lg leading-relaxed">
            This Cookie Policy may be updated periodically. I encourage you to review it to stay
            informed about how cookies are used.
          </p>
        </section>
      </main>
    </div>
  );
};

export default CookiePolicy;
