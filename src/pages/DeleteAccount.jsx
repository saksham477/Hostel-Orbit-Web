import React from "react";

const DeleteAccount = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Delete Your HostelOrbit Account
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-gray-600">
          Users of <strong>HostelOrbit</strong> can request deletion of their
          account and associated personal data using the form below.
        </p>

        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Once we receive your request, your account and all related personal
          data will be permanently deleted within <strong>7 days</strong>. Some
          data may be retained for legal or security purposes for up to{" "}
          <strong>30 days</strong>.
        </p>

        <div className="mt-5 rounded-xl border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900">
          <div className="flex gap-2 items-start">
            <span className="text-lg">⚠️</span>
            <div>
              <p className="font-semibold">Identity Verification Required</p>
              <p className="mt-1">
                The legal document you upload must match the details of the
                account (name, email, or phone number). Requests with mismatched
                or unclear documents may be rejected.
              </p>
            </div>
          </div>
        </div>

        <form
          action="https://formsubmit.co/hostelorbit204@gmail.com"
          method="POST"
          encType="multipart/form-data"
          className="mt-8 space-y-5"
        >
          {/* Disable captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Email subject */}
          <input
            type="hidden"
            name="_subject"
            value="HostelOrbit - Account Deletion Request"
          />

          {/* Redirect after submit */}
          <input
            type="hidden"
            name="_next"
            value="https://hostelorbit.com/?delete_success=true"
          />

          {/* Identifier */}
          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Registered Email or Phone Number
            </label>
            <input
              type="text"
              name="identifier"
              required
              placeholder="Email or phone used in HostelOrbit"
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
            />
          </div>

          {/* Full name */}
          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Full Name (as per legal document)
            </label>
            <input
              type="text"
              name="full_name"
              required
              placeholder="Your full legal name"
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
            />
          </div>

          {/* Legal document */}
          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Upload Legal Document
            </label>
            <input
              type="file"
              name="legal_document"
              required
              accept=".jpg,.jpeg,.png,.pdf"
              className="mt-1 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-sm shadow-sm focus:outline-none"
            />
            <p className="mt-1 text-xs text-gray-500">
              Accepted formats: JPG, PNG, PDF. Max 5MB. The document must
              clearly show your name.
            </p>
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Reason (optional)
            </label>
            <textarea
              name="reason"
              rows={4}
              placeholder="Optional reason for deleting your account"
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-700 px-6 py-3 text-white text-sm font-semibold shadow-lg hover:from-indigo-700 hover:to-blue-800 transition"
          >
            Submit Deletion Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteAccount;
