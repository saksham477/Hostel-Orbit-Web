import { MessageSquare, Lightbulb, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const FeedbackSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hostelName: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setIsSuccess(false);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/hostelorbit204@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            hostelName: formData.hostelName,
            message: formData.message,
            _subject: "New Hostel Orbit Feedback",
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      const data = await response.json();

      if (data.success === "true" || data.success === true) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          hostelName: "",
          message: "",
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="feedback" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-border bg-muted/30 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full border border-border px-4 py-1 text-sm font-medium text-muted-foreground">
                Feedback & Requests
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                Tell us what you need in Hostel Orbit
              </h2>

              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-8">
                Share your feedback, report an issue, or tell us which feature
                you want us to add next.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-primary/10 p-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Share your experience</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Let us know what’s working well and what we should
                      improve.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-primary/10 p-3">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Request a feature</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tell us what feature would help your hostel the most.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="hostelName"
                    className="mb-2 block text-sm font-medium"
                  >
                    Hostel Name
                  </label>
                  <input
                    id="hostelName"
                    type="text"
                    placeholder="Enter your hostel name"
                    value={formData.hostelName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        hostelName: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Feedback or Feature Request
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us what feature you need or what we should improve..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                    required
                  />
                </div>

                {isSuccess && (
                  <p className="text-sm text-green-600">
                    Feedback sent successfully. Thank you!
                  </p>
                )}

                {error && <p className="text-sm text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Feedback"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
