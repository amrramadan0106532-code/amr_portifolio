import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "Neqabty",
    role: "Flutter Developer",
    period: "2025 – Present",
    bullets: [
      "Built a subscription-based system with secure payment integration",
      "Developed voice and text chatbot for member support",
      "Implemented advanced security features",
    ],
  },
  {
    company: "SDS",
    role: "Flutter Developer (Remote – Jordan)",
    period: "2024",
    bullets: [
      "Developed mobile ERP modules (HR, Finance, Inventory, Sales)",
      "Integrated real-time APIs",
      "Built role-based access systems",
    ],
  },
  {
    company: "Code700",
    role: "Flutter Developer (Saudi Arabia)",
    period: "2023",
    bullets: [
      "Built e-commerce applications",
      "Implemented video streaming systems",
      "Created CI/CD pipelines",
    ],
  },
  {
    company: "TX",
    role: "Flutter Developer",
    period: "2022",
    bullets: [
      "Built real-time audio and video calling using WebRTC",
      "Developed background services and native integrations",
    ],
  },
  {
    company: "Freelance – Mostaql",
    role: "Flutter Developer",
    period: "2021 – 2022",
    bullets: ["Delivered 10+ mobile applications"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading title="Experience" subtitle="Professional journey building mobile applications" />

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="relative pl-12 md:pl-16 pb-12 last:pb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Dot */}
            <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary glow-primary-sm" />

            <div className="glass rounded-xl p-6 hover:glow-primary-sm transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                <span className="text-xs font-mono text-primary">{exp.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{exp.role}</p>
              <ul className="space-y-1">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
