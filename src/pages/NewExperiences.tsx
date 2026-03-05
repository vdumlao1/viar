import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { careers } from "@/data/careers";
import { Building2, Shield, Wrench, Palette, Heart, Scale, Code, GraduationCap, ChevronRight, ArrowLeft } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2, Shield, Wrench, Palette, Heart, Scale, Code, GraduationCap,
};

const difficultyColor: Record<string, string> = {
  Beginner: "text-green-400 bg-green-400/10 border-green-400/30",
  Intermediate: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  Advanced: "text-red-400 bg-red-400/10 border-red-400/30",
};

const NewExperiences = () => {
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);
  const navigate = useNavigate();
  const career = careers.find((c) => c.id === selectedCareer);

  return (
    <div className="min-h-screen pt-24 pb-12 grid-bg">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-display font-bold neon-text mb-2">New Experiences</h1>
          <p className="text-muted-foreground mb-8">Choose a career path to explore through VR simulation.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedCareer ? (
            <motion.div
              key="careers"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} exit={{ opacity: 0, x: -50 }}
              className="grid gap-3"
            >
              {careers.map((c, i) => {
                const Icon = iconMap[c.icon] || Code;
                return (
                  <motion.button
                    key={c.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ x: 8 }}
                    onClick={() => setSelectedCareer(c.id)}
                    className="glass-card p-4 flex items-center gap-4 text-left group hover:neon-border transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-foreground">{c.name}</h3>
                      <p className="text-sm text-muted-foreground truncate">{c.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.button>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="roles"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
            >
              <button
                onClick={() => setSelectedCareer(null)}
                className="flex items-center gap-2 text-primary mb-6 hover:underline font-medium"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Careers
              </button>

              {career && (
                <>
                  <div className="glass-card neon-border p-6 mb-6">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-1">{career.name}</h2>
                    <p className="text-muted-foreground">{career.description}</p>
                  </div>

                  <h3 className="text-lg font-display font-semibold text-foreground mb-4">Choose a Role</h3>
                  <div className="grid gap-4">
                    {career.roles.map((role, i) => (
                      <motion.div
                        key={role.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.01 }}
                        className="glass-card p-5 hover:neon-border transition-all cursor-pointer group"
                        onClick={() => {
                            // We check if the title of the role is "Registered Nurse"
                            if (role.title === "Registered Nurse") {
                                window.location.href = "/viar/healthcare/rn/index.html";
                            } else {
                                // Everyone else goes to the normal VR simulation page
                                navigate(`/simulation/${role.id}`);
                            }
                        }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                            {role.title}
                          </h4>
                          <span className={`text-xs px-2 py-1 rounded-full border ${difficultyColor[role.difficulty]}`}>
                            {role.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NewExperiences;
