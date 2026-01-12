import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  CheckCircle2,
  Sparkles,
  Bell,
  User2,
  Users,
  UtensilsCrossed,
  Receipt,
  ClipboardList,
  Home,
} from "lucide-react";
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
              The all-in-one app for hostel owners, wardens, and students. Track
              expenses, manage rooms, send notifications, and handle outpass
              requests—all from your phone.
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
                <div className="w-full h-full bg-card rounded-[2.75rem] overflow-hidden border border-border/30 relative">
                  {/* Screen content */}
                  <div className="w-full h-full flex flex-col bg-gradient-to-b from-accent via-secondary to-accent">
                    {/* Status bar (cleaner + more realistic) */}
                    <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[11px] font-semibold text-muted-foreground">
                      <span>9:41</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-2 rounded-sm bg-muted-foreground/40" />
                        <div className="w-4 h-2 rounded-sm bg-muted-foreground/40" />
                        <div className="w-6 h-3 rounded-sm bg-muted-foreground/50" />
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-6 pt-2 pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-primary/12 border border-primary/20 shadow-sm flex items-center justify-center">
                            <span className="text-[12px] font-black text-primary">
                              HO
                            </span>
                          </div>

                          <div className="leading-tight">
                            <p className="text-[11px] font-semibold text-muted-foreground">
                              Hostel Dashboard
                            </p>
                            <h3 className="text-sm font-extrabold text-foreground">
                              Orchid Boys Hostel
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="relative w-9 h-9 rounded-xl bg-card border border-border/60 shadow-sm flex items-center justify-center"
                            aria-label="Notifications"
                          >
                            <Bell className="w-4 h-4 text-foreground" />
                            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
                          </button>
                          <button
                            type="button"
                            className="w-9 h-9 rounded-xl bg-card border border-border/60 shadow-sm flex items-center justify-center"
                            aria-label="Profile"
                          >
                            <User2 className="w-4 h-4 text-foreground" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/15 text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Today • Live
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/70 backdrop-blur border border-border/60 text-[11px] font-semibold text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Approved
                        </div>
                      </div>
                    </div>

                    {/* Quick actions (more app-like) */}
                    <div className="px-6">
                      <div className="grid grid-cols-3 gap-2.5">
                        {[
                          { icon: Users, label: "Students" },
                          { icon: Receipt, label: "Fees" },
                          { icon: UtensilsCrossed, label: "Meals" },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="bg-card/80 backdrop-blur rounded-2xl border border-border/60 shadow-sm p-3 flex flex-col items-center gap-2"
                          >
                            <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                              <item.icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-[11px] font-semibold text-foreground">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Overview card with progress + cleaner KPIs */}
                    <div className="px-6 mt-3.5">
                      <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-extrabold text-foreground">
                            Today’s Overview
                          </p>
                          <span className="text-[11px] font-semibold text-primary">
                            View
                          </span>
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-3">
                          <div className="rounded-2xl bg-secondary/60 border border-border/40 p-3">
                            <p className="text-[10px] font-semibold text-muted-foreground">
                              Occupancy
                            </p>
                            <p className="text-base font-extrabold text-foreground leading-tight">
                              48/50
                            </p>
                            <div className="mt-2 h-1.5 rounded-full bg-border/60 overflow-hidden">
                              <div className="h-full w-[96%] bg-primary rounded-full" />
                            </div>
                          </div>

                          <div className="rounded-2xl bg-secondary/60 border border-border/40 p-3">
                            <p className="text-[10px] font-semibold text-muted-foreground">
                              Fees Due
                            </p>
                            <p className="text-base font-extrabold text-foreground leading-tight">
                              NPR 12k
                            </p>
                            <p className="text-[10px] text-muted-foreground mt-0.5">
                              6 students pending
                            </p>
                          </div>

                          <div className="rounded-2xl bg-secondary/60 border border-border/40 p-3">
                            <p className="text-[10px] font-semibold text-muted-foreground">
                              Outpass
                            </p>
                            <p className="text-base font-extrabold text-foreground leading-tight">
                              3
                            </p>
                            <p className="text-[10px] text-muted-foreground mt-0.5">
                              1 awaiting review
                            </p>
                          </div>

                          <div className="rounded-2xl bg-secondary/60 border border-border/40 p-3">
                            <p className="text-[10px] font-semibold text-muted-foreground">
                              Announcements
                            </p>
                            <p className="text-base font-extrabold text-foreground leading-tight">
                              2
                            </p>
                            <p className="text-[10px] text-muted-foreground mt-0.5">
                              sent today
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Meals card (more visual hierarchy) */}
                    <div className="px-6 mt-3.5">
                      <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                              <UtensilsCrossed className="w-4 h-4 text-primary" />
                            </div>
                            <div className="leading-tight">
                              <p className="text-xs font-extrabold text-foreground">
                                Today’s Meals
                              </p>
                              <p className="text-[11px] text-muted-foreground">
                                Schedule & attendance
                              </p>
                            </div>
                          </div>
                          <span className="text-[11px] font-semibold text-primary">
                            Manage
                          </span>
                        </div>

                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {[
                            { label: "Breakfast", time: "7:30" },
                            { label: "Lunch", time: "12:30" },
                            { label: "Dinner", time: "7:30" },
                          ].map((m) => (
                            <div
                              key={m.label}
                              className="rounded-2xl bg-secondary/60 border border-border/40 p-2.5"
                            >
                              <p className="text-[10px] font-semibold text-muted-foreground">
                                {m.label}
                              </p>
                              <p className="text-[11px] font-extrabold text-foreground mt-0.5">
                                {m.time}{" "}
                                <span className="text-[10px] font-semibold text-muted-foreground">
                                  {m.label === "Lunch" ? "PM" : "AM"}
                                </span>
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Recent activity (cleaner, more “app” feel) */}
                    <div className="px-6 mt-3.5 mb-5">
                      <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-extrabold text-foreground">
                            Recent Activity
                          </p>
                          <span className="text-[11px] font-semibold text-muted-foreground">
                            See all
                          </span>
                        </div>

                        <div className="mt-3 space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                              <ClipboardList className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1 leading-tight">
                              <p className="text-[11px] font-semibold text-foreground">
                                Outpass approved
                              </p>
                              <p className="text-[10px] text-muted-foreground">
                                Rm 203 • Sagar • 5 min ago
                              </p>
                            </div>
                            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/15">
                              Done
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-secondary/70 border border-border/50 flex items-center justify-center">
                              <Receipt className="w-4 h-4 text-foreground" />
                            </div>
                            <div className="flex-1 leading-tight">
                              <p className="text-[11px] font-semibold text-foreground">
                                Fee payment recorded
                              </p>
                              <p className="text-[10px] text-muted-foreground">
                                NPR 3,000 • Rm 105 • 18 min ago
                              </p>
                            </div>
                            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-card/70 border border-border/60 text-muted-foreground">
                              New
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom nav (icons instead of emojis) */}
                    <div className="px-6 pb-5 mt-auto">
                      <div className="bg-card/80 backdrop-blur border border-border/60 rounded-2xl shadow-sm px-4 py-3 flex items-center justify-between">
                        {[
                          { icon: Home, label: "Home", active: true },
                          { icon: Receipt, label: "Fees" },
                          { icon: UtensilsCrossed, label: "Meals" },
                          { icon: ClipboardList, label: "Outpass" },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className={`flex flex-col items-center gap-1 ${
                              item.active
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          >
                            <item.icon className="w-4 h-4" />
                            <span className="text-[10px] font-semibold">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subtle top sheen */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-40" />
                  </div>

                  {/* Dynamic island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-foreground rounded-full flex items-center justify-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                    <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  </div>
                </div>

                {/* Floating elements (keep yours) */}
                <motion.div
                  animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-8 top-1/4 w-16 h-16 bg-card rounded-2xl shadow-xl flex items-center justify-center border border-border/50"
                >
                  <span className="text-2xl">🔔</span>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5], rotate: [2, -2, 2] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -right-6 top-1/3 w-14 h-14 bg-card rounded-2xl shadow-xl flex items-center justify-center border border-border/50"
                >
                  <span className="text-xl">💰</span>
                </motion.div>

                <motion.div
                  animate={{ y: [-3, 7, -3], rotate: [-1, 3, -1] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -right-4 bottom-1/4 w-12 h-12 bg-card rounded-xl shadow-lg flex items-center justify-center border border-border/50"
                >
                  <span className="text-lg">🏠</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
