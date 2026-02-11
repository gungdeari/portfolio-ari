import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink, Github, Globe, Brain, Layers, Briefcase,
  Paintbrush, Atom, Code2, Server, Database, BarChart3, Cpu, FileCode
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import senyumBaliImg from "@/assets/project-senyum-bali.jpg";
import sipenariImg from "@/assets/project-sipenari.jpg";
import suratGisImg from "@/assets/project-surat-gis.jpg";

const toolIcons: Record<string, LucideIcon> = {
  Figma: Paintbrush, React: Atom, "Tailwind CSS": Paintbrush,
  Python: Code2, TensorFlow: Brain, "TensorFlow.js": Brain,
  "Express.js": Server, Laravel: Server, MySQL: Database,
  GIS: Globe, "scikit-learn": BarChart3, "Data Analysis": BarChart3,
  CNN: Cpu, JavaScript: FileCode,
};

const mainProjects = [
  {
    title: "Senyum-Bali",
    year: "2025",
    icon: Globe,
    image: senyumBaliImg,
    description: "Platform edukasi kesehatan gigi pasca tradisi Metatah/Potong Gigi di Bali dengan UI modern dan interaktif.",
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
    image: sipenariImg,
    description: "Web-based Balinese dance recognition system using CNN and TensorFlow.js.",
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
    image: suratGisImg,
    description: "Sistem manajemen surat digital dan pemetaan geografis wisata budaya untuk Desa Batur Tengah.",
    problem: "Pengelolaan surat desa masih manual dan data geografis wisata budaya belum terdokumentasi secara digital.",
    solution: "Membangun sistem manajemen surat berbasis Laravel dengan integrasi GIS untuk pemetaan wisata budaya.",
    impact: "Digitalisasi administrasi desa dan pemetaan 20+ lokasi wisata budaya dalam program PPK ORMAWA.",
    role: "Backend & System Developer",
    tools: ["Laravel", "MySQL", "GIS"],
  },
];

const academicProjects = [
  { title: "Decision Tree for Athlete Exercise Recommendations", description: "ML model for personalized physical exercise recommendations based on athlete data.", tools: ["Python", "scikit-learn"], icon: BarChart3 },
  { title: "Simple Additive Weighting - Snana Yoga", description: "Decision support system for yoga movement recommendations using weighted scoring.", tools: ["Python", "Data Analysis"], icon: Cpu },
  { title: "CNN Fish Freshness Classification", description: "Deep learning model to classify fish freshness levels from images using CNN.", tools: ["TensorFlow", "CNN", "Python"], icon: Brain },
];

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
    ],
    type: "Freelance",
  },
];

const ProjectsExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-spacing bg-section-bg/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-accent text-sm font-medium text-center mb-2 tracking-widest uppercase">Portfolio</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Projects & <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-12 sm:mb-16" />

          {/* Main Projects */}
          <div className="space-y-8 sm:space-y-10 mb-16">
            {mainProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 card-hover"
              >
                {/* Project Image */}
                <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-accent/15 rounded-xl">
                        <project.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                        <p className="text-sm text-accent font-medium">{project.role}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full font-medium self-start sm:self-auto">{project.year}</span>
                  </div>

                  <p className="text-foreground/80 mb-6 text-sm sm:text-base leading-relaxed">{project.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[{ label: "Problem", text: project.problem }, { label: "Solution", text: project.solution }, { label: "Impact", text: project.impact }].map((item) => (
                      <div key={item.label} className="bg-muted/50 rounded-xl p-4">
                        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{item.label}</p>
                        <p className="text-sm text-foreground/70 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => {
                        const ToolIcon = toolIcons[tool];
                        return (
                          <span key={tool} className="inline-flex items-center gap-1 text-xs px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
                            {ToolIcon && <ToolIcon className="w-3 h-3" />} {tool}
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex gap-2">
                      {project.link && (
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open(project.link, "_blank")}>
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Button>
                      )}
                      {project.github && (
                        <Button size="sm" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10" onClick={() => window.open(project.github, "_blank")}>
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Academic Projects */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 0.6 }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center">Academic <span className="text-gradient">Consultations</span></h3>
            <p className="text-muted-foreground text-center text-sm mb-8">ML & data projects I consulted on for academic final projects.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
              {academicProjects.map((project, index) => (
                <motion.div key={project.title} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }} className="bg-card border border-border/50 rounded-xl p-5 card-hover group">
                  <div className="p-2 bg-accent/10 rounded-lg w-fit mb-3 group-hover:bg-accent/20 transition-colors">
                    <project.icon className="w-4 h-4 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{project.title}</h4>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool) => {
                      const ToolIcon = toolIcons[tool];
                      return (
                        <span key={tool} className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">
                          {ToolIcon && <ToolIcon className="w-3 h-3" />} {tool}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8, duration: 0.6 }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center">Professional <span className="text-gradient">Experience</span></h3>
            <p className="text-muted-foreground text-center text-sm mb-8">Key roles and programs that shaped my career.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {experiences.map((exp, index) => (
                <motion.div key={exp.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }} className="bg-card rounded-xl p-5 border border-border/50 card-hover">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-accent/20 rounded-lg">
                      <Briefcase className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{exp.title}</h4>
                      <p className="text-xs text-accent font-medium">{exp.organization}{exp.partner && <span className="text-muted-foreground"> · {exp.partner}</span>}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">{exp.period}</span>
                        <span className="px-2 py-0.5 bg-muted rounded text-xs">{exp.type}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="text-xs text-foreground/70 flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span><span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsExperience;
