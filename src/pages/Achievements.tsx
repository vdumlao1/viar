import { motion } from "framer-motion";
import { achievements } from "@/data/careers";
import { Trophy, Star, Target } from "lucide-react";

const rankColor: Record<string, string> = {
  Bronze: "text-orange-400 border-orange-400/30 bg-orange-400/10",
  Silver: "text-slate-300 border-slate-300/30 bg-slate-300/10",
  Gold: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
};

const rankIcon: Record<string, string> = {
  Bronze: "🥉",
  Silver: "🥈",
  Gold: "🥇",
};

const Achievements = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 grid-bg">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-display font-bold neon-text mb-2">Achievements</h1>
          <p className="text-muted-foreground mb-8">Track your progress and rankings across career experiences.</p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {[
            { label: "Experiences", value: achievements.length, icon: Target },
            { label: "Tasks Done", value: achievements.reduce((a, b) => a + b.tasksCompleted, 0), icon: Star },
            { label: "Gold Ranks", value: achievements.filter((a) => a.rank === "Gold").length, icon: Trophy },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 text-center">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid gap-4">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.roleId}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-display font-semibold text-foreground">{ach.roleTitle}</h3>
                  <p className="text-sm text-muted-foreground">{ach.careerName}</p>
                </div>
                <span className={`text-sm px-3 py-1 rounded-full border font-medium ${rankColor[ach.rank]}`}>
                  {rankIcon[ach.rank]} {ach.rank}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${ach.progress}%` }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-neon-purple"
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>{ach.tasksCompleted}/{ach.totalTasks} tasks completed</span>
                <span>{ach.progress}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
