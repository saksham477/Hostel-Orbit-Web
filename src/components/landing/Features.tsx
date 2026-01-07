import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Receipt,
  DoorOpen,
  Users,
  Bell,
  CreditCard,
  Search,
  FileText,
  Building2,
} from "lucide-react";

const hostelFeatures = [
  {
    icon: Receipt,
    title: "Expense Tracking",
    description: "Track all hostel expenses, generate reports, and stay on top of finances effortlessly.",
  },
  {
    icon: DoorOpen,
    title: "Room Management",
    description: "Manage room availability, allocations, and maintenance schedules with ease.",
  },
  {
    icon: Users,
    title: "Student Records",
    description: "Store and access student information, documents, and history securely in one place.",
  },
  {
    icon: CreditCard,
    title: "Payment Reminders",
    description: "Automated reminders for pending fees, reducing manual follow-up effort.",
  },
];

const studentFeatures = [
  {
    icon: Bell,
    title: "Meal Notifications",
    description: "Get notified about meal timings, menu changes, and special dietary options.",
  },
  {
    icon: Search,
    title: "Hostel Search",
    description: "Find and compare hostels based on location, amenities, reviews, and pricing.",
  },
  {
    icon: FileText,
    title: "Outpass Requests",
    description: "Submit and track outpass requests digitally—no more paper forms or delays.",
  },
  {
    icon: Building2,
    title: "Room Booking",
    description: "Browse available rooms and request allocations seamlessly through the app.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof hostelFeatures[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="feature-card group"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
        <feature.icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
      <p className="text-muted-foreground text-body-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl -z-10" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-badge mb-5">Features</span>
          <h2 className="text-heading-xl md:text-display text-foreground mb-5 text-balance">
            Everything you need in one app
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            Built for both hostel management and students, Hostel Orbit covers every aspect
            of modern hostel operations.
          </p>
        </motion.div>

        {/* For Hostels */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-heading text-foreground">For Hostels</h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hostelFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* For Students */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-heading text-foreground">For Students</h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {studentFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
