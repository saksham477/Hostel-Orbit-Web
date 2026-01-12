import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#faq" },
    { label: "FAQ", href: "#faq" },
  ],
};

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-foreground text-background relative overflow-hidden"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container py-10 md:py-15">
        <div className="flex justify-center gap-10">
          <div>
            <a
              href="#"
              className="flex items-center justify-center gap-3 mb-6 group"
            >
              <div className="w-11 h-11 rounded-xl bg-background overflow-hidden shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300">
                <img
                  src="/Logo.png"
                  alt="Hostel Orbit"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="font-bold text-xl tracking-tight">
                Hostel Orbit
              </span>
            </a>

            <p className="text-background/60 text-body-sm mb-8 max-w-xs leading-relaxed text-center">
              Smarter hostel management. Happier students. The all-in-one app
              for modern hostels across Nepal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Brand + Contact */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="space-y-4">
              <a
                href="mailto:hostelhorbit204@gmail.com"
                className="flex items-center gap-3 text-background/60 hover:text-background transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/15 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">hostelhorbit204@gmail.com</span>
              </a>

              <a
                href="tel:+9779761805818"
                className="flex items-center gap-3 text-background/60 hover:text-background transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/15 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+977 9761805818</span>
              </a>

              <div className="flex items-center gap-3 text-background/60">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Kathmandu, Nepal</span>
              </div>

              {/* Socials: Facebook + Instagram */}
              <div className="flex items-center gap-3">
                {[
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/profile.php?id=61586507724223",
                    icon: (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.097 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.03 1.792-4.707 4.533-4.707 1.312 0 2.686.236 2.686.236v2.975h-1.512c-1.49 0-1.953.93-1.953 1.887v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.097 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/hostelorbit/",
                    icon: (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-semibold text-sm mb-6 text-background/80">
              Product
            </h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Hostel Orbit. All rights reserved.
          </p>
          <a
            href="https://bleedingtech.com.np"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-background/40 text-sm">
              Design and Developed by{" "}
              <span className="text-primary">Bleeding Tech Pvt. Ltd.</span>
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
