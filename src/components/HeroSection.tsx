import { motion } from "framer-motion";
import { Github, Linkedin, Download, FolderOpen, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const FloatingCode = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[
      { text: "flutter build", top: "10%", left: "5%", delay: 0 },
      { text: "Widget build()", top: "20%", right: "8%", delay: 1 },
      { text: "setState(() {})", top: "60%", left: "3%", delay: 2 },
      { text: "BlocProvider", top: "75%", right: "5%", delay: 0.5 },
      { text: "const app = App()", top: "40%", left: "80%", delay: 1.5 },
      { text: "async/await", top: "85%", left: "15%", delay: 3 },
      { text: "Navigator.push()", top: "30%", left: "2%", delay: 2.5 },
    ].map((item, i) => (
      <motion.span
        key={i}
        className="absolute text-primary/10 font-mono text-sm md:text-base select-none"
        style={{ top: item.top, left: item.left, right: (item as any).right }}
        animate={{ y: [0, -15, 0], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 5, repeat: Infinity, delay: item.delay }}
      >
        {item.text}
      </motion.span>
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <FloatingCode />
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">
            Flutter Mobile Developer
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Amr{" "}
            <span className="gradient-text">Ramadan</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
            Building high-performance cross-platform mobile applications with Flutter.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-primary-sm"
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
            >
              <FolderOpen size={18} /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/Atevaz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass hover:glow-primary-sm transition-all text-muted-foreground hover:text-primary"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/amr-ramadan-92a4841b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass hover:glow-primary-sm transition-all text-muted-foreground hover:text-primary"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-primary/10 rounded-full blur-xl" />
            <img
              src={profilePhoto}
              alt="Amr Ramadan - Flutter Developer"
              className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-primary/30 glow-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
