import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Database, Brain } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    { icon: Server, title: "API & Backend", description: "REST APIs, server architecture, and system design" },
    { icon: Database, title: "Database Design", description: "Schema design, query optimization, data modeling" },
    { icon: Brain, title: "Machine Learning", description: "Model development, training pipelines, deployment" },
  ];

  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-accent text-xs font-mono tracking-widest uppercase text-center mb-2">About</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
            Who I <span className="text-gradient">Am</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-sm sm:text-base text-foreground/80 leading-relaxed text-center mb-10"
          >
            Backend-focused engineer with hands-on experience in API development, relational database design, and server-side architecture. I bring additional depth in machine learning — from training CNN models to deploying them in production. I write clean, maintainable code and care about system reliability as much as shipping speed.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.4 }}
                className="bg-card rounded-xl p-5 border border-border/50 text-center hover:border-primary/40 transition-colors"
              >
                <p.icon className="w-7 h-7 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
