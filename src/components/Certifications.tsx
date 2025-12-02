import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Data Analysis with Python",
      issuer: "Dicoding",
      category: "Data Science",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      category: "Machine Learning",
    },
    {
      title: "Software Development (System Analyst)",
      issuer: "BNSP",
      category: "Professional",
    },
    {
      title: "Business Intelligence Associate",
      issuer: "Logical Operations",
      category: "Business Intelligence",
    },
  ];

  return (
    <section id="certifications" className="section-spacing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="bg-card rounded-xl p-6 border border-border/50 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 text-lg">{cert.title}</h3>
                    <p className="text-accent text-sm font-medium mb-2">{cert.issuer}</p>
                    <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                      {cert.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
