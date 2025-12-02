import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Machine Learning Cohort",
      organization: "Bangkit Academy 2024",
      partner: "Dicoding / Google",
      period: "2024",
      achievements: [
        "Built capstone app 'Ageman' for Balinese dance recognition using ML",
        "Achieved Top 50 Product Track",
        "Completed TensorFlow Developer Certificate simulation",
      ],
      type: "Program",
    },
    {
      title: "IT Developer",
      organization: "PPK ORMAWA",
      period: "2023",
      achievements: [
        "Built letter management system + GIS for Desa Batur Tengah",
        "Developed digital documentation and geographic mapping system",
        "Collaborated with local government for cultural heritage mapping",
      ],
      type: "Project",
    },
    {
      title: "Freelance Developer",
      organization: "Independent",
      period: "2022 - Present",
      achievements: [
        "Developed educational website projects",
        "Provided ML and data consultation for academic final projects",
        "Created custom web solutions for various clients",
      ],
      type: "Freelance",
    },
  ];

  return (
    <section id="experience" className="section-spacing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-16" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/20 transform -translate-x-1/2 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className={`relative mb-8 sm:mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block ${
                    index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                  }`}
                />

                <div className="bg-card rounded-xl p-5 sm:p-6 border border-border/50 card-hover">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-accent/20 rounded-lg">
                      <Briefcase className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-accent font-medium mb-1">
                        {exp.organization}
                        {exp.partner && <span className="text-muted-foreground"> - {exp.partner}</span>}
                      </p>
                      <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                      <span className="inline-block px-2 py-1 bg-muted rounded text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
