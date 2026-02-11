import React from "react";

const APP_NAME = "divtinder";
const DOMAIN = "https://divtinder.dpdns.org";
const SUPPORT_MAIL = "mallavinod95@gmail.com";

const TermsAndConditions = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-white leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        These Terms and Conditions ("Terms") govern your access to and use of the
        website and services provided by {APP_NAME} ("we", "our", "us") through
        {` ${DOMAIN}`} (the "Platform").
      </p>

      <p className="mb-4">
        By accessing or using the Platform, you agree to be bound by these Terms.
        If you do not agree with any part of these Terms, you must not use the
        Platform.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        1. Use of the Platform
      </h2>
      <p className="mb-3">
        You agree to use the Platform only for lawful purposes and in a manner
        that does not violate any applicable laws or regulations.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        2. User Account
      </h2>
      <p className="mb-3">
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activities that occur under your account.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        3. Payments
      </h2>
      <p className="mb-3">
        If you purchase any services or products on the Platform, you agree to
        provide accurate payment information and authorize us to process your
        payments through our payment service providers.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        4. Intellectual Property
      </h2>
      <p className="mb-3">
        All content, design, logos and materials available on the Platform are
        the property of {APP_NAME} or its licensors and are protected under
        applicable intellectual property laws.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        5. Prohibited Activities
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Using the Platform for illegal or unauthorized purposes.</li>
        <li>Attempting to gain unauthorized access to any part of the Platform.</li>
        <li>Uploading or transmitting harmful or malicious content.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        6. Limitation of Liability
      </h2>
      <p className="mb-3">
        To the maximum extent permitted by law, {APP_NAME} shall not be liable
        for any indirect, incidental, special or consequential damages arising
        out of or related to your use of the Platform.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        7. Termination
      </h2>
      <p className="mb-3">
        We reserve the right to suspend or terminate your access to the Platform
        at any time if you violate these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        8. Changes to the Terms
      </h2>
      <p className="mb-3">
        We may update these Terms from time to time. Continued use of the
        Platform after changes means you accept the updated Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        9. Contact Information
      </h2>
      <p>
        If you have any questions regarding these Terms, please contact us at{" "}
        <a
          href={`mailto:${SUPPORT_MAIL}`}
          className="text-blue-600 underline"
        >
          {SUPPORT_MAIL}
        </a>
        .
      </p>
    </div>
  );
};

export default TermsAndConditions;
