import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building, Settings, Bell, ArrowRight } from "lucide-react";
import { steps } from "../../data/data";


const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/30 to-background -z-10" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-badge mb-5">How It Works</span>
          <h2 className="text-heading-xl md:text-display text-foreground mb-5 text-balance">
            Get started in 3 simple steps
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            From download to full operation in under 10 minutes. No training required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-20 left-full items-center w-full -translate-x-8 z-10">
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-border to-transparent" />
                  <ArrowRight className="w-4 h-4 text-muted-foreground/40" />
                </div>
              )}

              <div className={`glass-card p-8 md:p-10 text-center relative overflow-hidden h-full transition-all duration-500 group-hover:border-primary/20`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Step number badge */}
                <motion.span 
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                  className="absolute top-4 right-4 text-xs font-bold px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg"
                >
                  Step {step.number}
                </motion.span>

                <div className="relative mt-4">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent to-accent/30 flex items-center justify-center mx-auto mb-7 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-body-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
