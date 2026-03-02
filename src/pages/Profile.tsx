import { motion } from "framer-motion";
import { userProfile } from "@/data/careers";
import { User, BookOpen, Clock, Award } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 grid-bg">
      <div className="container max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-display font-bold neon-text mb-8">Profile</h1>
        </motion.div>

        {/* Avatar & Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card neon-border p-8 text-center mb-6"
        >
          <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-display font-bold text-primary">{userProfile.avatar}</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-foreground">{userProfile.name}</h2>
          <p className="text-primary font-medium">{userProfile.major}</p>
          <p className="text-muted-foreground text-sm mt-1">Age {userProfile.age}</p>
        </motion.div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-6"
        >
          <h3 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" /> Personal Statement
          </h3>
          <p className="text-secondary-foreground text-sm leading-relaxed italic">
            "{userProfile.statement}"
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="glass-card p-5 text-center">
            <Award className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-display font-bold text-foreground">{userProfile.experiencesCompleted}</div>
            <div className="text-xs text-muted-foreground">Experiences</div>
          </div>
          <div className="glass-card p-5 text-center">
            <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-display font-bold text-foreground">{userProfile.totalHours}h</div>
            <div className="text-xs text-muted-foreground">Total Time</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
