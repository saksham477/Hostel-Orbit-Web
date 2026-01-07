import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import DownloadButtons from "./DownloadButtons";

const benefits = [
  "Free for hostels up to 20 rooms",
  "No credit card required",
  "Setup in under 5 minutes",
];

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" ref={ref} className="section-padding relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 mesh-gradient -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/6 rounded-full blur-3xl -z-10" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-10 md:p-16 lg:p-20 text-center max-w-4xl mx-auto border-primary/20 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tl from-primary/15 to-transparent rounded-full blur-2xl" />

          <div className="relative">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-8 shadow-lg"
            >
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </motion.div>

            <h2 className="text-heading-xl md:text-display text-foreground mb-6 text-balance">
              Ready to modernize your hostel?
            </h2>
            <p className="text-muted-foreground text-body-lg md:text-xl max-w-xl mx-auto mb-10">
              Join thousands of hostels already using Hostel Orbit. Download now and transform 
              your operations in minutes.
            </p>

            <DownloadButtons className="justify-center mb-10" variant="large" />

            {/* Benefits list */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
