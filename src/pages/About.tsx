import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 grid-bg">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-display font-bold neon-text mb-2">About CareerVR</h1>
          <p className="text-muted-foreground mb-10">Our story, mission, and the team behind the experience.</p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card neon-border p-8 mb-8"
        >
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Story</h2>
          <div className="space-y-4 text-secondary-foreground text-sm leading-relaxed">
            <p>
              CareerVR was born from a simple idea: what if students could experience a career before committing years of education to it? Founded in 2024 by a team of educators, game designers, and VR engineers, we set out to bridge the gap between academic learning and real-world career experience.
            </p>
            <p>
              Too many students graduate uncertain about their career path. Traditional career counseling relies on descriptions and assessments — but nothing compares to actually stepping into a role. That's where CareerVR comes in.
            </p>
            <p>
              Using cutting-edge virtual reality technology, we create immersive simulations that let students experience the day-to-day reality of different careers, from performing surgery to arguing a case in court, from writing code to designing buildings.
            </p>
          </div>
        </motion.div>

        {/* Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Our Goals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Target, title: "Clarity", desc: "Help students discover their true career interests through hands-on experience." },
              { icon: Users, title: "Accessibility", desc: "Make career exploration available to every student regardless of background." },
              { icon: Lightbulb, title: "Innovation", desc: "Push the boundaries of VR technology to create the most realistic simulations." },
              { icon: Rocket, title: "Impact", desc: "Reduce career uncertainty and help students make confident, informed decisions." },
            ].map((goal, i) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card p-5"
              >
                <goal.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-1">{goal.title}</h3>
                <p className="text-sm text-muted-foreground">{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
