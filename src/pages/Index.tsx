import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Compass, Trophy, User, Info } from "lucide-react";
import heroImage from "@/assets/hero-vr.jpg";

const menuItems = [
  {
    title: "New Experiences",
    description: "Explore careers through immersive VR simulations",
    icon: Compass,
    path: "/experiences",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
  },
  {
    title: "Achievements",
    description: "View your rankings and progress",
    icon: Trophy,
    path: "/achievements",
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/30",
  },
  {
    title: "Profile",
    description: "Manage your personal information",
    icon: User,
    path: "/profile",
    color: "from-neon-glow/20 to-neon-glow/5",
    borderColor: "border-neon-glow/30",
  },
  {
    title: "About",
    description: "Learn about our mission and story",
    icon: Info,
    path: "/about",
    color: "from-secondary to-secondary/50",
    borderColor: "border-secondary-foreground/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid-bg">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="VR Career Exploration"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative text-center z-10 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 neon-text">
            CareerVR
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground max-w-xl mx-auto">
            Step into your future. Explore careers through immersive virtual reality simulations.
          </p>
        </motion.div>
      </div>

      {/* Menu Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container py-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl -mt-12 relative z-10"
      >
        {menuItems.map((item) => (
          <motion.button
            key={item.path}
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(item.path)}
            className={`glass-card neon-border p-6 text-left group cursor-pointer transition-all duration-300 hover:neon-glow bg-gradient-to-br ${item.color}`}
          >
            <item.icon className="w-8 h-8 text-primary mb-4 group-hover:animate-pulse-glow" />
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {item.description}
            </p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default MainMenu;
