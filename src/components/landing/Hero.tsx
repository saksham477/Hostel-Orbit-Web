import { motion } from "framer-motion";
import { Smartphone, Shield, Zap, CheckCircle2, Sparkles } from "lucide-react";
import DownloadButtons from "./DownloadButtons";

const trustBadges = [
  { icon: Zap, text: "5 min setup" },
  { icon: Shield, text: "Bank-grade security" },
  { icon: CheckCircle2, text: "Works at any scale" },
];

const Hero = () => {
  return (
    <section className="relative pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 mesh-gradient -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-accent/50 to-transparent rounded-full blur-3xl -z-10 opacity-60" />
      
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/6 rounded-full blur-3xl -z-10" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-accent/70 backdrop-blur-sm text-accent-foreground text-sm font-semibold rounded-full border border-primary/15 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Now available on iOS & Android</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-display-lg lg:text-display-xl font-extrabold text-foreground leading-[1.1] mb-7 text-balance"
            >
              Smarter hostel management.{" "}
              <span className="gradient-text">Happier students.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-lg md:text-body-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              The all-in-one app for hostel owners, wardens, and students. Track expenses, 
              manage rooms, send notifications, and handle outpass requests—all from your phone.
            </motion.p>

            {/* Download Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mb-12"
            >
              <DownloadButtons />
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + index * 0.1, duration: 0.5 }}
                  className="trust-badge"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="phone-mockup">
              {/* Multiple glow layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-primary/15 to-transparent blur-[80px] rounded-full scale-110" />
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
              
              {/* Phone frame */}
              <div className="relative w-[280px] md:w-[300px] lg:w-[320px] aspect-[9/19] bg-foreground rounded-[3.5rem] p-[10px] shadow-2xl animate-float">
                {/* Screen bezel */}
                <div className="w-full h-full bg-card rounded-[2.75rem] overflow-hidden border border-border/30">
                  {/* Screen content */}
                  <div className="w-full h-full bg-gradient-to-br from-accent via-secondary to-accent flex flex-col">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-6 py-3 text-xs font-medium text-muted-foreground">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                        <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                        <div className="w-6 h-3 bg-muted-foreground/60 rounded-sm" />
                      </div>
                    </div>
                    
                    {/* App content placeholder */}
                    <div className="flex-1 flex flex-col items-center justify-center p-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5 shadow-lg">
                        <Smartphone className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-semibold text-foreground mb-1">Hostel Orbit</span>
                      <span className="text-xs text-muted-foreground text-center">Dashboard</span>
                      
                      {/* Mock UI elements */}
                      <div className="w-full mt-8 space-y-3">
                        <div className="h-10 bg-card rounded-xl w-full shadow-sm" />
                        <div className="flex gap-2">
                          <div className="h-20 bg-card rounded-xl flex-1 shadow-sm" />
                          <div className="h-20 bg-card rounded-xl flex-1 shadow-sm" />
                        </div>
                        <div className="h-24 bg-card rounded-xl w-full shadow-sm" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Dynamic island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-foreground rounded-full flex items-center justify-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div 
                animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 w-16 h-16 bg-card rounded-2xl shadow-xl flex items-center justify-center border border-border/50"
              >
                <span className="text-2xl">🔔</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [5, -5, 5], rotate: [2, -2, 2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-6 top-1/3 w-14 h-14 bg-card rounded-2xl shadow-xl flex items-center justify-center border border-border/50"
              >
                <span className="text-xl">💰</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [-3, 7, -3], rotate: [-1, 3, -1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 bottom-1/4 w-12 h-12 bg-card rounded-xl shadow-lg flex items-center justify-center border border-border/50"
              >
                <span className="text-lg">🏠</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
