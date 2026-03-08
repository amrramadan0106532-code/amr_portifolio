import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Neqabty",
    tech: ["Flutter", "Firebase", "Bloc", "Google Maps", "Payment"],
    desc: "Syndicate services platform enabling subscriptions, member services, and location-based pharmacy discovery.",
  },
  {
    name: "Workbook",
    tech: ["Flutter", "WebSocket", "AI Chatbot"],
    desc: "AI-powered chatbot that answers Egyptian Labor Law questions in real time.",
  },
  {
    name: "Qaaf",
    tech: ["Flutter", "CI/CD", "Bloc"],
    desc: "Video streaming platform with playlists, channels, deep linking, and background playback.",
  },
  {
    name: "Jomlah Express",
    tech: ["Flutter", "Firebase", "REST API", "Google Maps"],
    desc: "Wholesale e-commerce platform with catalog browsing, checkout, and delivery tracking.",
  },
  {
    name: "Catwa",
    tech: ["Flutter", "Firebase"],
    desc: "Pet food shopping app with ordering and delivery scheduling.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading title="Projects" subtitle="Highlighted portfolio of production applications" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            className="glass rounded-xl p-6 group hover:glow-primary-sm transition-all hover:-translate-y-1 duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {p.name}
              </h3>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
