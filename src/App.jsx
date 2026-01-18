import React, { useState, useEffect } from 'react';
import { useTheme, ThemeProvider } from './components/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Sun,
  Moon,
  Menu, 
  X, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  FileText,
  Award,
  Globe,
  Sparkles,
  ArrowRight,
  Send,
  Download,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Users,
  CheckCircle2,
  Briefcase,
  UserCheck
} from 'lucide-react';
import { Button } from './components/ui/Button';
import {
  Dialog,
  DialogContent,
} from './components/ui/Dialog';

// --- Constants ---

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Rewards", href: "#rewards" },
  { name: "Contact", href: "#contact" },
];

const skillRows = [
  { 
    items: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Shopify", "PHP", "Node.js"],
    direction: 1 
  },
  { 
    items: ["Flutter", "React Native", "Git", "GitHub", "Jupyter Notebook", "Figma", "Canva"],
    direction: -1 
  },
  { 
    items: ["C", "C++", "C#", "Java", "Python", "MySQL", "MongoDB", "SQLite", "PostgreSQL"],
    direction: 1 
  }
];

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"]
  },
  {
    title: "Backend",
    skills: ["PHP", "Node.js"]
  },
  {
    title: "Mobile",
    skills: ["Flutter", "React Native"]
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "SQLite", "PostgreSQL"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Jupyter Notebook", "Figma"]
  },
  {
    title: "Programming",
    skills: ["C", "C++", "C#", "Java", "Python"]
  }
];

const experiences = [
  {
    company: "ZootechX.ai",
    period: "Sep 2025 – Present",
    role: "Full Stack Intern",
    link: "https://www.zootechx.com",
    description: "Building automated software solutions and AI-powered systems",
    keyResponsibilities: [
      "Developed conversational AI voice agents for customer support",
      "Built industry-specific chatbot systems using LLM integrations",
      "Created full-stack web applications and mobile apps",
      "Conducted R&D for AI implementation across business domains",
      "Integrated third-party APIs and automation workflows"
    ]
  },
  {
    company: "Bhavya Foundation",
    period: "Jan 2024 – Apr 2024",
    role: "Web Developer",
    link: "https://bhavyafoundation.com",
    description: "Led development of full donation management platform",
    keyResponsibilities: [
      "Architected and developed complete CMS from scratch",
      "Built donor management system with automated receipts",
      "Implemented secure payment gateway integration",
      "Created admin dashboard for foundation operations",
      "Currently leading platform revamp (Feb 2026)"
    ]
  },
  {
    company: "Blackstone Game Development",
    period: "June 2023 – July 2023",
    role: "Web Developer Intern",
    link: "https://www.blackstonegamedevelopment.in",
    description: "Frontend development and UI/UX implementation",
    keyResponsibilities: [
      "Developed responsive web pages using HTML, CSS, JavaScript",
      "Collaborated with design team on UI implementations",
      "Optimized website performance and loading times",
      "Assisted in maintaining company web presence"
    ]
  }
];

const projects = [
  {
    title: "Attendify",
    subtitle: "Smart Attendance Management System",
    period: "2025",
    tech: ["Flutter", "Firebase", "BLE", "TensorFlow Lite", "Node.js", "MongoDB", "ML Kit"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
    highlights: ["State-Level Competition", "Zero Proxy Attendance", "ML Face Recognition"],
    shortDesc: "Next-gen smart attendance platform with facial recognition and BLE proximity detection.",
    overview: "Attendify is a next-generation smart attendance platform designed to completely eliminate proxy attendance while making classroom attendance seamless for both teachers and students. Participated and showcased at Tantravihar, a prestigious state-level tech fest, where the project gained strong industry interest and real-world implementation opportunities.",
    features: [
      {
        title: "Security & Anti-Proxy Mechanism",
        points: [
          "Unique Device ID binding — each student's phone is registered and locked",
          "Blocks attendance from any unregistered or second device",
          "Facial Recognition using ML compares live camera input with stored student images",
          "Geofencing + BLE proximity detection ensures students are inside the classroom"
        ]
      },
      {
        title: "Teacher-Friendly Experience",
        points: [
          "One-tap 'Start Scanning' to begin attendance",
          "Uses Bluetooth Low Energy (BLE) to detect only nearby students",
          "Real-time status showing present, pending, and absent students",
          "Manual override with authorization for genuine cases"
        ]
      },
      {
        title: "Powerful Admin Panel",
        points: [
          "Device reset for students changing phones",
          "Class-teacher and timetable management",
          "Bulk import/export of student data",
          "Attendance reports (Excel & PDF)",
          "Department-wise and semester-wise analytics",
          "Live monitoring of all ongoing sessions"
        ]
      },
      {
        title: "Smart & Scalable Features",
        points: [
          "Automatic lecture scheduling",
          "Attendance trend graphs",
          "Low-attendance alerts for students & parents",
          "Offline mode with auto-sync",
          "Multi-language support",
          "Designed to handle thousands of users in real time"
        ]
      }
    ],
    team: "Darshan Jain · Yash Jadhav · Chetna Padhi",
    mentors: "Shashikant Mahajan · Kanchan Dhuri · Rasika Ransing",
    github: "https://github.com/Chetnapadhi/Attendify-Smart-Attendance-Management-System"
  },
  {
    title: "CivicConnect",
    subtitle: "AI Powered Civic Issue Platform",
    period: "2025",
    tech: ["React Native", "Expo", "Redux", "TensorFlow", "Node.js", "MongoDB", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    highlights: ["Smart India Hackathon 2025", "AI Computer Vision", "Real-time Tracking"],
    shortDesc: "AI-driven platform enabling citizens to report and track civic issues in real time.",
    overview: "CivicConnect is an AI-driven platform that enables citizens to report civic problems like potholes, broken streetlights, or waste issues and track their resolution in real time. Built for Smart India Hackathon 2025, it bridges the communication gap between citizens and local authorities.",
    features: [
      {
        title: "AI-Driven Automation",
        points: [
          "Computer Vision detects issues from uploaded images",
          "AI automatically categorizes & prioritizes complaints",
          "Severity-based ticket assignment",
          "Reduces manual verification time"
        ]
      },
      {
        title: "Smart Citizen App",
        points: [
          "GPS-based geo-tagged complaints",
          "Upload photos and descriptions",
          "Live status updates",
          "Offline complaint creation",
          "Multi-language support"
        ]
      },
      {
        title: "Authority Dashboard",
        points: [
          "Heat-maps of issue-dense locations",
          "Performance analytics",
          "Resource allocation tools",
          "Priority-based work assignment"
        ]
      },
      {
        title: "Engagement & Transparency",
        points: [
          "Community voting on issues",
          "Reward points and badges",
          "Real-time tracking",
          "Gamification to boost civic participation"
        ]
      }
    ],
    github: "https://github.com"
  },
  {
    title: "Bhavya Foundation CMS",
    subtitle: "Live Production System",
    period: "Jan 2024 – May 2024",
    tech: ["PHP", "MySQL", "Bootstrap", "MVC Architecture"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/daaf7ff6-7f57-4c8d-97c1-51a01a6c61d0/image-1768247208846.png",
    highlights: ["Live Production", "Payment Gateway", "Donor Management"],
    isLiveDemo: true,
    shortDesc: "Full-scale CMS for managing donations, donors, and foundation content digitally.",
    overview: "A full-scale Content Management System (CMS) built for Bhavya Foundation to manage donations, donors, and foundation content digitally. The platform is live and actively used, making it a real-world deployed system.",
    features: [
      {
        title: "Donation & Donor Management",
        points: [
          "Secure online donations",
          "Multiple payment gateway support",
          "Automatic receipts and thank-you emails",
          "Real-time donation tracking",
          "Donor database with history"
        ]
      },
      {
        title: "Admin Control Panel",
        points: [
          "Manage blogs, events, and campaigns",
          "Control donation records",
          "User and role management",
          "Content updates without developer support"
        ]
      },
      {
        title: "Technical Highlights",
        points: [
          "Built on PHP + MySQL",
          "MVC-based architecture",
          "Bootstrap-powered responsive UI",
          "Secure authentication and role-based access"
        ]
      },
      {
        title: "Impact",
        points: [
          "Increased donation transparency",
          "Faster financial tracking",
          "Improved supporter engagement",
          "Reduced manual work for the foundation"
        ]
      }
    ],
    team: "Chetna Padhi · Atharva Gitaye · Shravani Shinde",
    github: "https://bhavyafoundation.com"
  },
  {
    title: "BookStore",
    subtitle: "Online Bookstore Management System",
    period: "2024",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop",
    highlights: ["Full CRUD", "Shopping Cart", "Admin Dashboard"],
    shortDesc: "Full-stack bookstore platform with customer portal and inventory management.",
    overview: "BookFlix is a full-stack bookstore platform that includes both a customer shopping portal and a powerful admin dashboard for inventory and order management.",
    features: [
      {
        title: "User Features",
        points: [
          "Browse & search books",
          "Add to cart",
          "Place orders",
          "Choose payment method",
          "Auto-generated invoices"
        ]
      },
      {
        title: "Admin Panel",
        points: [
          "Add, update & delete books",
          "Manage stock & inventory",
          "View all orders",
          "Track sales",
          "Full CRUD operations"
        ]
      }
    ],
    github: "https://github.com/chetnapadhi"
  }
];

const rewards = [
  {
    title: "Research Paper",
    subtitle: "Revolutionizing Home Safety: A Study on AI-Powered House Security (2023)",
    year: "2023",
    link: "https://academicjournal.ijraw.com/media/post/IJRAW-2-11-1.1.pdf",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Tantravihar State Level Competition",
    subtitle: "Attendance Management App - Winner 2025",
    year: "2025",
    link: "https://www.linkedin.com/posts/chetna-padhi_tantravihar-statelevelcompetition-innovation-activity-7369845594779111424-TEaz",
    icon: <Award className="w-5 h-5" />
  },
  {
    title: "IIT Bombay – CSRE Course",
    subtitle: "Microwave Satellite Data Processing",
    year: "2025",
    link: "https://www.linkedin.com/posts/chetna-padhi_iitbombay-csre-remotesensing-activity-7353531539600588800-d8_Q",
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: "Bhavya Foundation Appreciation",
    subtitle: "Certificate of Appreciation for Technical Leadership",
    year: "2024",
    link: "https://github.com/atharvagitaye/SBMP-Final-Project",
    icon: <Sparkles className="w-5 h-5" />
  }
];

// --- Components ---

const TypingText = ({ phrases }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[index];
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, phrases, speed]);

  return (
    <span className="inline-block min-h-[1.5em] text-gray-600 dark:text-gray-400 font-bold">
      {text}
      <span className="animate-pulse ml-1 border-r-2 border-gray-600 dark:border-gray-400"></span>
    </span>
  );
};

const InfiniteCarousel = ({ items, direction = 1 }) => {
  return (
    <div className="flex overflow-hidden select-none gap-4 py-2">
      <motion.div
        animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex shrink-0 gap-4"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className="px-6 py-3 bg-gray-100 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-xl text-sm font-medium whitespace-nowrap hover:border-gray-400 dark:hover:border-white/30 transition-colors"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

function PortfolioContent() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitting: false, submitted: false, error: null });

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      // Initialize EmailJS with public key
      emailjs.init('z0LVHCV9bqVXwFm4R');

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject || 'New Portfolio Contact',
        message: formData.message,
        current_date: new Date().toLocaleString(),
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_xbdclad',  // Service ID
        'template_81yjihd', // Template ID
        templateParams
      );

      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus({ submitting: false, submitted: false, error: null }), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-x-hidden">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img 
              src={theme === 'dark' ? '/Dark-mode.svg' : '/Light-mode.svg'} 
              alt="Logo" 
              className="h-16 w-auto transition-opacity duration-300"
            />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    const offsetTop = element.offsetTop - 64;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-bold tracking-tight text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      setTimeout(() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          const navbarHeight = 64;
                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                          const offsetPosition = elementPosition - navbarHeight;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                          });
                        }
                      }, 100);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/10 dark:bg-white/5 blur-[80px] md:blur-[120px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/10 dark:bg-white/5 blur-[80px] md:blur-[120px] rounded-full translate-x-1/2" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 space-y-6 w-full max-w-4xl"
        >
          {/* Bubble Text */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10">
            <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">👋 Based in Mumbai, India</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-black dark:text-white break-words">
            Hi, I'm Chetna Padhi
          </h1>
          
          <h2 className="text-xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            Full Stack Developer
          </h2>
          
          <div className="text-base sm:text-xl md:text-2xl font-medium pt-2">
            <TypingText phrases={["Building Scalable Web Applications", "Flutter | React | Node.js", "Creating End-to-End Solutions"]} />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-8 md:pt-10 w-full">
            <Button asChild size="lg" className="rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg px-6 md:px-8 py-5 md:py-6 text-sm md:text-lg font-bold transition-all hover:scale-105">
              <a href="https://drive.google.com/file/d/14Eo0jNvX_-3Vwc88o9zW3WEGfQLJ1fJ5/view?usp=sharing" target="_blank" rel="noreferrer">
                <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-gray-300 dark:border-white/20 hover:border-black dark:hover:border-white hover:bg-gray-100 dark:hover:bg-white/5 px-6 md:px-8 py-5 md:py-6 text-sm md:text-lg font-bold transition-all">
              <a href="#projects">Recent Works</a>
            </Button>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-4 pt-8">
            <a href="https://github.com/Chetnapadhi" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
              <Github className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="https://www.linkedin.com/in/chetna-padhi/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
              <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="mailto:padhichetn@gmail.com" className="p-3 rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
              <Mail className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative bg-gray-50 dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-sm mb-8 text-center">About Me</h3>
          
          <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <h4 className="text-3xl md:text-5xl font-black tracking-tight text-black dark:text-white">
                I'm Chetna Padhi, a Full Stack Developer
              </h4>
              <div className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                <p>
                  Currently pursuing my BTech from Vidyalankar Institute of Technology, I specialize in building scalable web and mobile applications.
                </p>
                <p>
                  I've completed internships with ZootechX, Blackstone Game Development, and Bhavya Foundation, gaining hands-on experience across the full development lifecycle — from UI design to backend systems.
                </p>
                <p>
                  I enjoy creating end-to-end solutions that combine clean interfaces, reliable APIs, and smart data handling. I'm especially interested in AI, Machine Learning, and automation, and I love solving complex problems through technology.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="space-y-2">
                  <p className="text-3xl md:text-4xl font-black text-black dark:text-white">3+</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Internships</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl md:text-4xl font-black text-black dark:text-white">7+</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Projects</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl md:text-4xl font-black text-black dark:text-white">10+</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Technologies</p>
                </div>
              </div>
            </div>
            
            {/* Photo */}
            <div className="relative group mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-white/10 dark:to-white/5 rounded-[3rem] opacity-20 group-hover:opacity-40 blur-xl transition-opacity" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 max-w-sm">
                <img 
                  src="/About.png" 
                  alt="Chetna Padhi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 overflow-hidden bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h3 className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-sm mb-4 text-center">Stack</h3>
          <h4 className="text-4xl md:text-6xl font-black tracking-tight text-center mb-16">Modern Skills & Tools</h4>
          
          <div className="flex flex-col gap-4 -mx-6">
            {skillRows.map((row, i) => (
              <InfiniteCarousel key={i} items={row.items} direction={row.direction} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="p-8 rounded-3xl border border-gray-200 dark:border-white/5 bg-white dark:bg-black hover:border-gray-400 dark:hover:border-white/30 transition-all group">
                <h5 className="text-xl font-bold mb-6 group-hover:text-black dark:group-hover:text-white transition-colors">{cat.title}</h5>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs font-bold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-sm mb-4 text-center">Career Path</h3>
          <h4 className="text-4xl md:text-6xl font-black tracking-tight text-center mb-20">Work Experience</h4>
          
          <div className="relative">
            {/* Vertical line connecting timeline dots */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-[-80px] w-px bg-gray-200 dark:bg-white/10 transform -translate-x-1/2"></div>
            
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''} mb-20 last:mb-0 w-full`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-black dark:bg-white z-10" />
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-[2.5rem] hover:border-gray-400 dark:hover:border-white/20 transition-all shadow-sm">
                      <div className="flex flex-col gap-4 mb-8">
                        <span className="inline-flex w-fit px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                          {exp.period}
                        </span>
                        <div>
                          <h5 className="text-3xl font-black tracking-tighter">{exp.company}</h5>
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-sm mt-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.role}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 font-medium mb-8 leading-relaxed">
                        {exp.description}
                      </p>

                      <AnimatePresence>
                        {expandedExperience === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-4 mb-8 border-t border-gray-200 dark:border-white/5 pt-8">
                              {exp.keyResponsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-sm text-gray-500 dark:text-gray-400">
                                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black dark:bg-white shrink-0" />
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex items-center gap-6">
                        <button
                          onClick={() => setExpandedExperience(expandedExperience === i ? null : i)}
                          className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
                        >
                          {expandedExperience === i ? 'Show Less' : 'Read More'}
                          {expandedExperience === i ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>
                        <a href={exp.link} target="_blank" rel="noreferrer" className="text-[10px] font-black uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity flex items-center gap-2">
                          Website <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for Desktop */}
                  <div className="hidden md:block w-[10%]" />
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-sm mb-4 text-center">Works</h3>
          <h4 className="text-4xl md:text-6xl font-black tracking-tight text-center mb-20">Featured Projects</h4>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className="group relative bg-white dark:bg-black rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/5 hover:border-gray-400 dark:hover:border-white/30 transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2 max-w-[60%] justify-end">
                    {project.highlights?.map((highlight, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h5 className="text-2xl font-black mb-2 leading-tight">{project.title}</h5>
                  {project.subtitle && <p className="text-gray-500 dark:text-gray-500 text-sm mb-3">{project.subtitle}</p>}
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-6">
                    {project.shortDesc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-black dark:text-white font-bold text-sm inline-flex items-center hover:underline">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                    <span className="text-xs font-black text-gray-500">{project.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 mb-4 md:mb-6">Merit</h2>
            <h3 className="text-3xl md:text-6xl font-black tracking-tight">Achievements</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {rewards.map((reward, index) => (
              <a
                key={reward.title}
                href={reward.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-start md:items-center gap-3 md:gap-8 p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] border-2 border-gray-200 dark:border-white/5 hover:border-gray-400 dark:hover:border-white/30 transition-all group bg-transparent relative"
              >
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-3xl bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                  {reward.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-gray-500 dark:text-gray-400 block mb-1">{reward.year}</span>
                  <h4 className="text-base md:text-2xl font-black tracking-tighter flex items-start md:items-center gap-2 mb-1">
                    <span className="line-clamp-2 md:line-clamp-1">{reward.title}</span>
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 dark:text-gray-400 shrink-0 mt-0.5 md:mt-0" />
                  </h4>
                  <p className="text-xs md:text-base text-gray-600 dark:text-gray-400 font-medium line-clamp-2">{reward.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div>
                <h3 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">Contact</h3>
                <h4 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                  Let's Build Something Great.
                </h4>
                <p className="text-xl text-gray-400 max-w-md">
                  Have a project in mind or just want to say hi? Feel free to reach out.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Mail className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</p>
                    <a href="mailto:padhichetn@gmail.com" className="text-xl font-bold hover:text-cyan-500 transition-colors">padhichetn@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Phone className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone</p>
                    <a href="tel:8356955192" className="text-xl font-bold hover:text-purple-500 transition-colors">+91 8356955192</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Location</p>
                    <p className="text-xl font-bold">Mumbai, Maharashtra</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 pt-6">
                <a href="https://www.linkedin.com/in/chetna-padhi/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/Chetnapadhi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/chetna_padhi/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStatus.submitted && (
                  <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-medium">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {formStatus.error && (
                  <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-400 text-sm font-medium">
                    ✗ {formStatus.error}
                  </div>
                )}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name <span className="text-red-400">*</span></label>
                  <input 
                    type="text" 
                    required 
                    minLength={2}
                    maxLength={50}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white transition-colors text-white placeholder:text-gray-500"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    value={formData.name}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email <span className="text-red-400">*</span></label>
                  <input 
                    type="email" 
                    required 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white transition-colors text-white placeholder:text-gray-500"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    value={formData.email}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                  <input 
                    type="text" 
                    maxLength={100}
                    placeholder="Project Inquiry"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white transition-colors text-white placeholder:text-gray-500"
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    value={formData.subject}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message <span className="text-red-400">*</span></label>
                  <textarea 
                    rows={4} 
                    required 
                    minLength={10}
                    maxLength={1000}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white transition-colors resize-none text-white placeholder:text-gray-500"
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    value={formData.message}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={formStatus.submitting}
                  className="w-full h-16 rounded-2xl bg-white text-black hover:bg-gray-200 font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {formStatus.submitting ? 'Sending...' : 'Submit Message'} <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 px-6 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-black dark:text-white mb-2">Chetna Padhi</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">Building scalable digital solutions.</p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="https://github.com/Chetnapadhi" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/chetna-padhi/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/chetna_padhi/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {navLinks.slice(0, 4).map(l => (
              <a key={l.name} href={l.href} className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">{l.name}</a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              © 2026 Chetna Padhi.
            </p>
            <p className="text-xs text-gray-500">All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl w-full bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 p-0 overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
          {selectedProject && (
            <div className="max-h-[90vh] overflow-y-auto">
              {/* Header with image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-800">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white hover:text-black transition-all z-20"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {selectedProject.highlights?.map((highlight, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-[10px] font-bold text-white uppercase tracking-wide">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl font-black text-white tracking-tight">{selectedProject.title}</h2>
                  <p className="text-white/70 text-sm mt-1">{selectedProject.subtitle}</p>
                </div>
              </div>

              <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 bg-gray-100 dark:bg-white/10 text-[11px] font-bold uppercase tracking-wide rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Overview */}
                <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Team & Mentors */}
                {(selectedProject.team || selectedProject.mentors) && (
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.team && (
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <span className="text-[10px] font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400">Team</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{selectedProject.team}</p>
                      </div>
                    )}
                    {selectedProject.mentors && (
                      <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <UserCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          <span className="text-[10px] font-bold uppercase tracking-wide text-purple-600 dark:text-purple-400">Mentors</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{selectedProject.mentors}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Features - Compact Grid */}
                {selectedProject.features && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500">Key Features</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, idx) => (
                        <div key={idx} className="p-4 border border-gray-200 dark:border-white/10 rounded-xl hover:border-gray-400 dark:hover:border-white/30 transition-colors">
                          <h4 className="text-sm font-bold mb-3">{feature.title}</h4>
                          <ul className="space-y-1.5">
                            {feature.points.slice(0, 3).map((point, pidx) => (
                              <li key={pidx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                                <span className="line-clamp-2">{point}</span>
                              </li>
                            ))}
                            {feature.points.length > 3 && (
                              <li className="text-xs text-gray-400">+{feature.points.length - 3} more</li>
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <Button asChild className="w-full h-12 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-sm uppercase tracking-wide">
                  <a href={selectedProject.github} target="_blank" rel="noreferrer">
                    {selectedProject.isLiveDemo ? (
                      <><Globe className="w-4 h-4 mr-2" /> Live Demo</>
                    ) : (
                      <><Github className="w-4 h-4 mr-2" /> View Source Code</>
                    )}
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Floating Scroll Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg z-50 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;
