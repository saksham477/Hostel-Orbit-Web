import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Orbit } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Screens", href: "#screens" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Close the menu first
    setIsOpen(false);

    // Wait for menu to close, then scroll to the target element
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Scroll to the target element with offset for fixed navbar
        const navbarHeight = 80; // Height of the navbar
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 350); // Wait for menu close animation (300ms) + small buffer
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/Logo.png"
              alt="Hostel Orbit"
              className="w-10 h-10 rounded-xl object-contain shadow-md group-hover:shadow-lg transition-shadow duration-300"
            />
            <span className="font-bold text-lg text-foreground tracking-tight">
              Hostel Orbit
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden min-[840px]:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link py-1">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Download Button - Visible from 500px to full desktop */}
            <a
              href="#download"
              className="btn-primary text-sm py-2.5 px-5 hidden min-[500px]:inline-flex"
            >
              Download App
            </a>

            {/* Mobile Menu Button - Hidden at 840px+ */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="min-[840px]:hidden p-2.5 text-foreground hover:bg-secondary rounded-xl transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="min-[840px]:hidden bg-background/95 backdrop-blur-2xl border-b border-border overflow-hidden"
          >
            <div
              className="section-container py-6 flex flex-col gap-3"
              style={{ height: "100vh" }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-foreground font-medium py-3 px-4 rounded-xl hover:bg-secondary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#download"
                onClick={(e) => handleMobileNavClick(e, "#download")}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="btn-primary text-center mt-4 max-[499px]:block hidden"
              >
                Download App
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
