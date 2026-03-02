import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { careers } from "@/data/careers";
import { ArrowLeft, Play } from "lucide-react";

const SimulationPage = () => {
  const { roleId } = useParams();
  const navigate = useNavigate();

  const career = careers.find((c) => c.roles.some((r) => r.id === roleId));
  const role = career?.roles.find((r) => r.id === roleId);

  if (!career || !role) {
    return (
      <div className="min-h-screen pt-24 grid-bg flex items-center justify-center">
        <p className="text-muted-foreground">Role not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 grid-bg">
      <div className="container max-w-2xl">
        <button
          onClick={() => navigate("/experiences")}
          className="flex items-center gap-2 text-primary mb-6 hover:underline font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Experiences
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card neon-border neon-glow p-8 text-center"
        >
          <div className="text-sm text-primary font-medium mb-2">{career.name}</div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-3">{role.title}</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">{role.description}</p>

          <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <Play className="w-12 h-12 text-primary ml-1" />
          </div>

          <p className="text-xs text-muted-foreground mb-4">VR Headset Required for Full Experience</p>

          <button className="bg-primary text-primary-foreground font-display font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Launch Simulation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SimulationPage;
