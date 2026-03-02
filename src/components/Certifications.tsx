import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      issuer: "Dicoding",
      category: "Software Development",
      link: "/files/Dicoding.pdf",
    },
    {
      title: "Full-Stack Developer with Laravel: Web Travel",
      issuer: "Buildwithangga",
      category: "Software Development",
      link: "/files/full-stack-developer-with-laravel-web-travel-ari-saputra.pdf",
    },
    {
      title: "Software Development (System Analyst)",
      issuer: "Badan Nasional Sertifikat Profesi",
      category: "Professional",
      link: "/files/Bnsp.pdf",
    },
    {
      title: "Machine Learning Specialization Course",
      issuer: "Coursera",
      category: "Machine Learning",
      link: "/files/ML-course.pdf",
    },
  ];

  return (
    <section id="certifications" className="section-spacing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-accent text-xs font-mono tracking-widest uppercase text-center mb-2">Credentials</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
            Certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => {
              const inner = (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.4 }}
                  className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/40 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-0.5 flex items-center gap-1.5">
                        {cert.title}
                        {cert.link && <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />}
                      </h3>
                      <p className="text-xs text-accent font-medium">{cert.issuer}</p>
                      <span className="inline-block mt-2 px-2.5 py-0.5 bg-muted rounded text-xs text-muted-foreground">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );

              return cert.link ? (
                <a key={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                  {inner}
                </a>
              ) : (
                <div key={cert.title}>{inner}</div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
