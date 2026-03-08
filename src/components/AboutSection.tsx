import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Layers, Zap, Smartphone, Brain, Radio, Code2 } from "lucide-react";

const strengths = [
  { icon: Layers, label: "Flutter Architecture" },
  { icon: Code2, label: "Clean Architecture" },
  { icon: Zap, label: "Performance Optimization" },
  { icon: Radio, label: "Real-time Applications" },
  { icon: Brain, label: "AI-powered Features" },
  { icon: Smartphone, label: "Cross-platform Development" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading title="About Me" />
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-muted-foreground text-lg leading-relaxed mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Amr Ramadan is an experienced Flutter Developer specializing in building high-performance
          cross-platform mobile applications using Flutter and Dart. He focuses on scalable
          architecture, performance optimization, and seamless user experiences. Amr has worked with
          international teams across Saudi Arabia, Jordan, and Egypt, delivering production-ready
          applications in fintech, ERP systems, e-commerce, AI chatbots, and video streaming
          platforms.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {strengths.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass rounded-xl p-5 text-center hover:glow-primary-sm transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <s.icon className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" size={28} />
              <span className="text-sm font-medium text-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
