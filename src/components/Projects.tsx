import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers, Users, Cpu, Globe, Brain, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mainProjects = [
    {
      title: "Senyum-Bali",
      year: "2025",
      icon: Globe,
      description:
        "Platform edukasi kesehatan gigi pasca tradisi Metatah/Potong Gigi di Bali dengan UI modern dan interaktif.",
      problem: "Kurangnya edukasi kesehatan gigi pasca ritual Metatah di kalangan masyarakat Bali.",
      solution: "Membangun platform web interaktif dengan konten edukatif yang mudah diakses dan visual yang menarik.",
      impact: "Meningkatkan awareness kesehatan gigi pasca tradisi melalui platform digital yang accessible.",
      role: "Frontend Developer",
      tools: ["Figma", "React", "Tailwind CSS"],
      link: "https://senyum-bali.netlify.app",
    },
    {
      title: "Sipenari",
      year: "2024",
      icon: Brain,
      description:
        "Web-based Balinese dance recognition system using CNN and TensorFlow.js.",
      problem: "Difficulty in identifying and classifying traditional Balinese dances for preservation and education.",
      solution: "Built a CNN model trained on Balinese dance images, deployed via TensorFlow.js on a web app with Express.js backend.",
      impact: "Achieved Top 50 Product Track at Bangkit 2024. Enabled real-time dance classification in the browser.",
      role: "ML & Web Developer",
      tools: ["Python", "TensorFlow", "TensorFlow.js", "Express.js"],
      github: "#",
    },
    {
      title: "Sistem Manajemen Surat & GIS Desa Batur Tengah",
      year: "2023",
      icon: Layers,
      description:
        "Sistem manajemen surat digital dan pemetaan geografis wisata budaya untuk Desa Batur Tengah.",
      problem: "Pengelolaan surat desa masih manual dan data geografis wisata budaya belum terdokumentasi secara digital.",
      solution: "Membangun sistem manajemen surat berbasis Laravel dengan integrasi GIS untuk pemetaan wisata budaya.",
      impact: "Digitalisasi administrasi desa dan pemetaan 20+ lokasi wisata budaya dalam program PPK ORMAWA.",
      role: "Backend & System Developer",
      tools: ["Laravel", "MySQL", "GIS"],
    },
  ];

  const academicProjects = [
    {
      title: "Decision Tree for Athlete Exercise Recommendations",
      description: "ML model for personalized physical exercise recommendations based on athlete data and performance metrics.",
      tools: ["Python", "scikit-learn"],
      icon: BarChart3,
    },
    {
      title: "Simple Additive Weighting - Snana Yoga",
      description: "Decision support system for yoga movement recommendations using weighted scoring method.",
      tools: ["Python", "Data Analysis"],
      icon: Cpu,
    },
    {
      title: "CNN Fish Freshness Classification",
      description: "Deep learning model to classify fish freshness levels from images using Convolutional Neural Networks.",
      tools: ["TensorFlow", "CNN", "Python"],
      icon: Brain,
    },
  ];

  return (
    <section id="projects" className="section-spacing bg-section-bg/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm font-medium text-center mb-2 tracking-widest uppercase">Portfolio</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-4">
            Real-world projects showcasing my skills in data analysis, machine learning, and web development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12 sm:mb-16" />

          {/* Main Projects — full-width stacked cards */}
          <div className="space-y-8 sm:space-y-10 mb-16 sm:mb-20">
            {mainProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 card-hover"
              >
                <div className="p-6 sm:p-8 md:p-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-accent/15 rounded-xl">
                        <project.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                        <p className="text-sm text-accent font-medium">{project.role}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full font-medium self-start sm:self-auto">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-foreground/80 mb-6 text-sm sm:text-base leading-relaxed">{project.description}</p>

                  {/* Problem / Solution / Impact */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-muted/50 rounded-xl p-4">
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Problem</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-4">
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Solution</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{project.solution}</p>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-4">
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Impact</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{project.impact}</p>
                    </div>
                  </div>

                  {/* Tools & Links */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.link && (
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary/50 text-primary hover:bg-primary/10"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Academic Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center">
              Academic <span className="text-gradient">Consultations</span>
            </h3>
            <p className="text-muted-foreground text-center text-sm mb-8">
              ML & data projects I consulted on for academic final projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {academicProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="bg-card border border-border/50 rounded-xl p-5 card-hover group"
                >
                  <div className="p-2 bg-accent/10 rounded-lg w-fit mb-3 group-hover:bg-accent/20 transition-colors">
                    <project.icon className="w-4 h-4 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{project.title}</h4>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
