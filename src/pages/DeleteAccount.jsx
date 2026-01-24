import React, { useState } from "react";

const DeleteAccount = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle popup OK click
  const handleOk = () => {
    setShowSuccess(false);
    window.location.href = "/"; // Redirect to homepage
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Delete Your HostelOrbit Account
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-gray-600 text-center">
          Request deletion of your account and all associated personal data. Your data will be permanently deleted within <strong>7 days</strong>, but some information may be retained for legal purposes for up to <strong>30 days</strong>.
        </p>

        <div className="mt-6 rounded-xl border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-900 flex gap-3 items-start">
          <span className="text-2xl">⚠️</span>
          <div>
            <p className="font-semibold">Identity Verification Required</p>
            <p className="mt-1 text-gray-700">
              Upload a legal document matching your account details. Requests with unclear or mismatched documents may be rejected.
            </p>
          </div>
        </div>

        <form
          action="https://formsubmit.co/hostelorbit204@gmail.com"
          method="POST"
          encType="multipart/form-data"
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setShowSuccess(true); // Show success popup instead of redirect
          }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="HostelOrbit - Account Deletion Request" />
          <input type="hidden" name="_next" value="https://hostelorbit.com" />

          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Registered Email or Phone Number
            </label>
            <input
              type="text"
              name="identifier"
              required
              placeholder="Email or phone used in HostelOrbit"
              className="mt-1 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Full Name (as per legal document)
            </label>
            <input
              type="text"
              name="full_name"
              required
              placeholder="Your full legal name"
              className="mt-1 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Upload Legal Document
            </label>
            <input
              type="file"
              name="legal_document"
              required
              accept=".jpg,.jpeg,.png,.pdf"
              className="mt-1 w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-2 text-sm shadow-sm focus:outline-none"
            />
            <p className="mt-1 text-xs text-gray-500">
              Accepted formats: JPG, PNG, PDF. Max 5MB. Must clearly show your name.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800">
              Reason (optional)
            </label>
            <textarea
              name="reason"
              rows={4}
              placeholder="Optional reason for deleting your account"
              className="mt-1 w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
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

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Request Sent ✅</h2>
            <p className="text-gray-700 mb-6">
              Your account deletion request has been successfully sent. You will be contacted via email.
            </p>
            <button
              onClick={handleOk}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-semibold hover:from-indigo-700 hover:to-blue-800 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
