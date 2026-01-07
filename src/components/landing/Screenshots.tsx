import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ss } from "../../data/data";


const Screenshots = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="screens" ref={ref} className="section-padding overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50 -z-10" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-5">App Preview</span>
          <h2 className="text-heading-xl md:text-display text-foreground mb-5 text-balance">
            Beautiful & intuitive interface
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            Designed for simplicity, built for power. Every screen is crafted for maximum efficiency.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative" style={{ margin: "20px 0" }}>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 mt-5 overflow-x-auto snap-x snap-mandatory px-8 md:px-16 lg:px-24 pb-8 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ss.map((screen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 snap-center group"
            >
              {/* Phone mockup */}
              <div className="relative">
                <div className="w-52 md:w-60 lg:w-64 aspect-[9/19] bg-foreground rounded-[2.5rem] p-[8px] shadow-2xl group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:-translate-y-2">
                  <div className="w-full h-full bg-card rounded-[2rem] overflow-hidden relative">
                    {/* Screen content */}
                    <img
                      src={screen}
                      alt={`Hostel Orbit App Screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Dynamic island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
