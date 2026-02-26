interface PricingTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    title: "Single Hostel",
    price: "Rs. 10,000 / year",
    description: "Simple yearly pricing for one hostel.",
    features: [
      "Annual subscription for 1 hostel",
      "Full hostel management features",
      "Easy onboarding and support",
      "Best for single-hostel owners",
    ],
  },
  {
    title: "Multiple Hostels",
    price: "Rs. 10,000 for first hostel + Rs. 7,500 / additional hostel / year",
    description:
      "Discounted yearly pricing for owners managing more than one hostel.",
    features: [
      "First hostel costs Rs. 10,000 per year",
      "Each additional hostel costs Rs. 7,500 per year",
      "Lower cost as you add more hostels",
      "Best for growing hostel businesses",
    ],
    highlighted: true,
  },
  {
    title: "Custom Support",
    price: "Included",
    description: "We help you get started smoothly with your yearly plan.",
    features: [
      "Setup guidance",
      "Onboarding assistance",
      "Product support",
      "Help for your team when needed",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full border border-border px-4 py-1 text-sm font-medium text-muted-foreground">
            Pricing
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Simple yearly pricing for every hostel owner
          </h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Hostel Orbit costs Rs. 10,000 per hostel per year. If you manage
            multiple hostels, each hostel is billed separately with the same
            simple annual pricing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={`rounded-2xl border p-8 shadow-sm transition-all ${
                tier.highlighted
                  ? "border-primary bg-primary/5"
                  : "border-border bg-background"
              }`}
            >
              {tier.highlighted && (
                <div className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold">{tier.title}</h3>

              <div className="mt-4 text-2xl md:text-3xl font-bold">
                {tier.price}
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                {tier.description}
              </p>

              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:bg-muted"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          One simple annual subscription: Rs. 10,000 per hostel per year.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
