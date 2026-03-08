import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "Flutter", level: 95 },
  { name: "Dart", level: 93 },
  { name: "Firebase", level: 88 },
  { name: "REST APIs", level: 90 },
  { name: "State Management (Bloc, Cubit, Provider, GetX)", level: 92 },
  { name: "Clean Architecture", level: 90 },
  { name: "CI/CD", level: 80 },
  { name: "Google Maps Integration", level: 85 },
  { name: "Payment Gateways", level: 82 },
  { name: "WebRTC", level: 78 },
  { name: "Deep Linking", level: 85 },
  { name: "Testing (Unit / Widget / Integration)", level: 80 },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading title="Technical Skills" />

      <div className="max-w-3xl mx-auto grid gap-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="flex justify-between mb-1.5">
              <span className="text-sm font-medium text-foreground">{s.name}</span>
              <span className="text-xs font-mono text-primary">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
