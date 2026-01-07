import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Shield, Calculator, GraduationCap, ArrowUpRight } from "lucide-react";

const benefits = [
  {
    icon: Building2,
    role: "Owner / Manager",
    description:
      "Complete visibility into operations, finances, and occupancy from anywhere. Make data-driven decisions with real-time insights.",
    color: "from-primary/15 to-primary/5",
    iconBg: "bg-primary/15",
  },
  {
    icon: Shield,
    role: "Warden",
    description:
      "Streamlined student management, instant outpass approvals, and real-time room status updates. Save hours every day.",
    color: "from-blue-500/15 to-blue-500/5",
    iconBg: "bg-blue-500/15",
  },
  {
    icon: Calculator,
    role: "Accountant",
    description:
      "Automated expense tracking, payment collection reports, and financial insights at your fingertips. No more spreadsheets.",
    color: "from-emerald-500/15 to-emerald-500/5",
    iconBg: "bg-emerald-500/15",
  },
  {
    icon: GraduationCap,
    role: "Students",
    description:
      "Easy room bookings, instant meal notifications, digital outpass requests, and transparent fee tracking. Campus life simplified.",
    color: "from-orange-500/15 to-orange-500/5",
    iconBg: "bg-orange-500/15",
  },
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-background -z-10" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-badge mb-5">Use Cases</span>
          <h2 className="text-heading-xl md:text-display text-foreground mb-5 text-balance">
            Built for everyone in the hostel ecosystem
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            Different roles, unified platform. Everyone benefits from Hostel Orbit.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" ref={ref}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.role}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card p-7 relative overflow-hidden group cursor-pointer`}
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Arrow indicator */}
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </div>

              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl ${benefit.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <benefit.icon className="w-8 h-8 text-foreground/70" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{benefit.role}</h3>
                <p className="text-muted-foreground text-body-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
