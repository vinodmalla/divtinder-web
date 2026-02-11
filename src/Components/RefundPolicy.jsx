import React from "react";

const APP_NAME = "divtinder";
const DOMAIN = "https://divtinder.dpdns.org";
const SUPPORT_MAIL = "mallavinod95@gmail.com";

const RefundPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-white leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">
        Refund and Cancellation Policy
      </h1>

      <p className="mb-4">
        This Refund and Cancellation Policy applies to all purchases made on
        {` ${DOMAIN}`} operated by {APP_NAME}.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        1. Cancellation
      </h2>
      <p className="mb-3">
        Users may request cancellation of a service or subscription by
        contacting us at {SUPPORT_MAIL}. Cancellation requests will be reviewed
        based on the nature of the service purchased.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        2. Refunds
      </h2>
      <p className="mb-3">
        Refunds, if applicable, will be processed after verification of the
        request. Refund eligibility depends on the type of service or product
        purchased and the stage of service delivery.
      </p>

      <p className="mb-3">
        Once approved, the refund amount will be credited to the original
        payment method used at the time of purchase.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        3. Refund Processing Time
      </h2>
      <p className="mb-3">
        Approved refunds will be processed within 7–10 business days. The
        actual time taken for the amount to reflect in your account may vary
        depending on your bank or payment provider.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        4. Non-Refundable Cases
      </h2>
      <p className="mb-3">
        Refunds may not be provided in cases where the service has already been
        fully delivered or where misuse of the Platform is identified.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        5. Contact Us
      </h2>
      <p>
        If you have any questions about our Refund and Cancellation Policy,
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

export default RefundPolicy;
