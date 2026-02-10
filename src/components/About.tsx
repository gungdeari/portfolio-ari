import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const strengths = [
    { icon: Target, title: "Disiplin", description: "Structured and methodical approach" },
    { icon: Lightbulb, title: "Problem-Solver", description: "Analytical thinking, creative solutions" },
    { icon: Users, title: "Tech Passion", description: "Data, ML, and web development" },
  ];

  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-10" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base text-foreground/80 leading-relaxed text-center mb-10 max-w-3xl mx-auto"
          >
            Fresh graduate Sistem Informasi yang berpengalaman dalam pengolahan data (Python, SQL, Excel),
            machine learning, serta pengembangan UI/UX dan website. Siap berkontribusi dalam berbagai peran
            teknologi—dari data analysis hingga web development.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="bg-card rounded-xl p-5 border border-border/50 text-center card-hover"
              >
                <s.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-xs">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
