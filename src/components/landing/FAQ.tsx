import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does Hostel Orbit cost?",
    answer:
      "Hostel Orbit offers a free tier for small hostels (up to 20 rooms). For larger facilities, we have affordable monthly plans starting at ₹499/month. Contact us for enterprise pricing with custom features and dedicated support.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most hostels are up and running within 5-10 minutes. Simply download the app, create your hostel profile, add rooms, and start inviting students. No technical expertise required—if you can use a smartphone, you can use Hostel Orbit.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-grade 256-bit encryption for all data in transit and at rest. Your information is stored on secure cloud servers with automated daily backups. We're GDPR compliant and never share your data with third parties.",
  },
  {
    question: "How do meal notifications work?",
    answer:
      "Wardens or managers can schedule or send instant notifications about meals. Students receive push notifications on their phones with meal timings, menu details, or special dietary options. You can even automate recurring notifications.",
  },
  {
    question: "Can students access the app independently?",
    answer:
      "Yes! Students download the same app and join their hostel using a unique code provided by the hostel. They can view their room details, submit outpass requests, track payments, and receive notifications—all without needing admin access.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 in-app chat support, email support (response within 4 hours), and phone support during business hours (9 AM - 9 PM IST). Enterprise plans include dedicated account managers and on-site training if needed.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-background -z-10" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-5">FAQ</span>
          <h2 className="text-heading-xl md:text-display text-foreground mb-5 text-balance">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            Everything you need to know about Hostel Orbit. Can't find what you're looking for? 
            <a href="#contact" className="text-primary hover:underline ml-1">Contact us</a>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-7 border-none data-[state=open]:border-primary/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-6 text-body [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-body-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
