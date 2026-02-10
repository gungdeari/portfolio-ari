import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technical = ["Python", "SQL", "TensorFlow", "React", "Laravel", "JavaScript", "HTML & CSS", "Figma"];
  const soft = ["Problem Solving", "Communication", "Teamwork", "Adaptability"];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-section-bg/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-10" />

          <div className="mb-6">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Technical</p>
            <div className="flex flex-wrap justify-center gap-2">
              {technical.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.04, duration: 0.3 }}
                  className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Soft Skills</p>
            <div className="flex flex-wrap justify-center gap-2">
              {soft.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.04, duration: 0.3 }}
                  className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium text-muted-foreground"
                >
                  {s}
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
