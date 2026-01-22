import {
  Receipt,
  DoorOpen,
  Users,
  Bell,
  CreditCard,
  Search,
  FileText,
  Building2,
  Shield,
  Calculator,
  GraduationCap,
  Building,
  Settings,
} from "lucide-react";

export const benefits = [
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

export const faqs = [
  {
    question: "How much does Hostel Orbit cost?",
    answer:
      "Hostel Orbit includes a 1-month free plan (trial). After the free month, the subscription is NPR 6,000 per hostel per year as of the launch offer.",
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
      "Wardens or managers can schedule or send instant notifications about meals. Students receive push notifications on their phones with meal timings, menu details, or special dietary options.",
  },
  {
    question: "Can students access the app independently?",
    answer:
      "Yes! Students download the same app and join their hostel using a unique code provided by the hostel. They can view their room details, submit outpass requests, track payments, and receive notifications—all without needing admin access.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 in-app chat support, email support (response within 4 hours), and phone support during business hours. Enterprise plans include dedicated account managers and on-site training if needed.",
  },
];

export const hostelFeatures = [
  {
    icon: Receipt,
    title: "Expense Tracking",
    description:
      "Track all hostel expenses, generate reports, and stay on top of finances effortlessly.",
  },
  {
    icon: DoorOpen,
    title: "Room Management",
    description:
      "Manage room availability, allocations, and maintenance schedules with ease.",
  },
  {
    icon: Users,
    title: "Student Records",
    description:
      "Store and access student information, documents, and history securely in one place.",
  },
  {
    icon: CreditCard,
    title: "Payment Reminders",
    description:
      "Automated reminders for pending fees, reducing manual follow-up effort.",
  },
];

export const studentFeatures = [
  {
    icon: Bell,
    title: "Meal Notifications",
    description:
      "Get notified about meal timings, menu changes, and special dietary options.",
  },
  {
    icon: Search,
    title: "Hostel Search",
    description:
      "Find and compare hostels based on location, amenities, reviews, and pricing.",
  },
  {
    icon: FileText,
    title: "Outpass Requests",
    description:
      "Submit and track outpass requests digitally—no more paper forms or delays.",
  },
  {
    icon: Building2,
    title: "Room Booking",
    description:
      "Browse available rooms and request allocations seamlessly through the app.",
  },
];

export const steps = [
  {
    number: "01",
    icon: Building,
    title: "Add hostel & rooms",
    description:
      "Set up your hostel profile, add rooms with details, and configure amenities. Takes just 5 minutes.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    number: "02",
    icon: Settings,
    title: "Manage students & expenses",
    description:
      "Add students, assign rooms, track payments, and log all expenses. Everything stays beautifully organized.",
    color: "from-primary/20 to-primary/5",
  },
  {
    number: "03",
    icon: Bell,
    title: "Notify, remind & handle outpass",
    description:
      "Send meal notifications, automated payment reminders, and process outpass requests digitally.",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
];

export const problems = [
  "Tracking expenses manually in spreadsheets",
  "Chasing students for overdue payments",
  "Managing room availability on paper",
  "No way to notify students instantly",
];

export const solutions = [
  "Automated expense tracking & reports",
  "Smart payment reminders via app",
  "Real-time room management dashboard",
  "Instant meal & announcement notifications",
];

export const testimonials = [
  {
    quote:
      "Hostel Orbit transformed how we manage our 200-bed facility. What used to take hours now takes minutes. The ROI was immediate.",
    author: "Rabin Khadka",
    role: "Hostel Owner",
    location: "Sinamangal",
    rating: 5,
    image: "RK",
  },
  {
    quote:
      "The outpass feature alone saved us countless hours. Students love the transparency and speed. Parents appreciate the updates too.",
    author: "Pujan Shrestha",
    role: "Warden",
    location: "Baneshwor",
    rating: 5,
    image: "PS",
  },
  {
    quote:
      "Finally, an app that understands hostel operations. Clean interface, powerful features, responsive support. Highly recommended.",
    author: "Mohan Adhikari",
    role: "Operations Manager",
    location: "Tinkune",
    rating: 5,
    image: "MA",
  },
];

export const ss = [
  "/one.jpeg",
  "/two.jpeg",
  "/three.jpeg",
  "/four.jpeg",
  "/five.jpeg",
  "/six.jpeg",
];
