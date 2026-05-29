// Central business + content data for ShaktiFit Arena

export const business = {
  name: "ShaktiFit Arena",
  tagline: "Train Smarter. Get Stronger. Become Unstoppable.",
  location: "Sector 62, Noida, Uttar Pradesh, India",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  email: "info@shaktifitarena.com",
  emergency: "+91 98765 00000",
  owner: "Raj Malhotra",
  founded: 2018,
  hours: [
    { day: "Mon – Fri", time: "5:00 AM – 11:00 PM" },
    { day: "Saturday", time: "6:00 AM – 10:00 PM" },
    { day: "Sunday", time: "6:00 AM – 9:00 PM" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Sector%2062%20Noida%20Uttar%20Pradesh&output=embed",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};

const U = "https://images.unsplash.com/photo-";
const img = (id: string, w = 1200) => `${U}${id}?auto=format&fit=crop&w=${w}&q=80`;

// Verified-loading Unsplash fitness photo IDs
const IDS = [
  "1517836357463-d25dfeac3438",
  "1534438327276-14e5300c3a48",
  "1571019613454-1cb2f99b2d8b",
  "1581009146145-b5ef050c2e1e",
  "1534258936925-c58bed479fcb",
  "1540497077202-7c8a3999166f",
  "1546483875-ad9014c88eba",
  "1571902943202-507ec2618e8f",
  "1599058917212-d750089bc07e",
  "1605296867304-46d5465a13f1",
  "1583454110551-21f2fa2afe61",
  "1574680096145-d05b474e2155",
  "1532384748853-8f54a8f476e2",
  "1549060279-7e168fcee0c2",
  "1518611012118-696072aa579a",
  "1434608519344-49d77a699e1d",
  "1517838277536-f5f99be501cd",
  "1576678927484-cc907957088c",
  "1594381898411-846e7d193883",
  "1554344728-77cf90d9ed26",
  "1550345332-09e3ac987658",
  "1593079831268-3381b0db4a77",
  "1584735935682-2f2b69dff9d2",
  "1538805060514-97d9cc17730c",
  "1566241142559-40e1dab266c6",
  "1579126038374-6064e9370f0f",
  "1518310383802-640c2de311b2",
  "1526506118085-60ce8714f8c5",
  "1561214115-f2f134cc4912",
  "1544367567-0f2fcb009e0b",
  "1506126613408-eca07ce68773",
  "1575052814086-f385e2e2ad1b",
  "1541534741688-6078c6bfb5c5",
  "1571731956672-f2b94d7dd0cb",
  "1607962837359-5e7e89f86776",
  "1591258370814-01609b341790",
  "1530822847156-5df684ec5ee1",
  "1597347316205-36f6c451902a",
  "1596357395217-80de13130e92",
  "1601422407692-ec4eeec1d9b3",
  "1556817411-31ae72fa3ea0",
  "1535743686920-55e4145369b9",
  "1593476550610-87baa860004a",
  "1517963879433-6ad2b056d712",
  "1558611848-73f7eb4001a1",
  "1574680178050-55c6a6a96e0a",
  "1623874514711-0f321325f318",
  "1620188467120-5042ed1eb5da",
  "1517130038641-a774d04afb3c",
  "1598971639058-fab3c3109a00",
];

export const photo = (i: number, w = 1200) => img(IDS[i % IDS.length], w);

export const heroImage = img("1534438327276-14e5300c3a48", 1920);

const galleryCats = [
  "Gym Interior",
  "Equipment",
  "Training Sessions",
  "Group Classes",
  "Transformations",
  "Events",
] as const;

export const galleryCategories = ["All", ...galleryCats] as const;

export const galleryImages = IDS.map((id, i) => ({
  src: img(id, 900),
  alt: `ShaktiFit Arena ${galleryCats[i % galleryCats.length]} — photo ${i + 1}`,
  category: galleryCats[i % galleryCats.length],
  tall: i % 3 === 0,
}));

export const stats = [
  { value: 5000, suffix: "+", label: "Active Members" },
  { value: 15, suffix: "+", label: "Expert Trainers" },
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
];

export const coreValues = [
  { icon: "Target", title: "Results First", desc: "Every program is measured, tracked and optimised for real, visible progress." },
  { icon: "ShieldCheck", title: "Train Safe", desc: "Certified coaching and meticulous form so you build strength without injury." },
  { icon: "Users", title: "Community", desc: "A supportive, motivating tribe that shows up and pushes you to be better." },
  { icon: "Sparkles", title: "Excellence", desc: "Premium equipment, spotless spaces and an experience worthy of your goals." },
];

export const timeline = [
  { year: "2018", title: "Founded", desc: "ShaktiFit Arena opens in Sector 62, Noida with a vision for premium fitness." },
  { year: "2020", title: "1000 Members", desc: "Crossed our first thousand members and launched personal coaching." },
  { year: "2022", title: "Facility Expansion", desc: "Doubled our floor with a CrossFit box, yoga studio and recovery zone." },
  { year: "2025", title: "5000+ Members", desc: "Now India's premium fitness destination with elite trainers and tech." },
];

export const whyChooseUs = [
  { icon: "Award", title: "Certified Trainers", desc: "Internationally certified coaches who design science-backed programs around you." },
  { icon: "UserCog", title: "Personalized Coaching", desc: "One-on-one plans tailored to your body, lifestyle and transformation goals." },
  { icon: "Dumbbell", title: "Modern Equipment", desc: "Imported strength machines, Olympic platforms and premium free weights." },
  { icon: "Apple", title: "Nutrition Guidance", desc: "Custom diet plans and ongoing nutrition support to fuel real results." },
  { icon: "Users", title: "Group Classes", desc: "60+ weekly classes — HIIT, yoga, strength and functional energy sessions." },
  { icon: "CalendarCheck", title: "Flexible Memberships", desc: "Monthly, quarterly and annual plans with no hidden fees. Cancel anytime." },
];

export const programs = [
  {
    name: "Fat Loss Transformation",
    desc: "Sustainable fat loss with metabolic conditioning, smart cardio and nutrition.",
    overview: "A structured 12-week system combining HIIT, strength and nutrition to strip fat while preserving lean muscle.",
    benefits: ["Up to 8–12 kg fat loss", "Weekly progress tracking", "Custom meal plans"],
    img: photo(5),
    level: "All Levels",
    duration: "12 weeks",
  },
  {
    name: "Muscle Building",
    desc: "Hypertrophy programming to add quality size and sculpt a powerful physique.",
    overview: "Progressive overload split routines engineered for maximum muscle growth with recovery built in.",
    benefits: ["Lean mass gains", "Periodised splits", "High-protein nutrition"],
    img: photo(1),
    level: "Intermediate",
    duration: "16 weeks",
  },
  {
    name: "Strength Training",
    desc: "Build raw power on the big lifts with expert platform coaching.",
    overview: "Powerlifting-focused programming to drive your squat, bench and deadlift to new PRs safely.",
    benefits: ["Big-3 strength gains", "Technique coaching", "Auto-regulated loading"],
    img: photo(0),
    level: "All Levels",
    duration: "12 weeks",
  },
  {
    name: "Athletic Performance",
    desc: "Speed, power and agility training for athletes and weekend warriors.",
    overview: "Sport-specific conditioning to improve explosiveness, mobility and on-field performance.",
    benefits: ["Speed & power", "Injury prevention", "Performance testing"],
    img: photo(34),
    level: "Advanced",
    duration: "10 weeks",
  },
  {
    name: "Functional Fitness",
    desc: "Move better in daily life with rigs, kettlebells, ropes and sleds.",
    overview: "Full-body functional circuits that build real-world strength, balance and endurance.",
    benefits: ["Total-body strength", "Better mobility", "Group energy"],
    img: photo(3),
    level: "All Levels",
    duration: "8 weeks",
  },
  {
    name: "Senior Wellness",
    desc: "Safe, low-impact training for strength, balance and longevity.",
    overview: "Gentle, supervised sessions designed for older adults to stay strong, mobile and independent.",
    benefits: ["Joint-friendly", "Balance & posture", "Supervised coaching"],
    img: photo(30),
    level: "Beginner",
    duration: "Ongoing",
  },
];

export const facilities = [
  { name: "Strength Zone", desc: "Olympic platforms, racks and a full free-weight floor.", img: photo(0), icon: "Dumbbell" },
  { name: "Cardio Zone", desc: "Connected treadmills, rowers, bikes and stair climbers.", img: photo(11), icon: "HeartPulse" },
  { name: "CrossFit Area", desc: "Dedicated box with rigs, boxes, ropes and bumper plates.", img: photo(3), icon: "Activity" },
  { name: "Functional Training", desc: "Turf track, kettlebells, sleds and battle ropes.", img: photo(33), icon: "Zap" },
  { name: "Yoga Studio", desc: "Serene heated studio for yoga, mobility and breathwork.", img: photo(30), icon: "Flower2" },
  { name: "Recovery Area", desc: "Ice bath, percussion therapy and physio support.", img: photo(43), icon: "Waves" },
  { name: "Locker Rooms", desc: "Premium changing rooms, showers and digital lockers.", img: photo(14), icon: "Lock" },
  { name: "Steam Room", desc: "Relaxing steam and sauna to unwind after every session.", img: photo(31), icon: "Droplets" },
  { name: "Personal Training Area", desc: "Private floor for focused one-on-one coaching.", img: photo(19), icon: "UserCog" },
];

export const trainers = [
  {
    name: "Arjun Mehta",
    role: "Head Strength Coach",
    img: photo(13),
    experience: "12+ yrs",
    certs: ["NSCA-CSCS", "Precision Nutrition L2"],
    specialties: ["Powerlifting", "Hypertrophy", "Athlete Prep"],
  },
  {
    name: "Priya Nair",
    role: "Functional & HIIT Specialist",
    img: photo(18),
    experience: "9+ yrs",
    certs: ["ACE-CPT", "TRX Certified"],
    specialties: ["Fat Loss", "Conditioning", "Mobility"],
  },
  {
    name: "Vikram Singh",
    role: "Performance Coach",
    img: photo(34),
    experience: "10+ yrs",
    certs: ["ISSA Elite", "FMS Level 2"],
    specialties: ["Sports Performance", "Strength", "Rehab"],
  },
  {
    name: "Ananya Sharma",
    role: "Yoga & Wellness Lead",
    img: photo(30),
    experience: "8+ yrs",
    certs: ["RYT-500", "Breathwork Coach"],
    specialties: ["Power Yoga", "Flexibility", "Mindfulness"],
  },
  {
    name: "Rohan Kapoor",
    role: "Personal Training Director",
    img: photo(24),
    experience: "11+ yrs",
    certs: ["NASM-CPT", "CES"],
    specialties: ["Transformation", "Nutrition", "Posture"],
  },
  {
    name: "Sneha Reddy",
    role: "Group Fitness Coach",
    img: photo(19),
    experience: "7+ yrs",
    certs: ["ACE Group Fitness", "Zumba Pro"],
    specialties: ["Group Energy", "Cardio", "Endurance"],
  },
];

// Membership plans with monthly / quarterly / annual pricing
export type BillingCycle = "monthly" | "quarterly" | "annual";

export const plans = [
  {
    name: "Basic",
    tagline: "Start your journey",
    popular: false,
    price: { monthly: 1999, quarterly: 5399, annual: 18999 },
    features: [
      { label: "Full gym floor access", on: true },
      { label: "Cardio & strength zones", on: true },
      { label: "Locker room access", on: true },
      { label: "2 group classes / week", on: true },
      { label: "Personal training sessions", on: false },
      { label: "Recovery & sauna access", on: false },
      { label: "Nutrition consultation", on: false },
    ],
  },
  {
    name: "Pro",
    tagline: "Most popular",
    popular: true,
    price: { monthly: 3499, quarterly: 9499, annual: 33999 },
    features: [
      { label: "Full gym floor access", on: true },
      { label: "Cardio & strength zones", on: true },
      { label: "Locker room access", on: true },
      { label: "Unlimited group classes", on: true },
      { label: "4 personal training / month", on: true },
      { label: "Recovery & sauna access", on: true },
      { label: "Nutrition consultation", on: false },
    ],
  },
  {
    name: "Elite",
    tagline: "The complete experience",
    popular: false,
    price: { monthly: 5999, quarterly: 16499, annual: 59999 },
    features: [
      { label: "Full gym floor access", on: true },
      { label: "Cardio & strength zones", on: true },
      { label: "Premium locker + towel service", on: true },
      { label: "Unlimited group classes", on: true },
      { label: "Unlimited personal training", on: true },
      { label: "Recovery & sauna access", on: true },
      { label: "Custom nutrition plan", on: true },
    ],
  },
];

export const comparisonFeatures = [
  "Full gym floor access",
  "Group classes",
  "Personal training",
  "Recovery & sauna",
  "Nutrition consultation",
  "Towel & locker service",
  "Guest passes / month",
];

export const comparison = [
  { feature: "Full gym floor access", basic: true, pro: true, elite: true },
  { feature: "Group classes", basic: "2 / week", pro: "Unlimited", elite: "Unlimited" },
  { feature: "Personal training", basic: false, pro: "4 / month", elite: "Unlimited" },
  { feature: "Recovery & sauna", basic: false, pro: true, elite: true },
  { feature: "Nutrition consultation", basic: false, pro: false, elite: "Custom plan" },
  { feature: "Towel & locker service", basic: "Locker", pro: "Locker", elite: "Premium" },
  { feature: "Guest passes / month", basic: "0", pro: "2", elite: "5" },
];

export const transformations = [
  { name: "Aditya Verma", result: "−14 kg in 5 months", goal: "Fat Loss", before: photo(8), after: photo(34), quote: "The coaches tracked everything and adjusted my plan weekly. Life-changing." },
  { name: "Karan Malhotra", result: "+9 kg lean muscle", goal: "Muscle Gain", before: photo(40), after: photo(13), quote: "Deadlift went from 80kg to 150kg with zero injuries. Incredible coaching." },
  { name: "Meera Joshi", result: "−11 kg, toned", goal: "Transformation", before: photo(25), after: photo(18), quote: "I finally feel strong and confident. The community kept me consistent." },
  { name: "Sahil Khanna", result: "Marathon ready", goal: "Performance", before: photo(36), after: photo(34), quote: "Performance coaching prepped me perfectly for my first marathon." },
];

export const testimonials = [
  { name: "Aditya Verma", role: "Software Engineer", rating: 5, text: "Lost 14 kg in 5 months. The coaches actually track your progress and adjust everything. Best gym in Noida, hands down.", img: photo(6) },
  { name: "Meera Joshi", role: "Entrepreneur", rating: 5, text: "The yoga studio and recovery area are world-class. It genuinely feels like a premium wellness club, not just a gym.", img: photo(18) },
  { name: "Karan Malhotra", role: "Marketing Lead", rating: 5, text: "Personal training transformed my strength. Deadlift went from 80kg to 150kg with zero injuries.", img: photo(34) },
  { name: "Divya Rao", role: "Doctor", rating: 5, text: "Clean, spacious and never overcrowded. The functional zone is my favourite. Worth every rupee.", img: photo(19) },
  { name: "Sahil Khanna", role: "Athlete", rating: 5, text: "Professional setup for serious training. The performance coaching helped me prep for my marathon perfectly.", img: photo(24) },
  { name: "Neha Gupta", role: "Designer", rating: 5, text: "Group classes are addictive and the trainers remember your name and goals. Such a motivating community.", img: photo(30) },
  { name: "Rahul Sethi", role: "Banker", rating: 5, text: "The Elite plan is worth every rupee — unlimited PT and recovery has me in the best shape of my life.", img: photo(13) },
  { name: "Ishita Bose", role: "Architect", rating: 5, text: "From nutrition to training, everything is personalised. I've never been this consistent before.", img: photo(25) },
  { name: "Aman Khurana", role: "Consultant", rating: 5, text: "Hygiene and equipment quality are top-notch. Feels like a 5-star fitness club in the heart of Noida.", img: photo(40) },
  { name: "Pooja Nair", role: "Teacher", rating: 5, text: "The senior wellness sessions helped my mother regain strength and confidence. Truly caring coaches.", img: photo(18) },
];

export const faqs = [
  { q: "What membership plans do you offer?", a: "We offer Basic, Pro and Elite plans billed monthly, quarterly or annually. Each step up adds group classes, personal training, recovery access and nutrition support. You can upgrade anytime." },
  { q: "Are personal trainers available?", a: "Yes. We have 15+ internationally certified trainers. Personal training is included in Pro (4 sessions/month) and unlimited in Elite, with custom 1-on-1 coaching for every goal." },
  { q: "Do you offer trial sessions?", a: "Absolutely. Book a free trial session and tour the facility before joining — no pressure, no commitment. Just reach out via the contact form or WhatsApp." },
  { q: "Do you provide diet and nutrition plans?", a: "Yes. Nutrition guidance is part of our coaching. Elite members receive a fully custom nutrition plan, and all members get ongoing dietary support from our coaches." },
  { q: "What are your working hours?", a: "Mon–Fri: 5:00 AM – 11:00 PM, Saturday: 6:00 AM – 10:00 PM, Sunday: 6:00 AM – 9:00 PM. We're open every day of the week." },
  { q: "What payment options are available?", a: "We accept UPI, all major credit/debit cards, net banking and EMI on annual plans. Memberships can be paid in-club or online." },
  { q: "What is your cancellation policy?", a: "Monthly plans can be cancelled anytime with no penalty. Quarterly and annual plans can be paused or transferred. Speak to our team for details on your plan." },
];
