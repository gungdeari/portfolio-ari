import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const strengths = [
    {
      icon: Target,
      title: "Disiplin",
      description: "Structured and methodical approach to problem-solving",
    },
    {
      icon: Lightbulb,
      title: "Problem-Solving Mindset",
      description: "Analytical thinking with creative solutions",
    },
    {
      icon: Users,
      title: "Passion in Tech",
      description: "Deep interest in data, ML, and web development",
    },
  ];

  return (
    <section id="about" className="section-spacing bg-section-bg/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card rounded-2xl p-6 sm:p-8 md:p-10 mb-12 border border-border/50 shadow-lg"
          >
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90 mb-6">
              Seorang fresh graduate Sistem Informasi yang memiliki ketertarikan kuat dalam
              mengubah ide menjadi solusi digital yang nyata. Berpengalaman dalam pengolahan data
              menggunakan Python, SQL, dan Excel, membangun model machine learning untuk
              menyelesaikan permasalahan nyata, serta merancang hingga mengembangkan UI/UX dan
              website berbasis kebutuhan pengguna.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/90">
              Menggabungkan kemampuan analitis, kreativitas desain, dan kemampuan teknis dalam
              pengembangan sistem, saya terbiasa bekerja secara terstruktur, memecahkan masalah
              dengan pendekatan logis, dan menyampaikan temuan atau solusi secara jelas kepada
              stakeholder. Siap beradaptasi dan berkontribusi dalam berbagai peran teknologi—mulai
              dari data, machine learning, hingga web development.
            </p>
          </motion.div>

          {/* Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="bg-card rounded-xl p-6 border border-border/50 card-hover"
              >
                <strength.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                <p className="text-muted-foreground text-sm">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
