import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, FileText } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-spacing bg-section-bg/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Education & <span className="text-gradient">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-16" />

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border/50 card-hover mb-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Universitas Primakara</h3>
                <p className="text-accent font-medium mb-1">
                  Bachelor of Information Systems
                </p>
                <p className="text-sm text-muted-foreground mb-3">2021 - 2025</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="font-semibold">GPA: 3.90 / 4.00</span>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm font-medium mb-1">Final Thesis:</p>
                  <p className="text-sm text-foreground/80">
                    Optimasi CNN untuk Klasifikasi Tari Bali dengan Augmentasi Data dan
                    Hyperparameter Tuning
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border/50 card-hover"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Publications</h3>
                <div className="bg-muted rounded-lg p-5">
                  <h4 className="font-semibold mb-2 text-base">
                    An Efficient CNN-Based Model for Balinese Dance Classification with
                    Hyperparameter Optimization
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    2025 Sixteenth International Conference on Ubiquitous and Future Networks
                    (ICUFN)
                  </p>
                  <a
                    href="https://doi.org/10.1109/ICUFN65838.2025.11169987"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline inline-flex items-center gap-1"
                  >
                    DOI: 10.1109/ICUFN65838.2025.11169987
                    <span className="text-xs">→</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
