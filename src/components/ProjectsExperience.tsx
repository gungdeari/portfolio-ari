import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink, Github, Globe, Brain, Layers, Briefcase,
  Paintbrush, Atom, Code2, Server, Database, BarChart3, Cpu, FileCode,
  ChevronLeft, ChevronRight, ZoomIn
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

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
    images: [senyumBaliImg],
    role: "Frontend Developer",
    highlights: [
      "Built interactive dental health education platform with React & Tailwind CSS",
      "Designed responsive UI/UX in Figma, then implemented pixel-perfect frontend",
      "Deployed on Netlify — accessible to Balinese communities post-Metatah ritual",
    ],
    tools: ["React", "Tailwind CSS", "Figma"],
    link: "https://senyum-bali.netlify.app",
  },
  {
    title: "Sipenari",
    year: "2024",
    images: [sipenariImg],
    role: "ML & Backend Developer",
    highlights: [
      "Trained CNN model on 1,000+ Balinese dance images — 92% classification accuracy",
      "Deployed model via TensorFlow.js for real-time browser inference",
      "Built Express.js backend API for image processing pipeline",
      "Achieved Top 50 Product Track at Bangkit 2024",
    ],
    tools: ["Python", "TensorFlow", "TensorFlow.js", "Express.js"],
    github: "#",
  },
  {
    title: "Surat & GIS Desa Batur Tengah",
    year: "2023",
    images: [suratGisImg],
    role: "Backend & System Developer",
    highlights: [
      "Designed and built Laravel REST API for village letter management system",
      "Integrated GIS mapping for 20+ cultural tourism locations",
      "Replaced manual paper-based workflow with fully digital administration",
    ],
    tools: ["Laravel", "MySQL", "GIS"],
  },
];

const academicProjects = [
  { title: "Decision Tree for Athlete Exercise Recommendations", tools: ["Python", "scikit-learn"], icon: BarChart3 },
  { title: "SAW-Based Yoga Movement Recommender", tools: ["Python", "Data Analysis"], icon: Cpu },
  { title: "CNN Fish Freshness Classification", tools: ["TensorFlow", "CNN", "Python"], icon: Brain },
];

const experiences = [
  {
    title: "Machine Learning Cohort",
    org: "Bangkit Academy 2024 · Google / Dicoding",
    period: "2024",
    points: [
      "Built capstone app 'Ageman' — Balinese dance recognition using CNN",
      "Achieved Top 50 Product Track out of 800+ teams",
      "Completed TensorFlow Developer Certificate simulation",
    ],
  },
  {
    title: "IT Developer",
    org: "PPK ORMAWA",
    period: "2023",
    points: [
      "Built letter management system + GIS for Desa Batur Tengah",
      "Led technical architecture and database design",
    ],
  },
  {
    title: "Freelance Developer",
    org: "Independent",
    period: "2022 – Present",
    points: [
      "Delivered educational web projects for clients",
      "Provided ML & data consultation for academic final projects",
    ],
  },
];

const ProjectsExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryTitle, setGalleryTitle] = useState("");

  const openGallery = (images: string[], title: string, index = 0) => {
    setGalleryImages(images);
    setGalleryTitle(title);
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  return (
    <section id="projects" className="section-spacing bg-section-bg/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <p className="text-accent text-xs font-mono tracking-widest uppercase text-center mb-2">Portfolio</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
            Projects & <span className="text-gradient">Experience</span>
          </h2>

          {/* ── Project Experience ── */}
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-6">What I Built</p>

          <div className="space-y-6 mb-16">
            {mainProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left: Description */}
                  <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                          <p className="text-xs text-accent font-medium">{project.role}</p>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
                      </div>

                      <ul className="space-y-1.5 mb-5">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="text-sm text-foreground/75 flex items-start gap-2">
                            <span className="text-accent mt-1 text-xs">▸</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool) => {
                          const Icon = toolIcons[tool];
                          return (
                            <span key={tool} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-muted rounded-full text-muted-foreground font-medium">
                              {Icon && <Icon className="w-3 h-3" />} {tool}
                            </span>
                          );
                        })}
                      </div>
                      <div className="flex gap-2">
                        {project.link && (
                          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground h-8 text-xs" onClick={() => window.open(project.link, "_blank")}>
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live
                          </Button>
                        )}
                        {project.github && (
                          <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-muted h-8 text-xs" onClick={() => window.open(project.github, "_blank")}>
                            <Github className="mr-1.5 h-3.5 w-3.5" /> Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: Image Gallery */}
                  <div className="md:w-[45%] flex flex-col">
                    {/* Main image */}
                    <div
                      className="relative group cursor-pointer flex-1 min-h-[200px] md:min-h-0"
                      onClick={() => openGallery(project.images, project.title, 0)}
                    >
                      <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-white bg-black/50 px-3 py-1.5 rounded-full text-xs font-medium">
                          <ZoomIn className="w-3.5 h-3.5" />
                          View
                        </span>
                      </div>
                    </div>
                    {/* Thumbnail strip for multiple images */}
                    {project.images.length > 1 && (
                      <div className="flex gap-1 p-1 bg-muted/50">
                        {project.images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => openGallery(project.images, project.title, i)}
                            className="flex-1 h-16 overflow-hidden rounded-sm opacity-70 hover:opacity-100 transition-opacity"
                          >
                            <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Academic Consultations ── */}
          <motion.div initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.5 }}>
            <div className="bg-card border border-border/50 rounded-2xl p-5 sm:p-7 mb-16">
              <h3 className="text-base font-bold mb-1">Academic Consultations</h3>
              <p className="text-xs text-muted-foreground mb-4">ML & data projects I consulted on for academic theses.</p>
              <div className="space-y-3">
                {academicProjects.map((project, index) => (
                  <motion.div key={project.title} initial={{ opacity: 0, x: -15 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.6 + index * 0.08, duration: 0.4 }} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <project.icon className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm font-medium flex-1">{project.title}</span>
                    <div className="flex gap-1 shrink-0">
                      {project.tools.map((tool) => (
                        <span key={tool} className="text-xs px-2 py-0.5 bg-background rounded text-muted-foreground">{tool}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Professional Experience ── */}
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-6">Roles & Responsibilities</p>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div key={exp.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }} className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <div>
                    <h4 className="font-bold text-sm">{exp.title}</h4>
                    <p className="text-xs text-muted-foreground">{exp.org}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                </div>
                <ul className="space-y-1">
                  {exp.points.map((p, i) => (
                    <li key={i} className="text-xs text-foreground/70 flex items-start gap-2">
                      <span className="text-accent mt-0.5">▸</span><span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gallery Dialog */}
      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black/95 border-none overflow-hidden">
          <DialogTitle className="sr-only">{galleryTitle} Gallery</DialogTitle>
          <div className="relative">
            <img src={galleryImages[galleryIndex]} alt={`${galleryTitle} - ${galleryIndex + 1}`} className="w-full max-h-[80vh] object-contain" />
            {galleryImages.length > 1 && (
              <>
                <button onClick={() => setGalleryIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => setGalleryIndex((i) => (i + 1) % galleryImages.length)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {galleryImages.map((_, i) => (
                    <button key={i} onClick={() => setGalleryIndex(i)} className={`w-2 h-2 rounded-full transition-colors ${i === galleryIndex ? "bg-white" : "bg-white/40"}`} />
                  ))}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsExperience;
