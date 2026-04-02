import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-6">Last Updated: [2026-04-01]</p>

      <p className="mb-6">
        Welcome to <strong>Hostel Orbit</strong>. These Terms of Service
        ("Terms") govern your use of our website, mobile application, and
        services (collectively, the "Platform"). By accessing or using Hostel
        Orbit, you agree to be bound by these Terms.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By using Hostel Orbit, you confirm that you have read, understood, and
          agreed to these Terms. If you do not agree, you must not use our
          Platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Services Provided</h2>
        <p className="mb-2">Hostel Orbit provides a platform for:</p>
        <ul className="list-disc ml-6">
          <li>Managing hostel operations</li>
          <li>Booking and listing hostel accommodations</li>
          <li>Connecting users (guests, hostel owners, and administrators)</li>
        </ul>
        <p className="mt-2">
          We do not own or directly manage hostels unless explicitly stated.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
        <p className="mb-2">
          To use certain features, you must create an account.
        </p>
        <ul className="list-disc ml-6">
          <li>Provide accurate and complete information</li>
          <li>Maintain the security of your account</li>
          <li>Be responsible for all activities under your account</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. User Responsibilities</h2>
        <ul className="list-disc ml-6">
          <li>Use the platform lawfully</li>
          <li>Not engage in fraudulent or harmful activities</li>
          <li>Respect other users and hostel providers</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Bookings & Payments</h2>
        <p>
          Hostel Orbit may facilitate bookings and payments. We are not
          responsible for disputes between users and hostel providers. Refund
          policies depend on individual hostel policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          6. Cancellation & Refunds
        </h2>
        <p>
          Cancellation and refund policies vary by hostel. Please review the
          hostel’s terms before booking.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
        <p>
          All content on Hostel Orbit, including logos, design, and text, is the
          property of Hostel Orbit and may not be used without permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          8. Limitation of Liability
        </h2>
        <p>
          Hostel Orbit is not liable for any damages arising from the use of the
          platform, including booking issues, service interruptions, or user
          disputes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your account if you
          violate these Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Changes to Terms</h2>
        <p>
          We may update these Terms at any time. Continued use of the platform
          means you accept the updated Terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
        <p>
          If you have any questions, contact us at:{" "}
          <span className="font-medium">[hostelorbit204.com]</span>
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
