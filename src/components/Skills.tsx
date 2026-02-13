import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Brain, Atom, Server, FileCode, Globe, Paintbrush, Users, MessageSquare, Handshake, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories: { label: string; skills: { name: string; icon: LucideIcon }[] }[] = [
    {
      label: "Backend & Systems",
      skills: [
        { name: "Laravel", icon: Server },
        { name: "Express.js", icon: Server },
        { name: "Python", icon: Code2 },
        { name: "SQL / MySQL", icon: Database },
        { name: "REST API Design", icon: Globe },
      ],
    },
    {
      label: "Machine Learning",
      skills: [
        { name: "TensorFlow", icon: Brain },
        { name: "scikit-learn", icon: Brain },
        { name: "CNN / Deep Learning", icon: Brain },
        { name: "Data Analysis", icon: Database },
      ],
    },
    {
      label: "Frontend & Tools",
      skills: [
        { name: "React", icon: Atom },
        { name: "JavaScript / TS", icon: FileCode },
        { name: "Tailwind CSS", icon: Paintbrush },
        { name: "Figma", icon: Paintbrush },
      ],
    },
  ];

  const soft: { name: string; icon: LucideIcon }[] = [
    { name: "Problem Solving", icon: RefreshCw },
    { name: "Communication", icon: MessageSquare },
    { name: "Teamwork", icon: Users },
    { name: "Adaptability", icon: Handshake },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-section-bg/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-accent text-xs font-mono tracking-widest uppercase text-center mb-2">Stack</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>

          <div className="space-y-6 mb-8">
            {categories.map((cat, ci) => (
              <div key={cat.label} className="text-center">
                <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">{cat.label}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {cat.skills.map((s, i) => (
                    <motion.span
                      key={s.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.15 + ci * 0.1 + i * 0.03, duration: 0.3 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border/50 rounded-lg text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
                    >
                      <s.icon className="w-3.5 h-3.5 text-accent" />
                      {s.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Soft Skills</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {soft.map((s, i) => (
                <motion.span
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.04, duration: 0.3 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-lg text-sm font-medium text-muted-foreground"
                >
                  <s.icon className="w-3.5 h-3.5" />
                  {s.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
