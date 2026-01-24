import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DeleteAccountSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fromRedirect = params.get("delete_success") === "true";
    const allowed = sessionStorage.getItem("delete_allowed") === "true";

    // Allow only if came from form redirect OR session flag exists
    if (!fromRedirect && !allowed) {
      navigate("/", { replace: true });
      return;
    }

    // Clean the URL (remove query param if present)
    if (fromRedirect) {
      sessionStorage.setItem("delete_allowed", "true");
      navigate("/delete-account-success", { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 border border-gray-100 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <span className="text-3xl">✅</span>
        </div>

        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          Request Submitted
        </h1>

        <p className="mt-3 text-gray-700 text-sm leading-relaxed">
          Your account deletion request has been received successfully.
        </p>

        <p className="mt-2 text-gray-700 text-sm">
          We will process it within <strong>7 days</strong>.
        </p>

        <p className="mt-3 text-xs text-gray-500">
          If we need verification, we will contact you via email.
        </p>

        <p className="mt-2 text-xs text-gray-500">
          Support: <strong>hostelorbit204@gmail.com</strong>
        </p>

        <button
          onClick={() => {
            sessionStorage.removeItem("delete_allowed");
            navigate("/");
          }}
          className="mt-6 w-full rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountSuccess;
