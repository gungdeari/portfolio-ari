import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mainProjects = [
    {
      title: "Senyum-Bali",
      year: "2025",
      description:
        "Platform edukasi kesehatan gigi pasca tradisi Metatah/Potong Gigi di Bali dengan UI modern dan interaktif.",
      role: "Frontend Developer",
      tools: ["Figma", "React", "Tailwind CSS"],
      link: "https://senyum-bali.netlify.app",
      highlight: true,
    },
    {
      title: "Sipenari",
      year: "2024",
      description:
        "Web-based Balinese dance recognition system using CNN and TensorFlow.js, built with Express.js and integrated machine learning model.",
      role: "ML & Web Developer",
      tools: ["Python", "TensorFlow", "TensorFlow.js", "Express.js"],
      github: "#",
      highlight: true,
    },
    {
      title: "Sistem Manajemen Surat & GIS Desa Batur Tengah",
      year: "2023",
      description:
        "Sistem manajemen surat digital dan pemetaan geografis wisata budaya untuk Desa Batur Tengah dalam program PPK ORMAWA.",
      role: "Backend & System Developer",
      tools: ["Laravel", "MySQL", "GIS"],
      highlight: true,
    },
  ];

  const academicProjects = [
    {
      title: "Decision Tree for Athlete Exercise Recommendations",
      description: "ML model for personalized physical exercise recommendations",
      tools: ["Python", "scikit-learn"],
    },
    {
      title: "Simple Additive Weighting - Snana Yoga",
      description: "Decision support system for yoga movement recommendations",
      tools: ["Python", "Data Analysis"],
    },
    {
      title: "CNN Fish Freshness Classification",
      description: "Deep learning model to classify fish freshness levels",
      tools: ["TensorFlow", "CNN", "Python"],
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-16" />

          {/* Main Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {mainProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full bg-card border-border/50 hover:border-primary/50 transition-all duration-300 card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {project.year}
                      </span>
                    </div>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-accent mb-2">Role: {project.role}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.link && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary/10"
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
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Academic Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
              Academic Project <span className="text-gradient">Consultations</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {academicProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="bg-card border border-border/50 rounded-xl p-5 card-hover"
                >
                  <h4 className="font-semibold mb-2 text-sm">{project.title}</h4>
                  <p className="text-xs text-muted-foreground mb-3">{project.description}</p>
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
