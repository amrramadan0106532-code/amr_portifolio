import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Trophy, Smartphone, Globe, TrendingUp } from "lucide-react";

const achievements = [
  { icon: Trophy, label: "3+ Years", desc: "Flutter development experience" },
  { icon: Smartphone, label: "10+ Apps", desc: "Production mobile applications built" },
  { icon: Globe, label: "International", desc: "Worked with companies across regions" },
  { icon: TrendingUp, label: "Performance", desc: "Improved system performance & engagement" },
];

const AchievementsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <SectionHeading title="Achievements" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            className="glass rounded-xl p-6 text-center hover:glow-primary-sm transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <a.icon className="mx-auto mb-3 text-primary" size={32} />
            <p className="text-xl font-bold text-foreground mb-1">{a.label}</p>
            <p className="text-xs text-muted-foreground">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
