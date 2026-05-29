// Central business + content data for ShaktiFit Arena

export const business = {
  name: "ShaktiFit Arena",
  tagline: "Build Strength. Transform Your Life.",
  location: "Sector 62, Noida, Uttar Pradesh",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  email: "info@shaktifitarena.com",
  owner: "Raj Malhotra",
  founded: 2018,
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

export const galleryImages = IDS.map((id, i) => ({
  src: img(id, 900),
  alt: `ShaktiFit Arena members training — photo ${i + 1}`,
  // varied aspect ratios for masonry
  tall: i % 3 === 0,
}));

export const whyChooseUs = [
  {
    icon: "Dumbbell",
    title: "World-Class Equipment",
    desc: "Imported strength machines, Olympic platforms and premium free weights maintained daily.",
  },
  {
    icon: "Users",
    title: "Expert Coaches",
    desc: "Internationally certified trainers who design programs around your body and goals.",
  },
  {
    icon: "HeartPulse",
    title: "Data-Driven Results",
    desc: "Body composition tracking and progress reviews so every session moves the needle.",
  },
  {
    icon: "Sparkles",
    title: "Luxury Recovery",
    desc: "Sauna, ice baths, physio and dedicated mobility zones for complete recovery.",
  },
];

export const programs = [
  {
    name: "Strength & Conditioning",
    desc: "Progressive overload programming to build raw power and lean muscle.",
    img: photo(1),
    level: "All Levels",
    duration: "60 min",
  },
  {
    name: "HIIT & Functional",
    desc: "High-intensity circuits that torch fat and sharpen athletic performance.",
    img: photo(3),
    level: "Intermediate",
    duration: "45 min",
  },
  {
    name: "Hatha & Power Yoga",
    desc: "Breath-led flows for flexibility, balance and a calmer mind.",
    img: photo(30),
    level: "All Levels",
    duration: "60 min",
  },
  {
    name: "Personal Training",
    desc: "One-on-one coaching with fully personalised nutrition and training.",
    img: photo(19),
    level: "Custom",
    duration: "60 min",
  },
  {
    name: "Cardio & Endurance",
    desc: "Treadmill, rowing and cycle conditioning to build a stronger engine.",
    img: photo(11),
    level: "All Levels",
    duration: "45 min",
  },
  {
    name: "Group Fitness",
    desc: "High-energy community classes that keep you motivated and consistent.",
    img: photo(20),
    level: "All Levels",
    duration: "50 min",
  },
];

export const facilities = [
  { name: "Strength Zone", desc: "Olympic lifting platforms, racks and a full free-weight floor.", img: photo(0), icon: "Dumbbell" },
  { name: "Cardio Zone", desc: "Connected treadmills, rowers, bikes and stair climbers.", img: photo(11), icon: "HeartPulse" },
  { name: "Functional Training", desc: "Turf track, rigs, kettlebells, ropes and sleds.", img: photo(3), icon: "Activity" },
  { name: "Recovery Area", desc: "Sauna, ice bath, percussion therapy and physio support.", img: photo(43), icon: "Waves" },
  { name: "Yoga Studio", desc: "Serene heated studio for yoga, mobility and breathwork.", img: photo(30), icon: "Flower2" },
  { name: "Locker Rooms", desc: "Premium changing rooms, showers and secure digital lockers.", img: photo(14), icon: "Lock" },
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

export const plans = [
  {
    name: "Basic",
    price: 1999,
    tagline: "Start your journey",
    popular: false,
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
    price: 3499,
    tagline: "Most popular",
    popular: true,
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
    price: 5999,
    tagline: "The complete experience",
    popular: false,
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

export const testimonials = [
  {
    name: "Aditya Verma",
    role: "Software Engineer",
    rating: 5,
    text: "Lost 14 kg in 5 months. The coaches actually track your progress and adjust everything. Best gym in Noida, hands down.",
    img: photo(6),
  },
  {
    name: "Meera Joshi",
    role: "Entrepreneur",
    rating: 5,
    text: "The yoga studio and recovery area are world-class. It genuinely feels like a premium wellness club, not just a gym.",
    img: photo(18),
  },
  {
    name: "Karan Malhotra",
    role: "Marketing Lead",
    rating: 5,
    text: "Personal training transformed my strength numbers. Deadlift went from 80kg to 150kg with zero injuries.",
    img: photo(34),
  },
  {
    name: "Divya Rao",
    role: "Doctor",
    rating: 5,
    text: "Clean, spacious and never overcrowded. The functional zone is my favourite. Worth every rupee.",
    img: photo(19),
  },
  {
    name: "Sahil Khanna",
    role: "Athlete",
    rating: 5,
    text: "Professional setup for serious training. The performance coaching helped me prep for my marathon perfectly.",
    img: photo(24),
  },
  {
    name: "Neha Gupta",
    role: "Designer",
    rating: 5,
    text: "Group classes are addictive and the trainers remember your name and goals. Such a motivating community.",
    img: photo(30),
  },
];

export const stats = [
  { value: 4200, suffix: "+", label: "Active Members" },
  { value: 25, suffix: "+", label: "Expert Trainers" },
  { value: 60, suffix: "+", label: "Weekly Classes" },
  { value: 7, suffix: "", label: "Years of Excellence" },
];
