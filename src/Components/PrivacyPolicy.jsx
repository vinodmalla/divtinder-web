
const APP_NAME = "divtinder";
const SUPPORT_MAIL = "mallavinod95@gmail.com";
const DOMAIN = "https://divtinder.dpdns.org";


const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-white leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4 text-white">
        This Privacy Policy (“Policy”) governs the manner in which {APP_NAME}
        (“Platform”, “We”, “Us”, “Our”) collects, uses, maintains and discloses
        information of its users (“Learners”, “You”, “Your”).
      </p>

      <p className="mb-4">
        By accessing and using the Platform available at {DOMAIN}, you consent
        to the collection, use and disclosure of information described in this
        Policy and our Terms of Use.
      </p>

      {/* 1. PERSONAL INFORMATION */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        1. Personal Information
      </h2>

      <p className="mb-3">
        “Personal Information” shall mean the information which identifies a
        Learner such as name, identification number, age, gender, location,
        photograph and phone number provided at the time of registration.
      </p>

      <p className="mb-3">
        “Sensitive Personal Information” includes passwords, financial data,
        health data, official identifiers such as Aadhaar, passport, driver’s
        license, biometric data, and any data classified as sensitive under
        applicable data protection laws.
      </p>

      {/* 2. INFORMATION WE COLLECT */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        2. Information We Collect
      </h2>

      <p className="mb-3">
        We may collect personal and non-personal information when you visit or
        use our Platform.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          Personal identifiable information such as name and email address.
        </li>
        <li>
          Non-personal information such as browser, device, operating system,
          IP address and access time.
        </li>
        <li>Cookies for improving user experience.</li>
      </ul>

      {/* 3. HOW WE USE INFORMATION */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        3. How We Use and Share Information
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>To provide access to the Platform and services.</li>
        <li>To improve our services and maintain safety.</li>
        <li>To communicate offers, updates and important notices.</li>
      </ul>

      <p className="mt-3">
        We do not sell, trade or rent your personal information to others.
      </p>

      {/* 4. YOUR CHOICES */}
      <h2 className="text-xl font-semibold mt-8 mb-3">4. Your Choices</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>You may update or delete your information.</li>
        <li>You may unsubscribe from marketing emails.</li>
        <li>You may disable cookies through your browser.</li>
      </ul>

      {/* 5. YOUR RIGHTS */}
      <h2 className="text-xl font-semibold mt-8 mb-3">5. Your Rights</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Right to access your personal information.</li>
        <li>Right to correct inaccurate information.</li>
        <li>Right to restrict or erase your information.</li>
      </ul>

      {/* 6. SECURITY */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        6. Protection of Your Information
      </h2>

      <p className="mb-3">
        We take reasonable security measures to protect your information from
        unauthorized access, alteration or disclosure.
      </p>

      {/* 7. THIRD PARTY WEBSITES */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        7. Third-Party Websites
      </h2>

      <p className="mb-3">
        We are not responsible for the privacy practices of third-party
        websites linked from our Platform.
      </p>

      {/* 8. DATA TRANSFER */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        8. Cross-Border Data Transfer
      </h2>

      <p className="mb-3">
        Your information may be stored and processed on cloud servers located
        in India or other countries where our service providers operate.
      </p>

      {/* 9. RETENTION */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        9. Data Retention
      </h2>

      <p className="mb-3">
        We retain your information only as long as necessary to fulfill the
        purposes described in this Policy.
      </p>

      {/* 10. CHANGES */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        10. Changes to this Policy
      </h2>

      <p className="mb-3">
        We may update this Privacy Policy from time to time. We encourage you
        to review this page periodically.
      </p>

      {/* 11. GRIEVANCES */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        11. Grievances / Contact Us
      </h2>

      <p>
        If you have any questions or concerns regarding this Privacy Policy,
        please contact us at{" "}
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

export default PrivacyPolicy;
