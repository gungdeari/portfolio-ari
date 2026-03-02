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

import senyumBaliImg from "@/assets/project-senyum-bali.png";
import senyumBaliImg2 from "@/assets/project-senyum-bali2.png";
import senyumBaliImg3 from "@/assets/project-senyum-bali3.png";
import senyumBaliImg4 from "@/assets/project-senyum-bali4.png";

import sipenariImg from "@/assets/project-sipenari.png";
import sipenariImg2 from "@/assets/project-sipenari2.png";
import sipenariImg3 from "@/assets/project-sipenari3.png";
import sipenariImg4 from "@/assets/project-sipenari4.png";
import sipenariImg5 from "@/assets/project-sipenari5.png";
import sipenariImg6 from "@/assets/project-sipenari6.png";
import sipenariImg7 from "@/assets/project-sipenari7.jpg";

import bangkit from "@/assets/Bangkit.jpeg";
import bangkit2 from "@/assets/Bangkit2.png";
import bangkit3 from "@/assets/Bangkit3.png";
import bangkit4 from "@/assets/Bangkit4.jpeg";
import bangkit5 from "@/assets/Bangkit5.jpeg";
import bangkit6 from "@/assets/Bangkit6.jpeg";
import bangkit7 from "@/assets/Bangkit7.jpeg";
import bangkit8 from "@/assets/Bangkit8.jpeg";
import bangkit9 from "@/assets/Bangkit9.jpg";
import bangkit10 from "@/assets/Bangkit10.jpg";

import suratGisImg from "@/assets/PPK.jpeg";
import suratGisImg2 from "@/assets/PPK2.png";
import suratGisImg3 from "@/assets/PPK3.png";
import suratGisImg4 from "@/assets/PPK4.png";
import suratGisImg5 from "@/assets/PPK5.png";
import suratGisImg6 from "@/assets/PPK6.png";
import suratGisImg7 from "@/assets/PPK7.jpg";
import suratGisImg8 from "@/assets/PPK8.jpg";
import { Certificate } from "crypto";


const toolIcons: Record<string, LucideIcon> = {
  Figma: Paintbrush, React: Atom, "Tailwind CSS": Paintbrush,
  Python: Code2, TensorFlow: Brain, "TensorFlow.js": Brain,
  "Express.js": Server, Laravel: Server, MySQL: Database,
  GIS: Globe, "scikit-learn": BarChart3, "Data Analysis": BarChart3,
  CNN: Cpu, JavaScript: FileCode,
};

const linkConfig: Record<
  string,
  {
    label: string;
    icon: LucideIcon;
    className: string;
    variant?: "default" | "outline";
  }
> = {
  live: {
    label: "Live",
    icon: ExternalLink,
    className: "bg-primary hover:bg-primary/90 text-primary-foreground",
    variant: "default",
  },
  github: {
    label: "Code",
    icon: Github,
    className: "border-border text-foreground hover:bg-muted",
    variant: "outline",
  },
  certificate: {
    label: "Credential",
    icon: FileCode,
    className: "bg-emerald-600 hover:bg-emerald-700 text-white",
    variant: "default",
  },
};

const mainProjects = [
  {
    title: "Senyum-Bali",
    year: "2025",
    images: [senyumBaliImg, senyumBaliImg2, senyumBaliImg3, senyumBaliImg4],
    role: "Frontend Developer",
    highlights: [
      "Developed a thesis-based dental education platform for post-Metatah care in collaboration with a dentistry student",
      "Designed the full UI in Figma and implemented a responsive frontend using React and Tailwind CSS",
      "Built interactive educational features including a drag-and-drop mini game to enhance engagement",
      "Developed using an AI-assisted workflow for faster prototyping, with manual refinement of logic, UI, and final implementation"
    ],
    tools: ["React", "Tailwind CSS", "Figma"],
    links: [
      { type: "live", url: "https://senyum-bali.netlify.app"}
    ]
  },
  {
    title: "Sipenari",
    year: "2024",
    images: [sipenariImg, sipenariImg2, sipenariImg3, sipenariImg4, sipenariImg5, sipenariImg6, sipenariImg7],
    role: "Machine Learning & Backend Developer",
    highlights: [
      "Developed a Sequential CNN model trained on 1,761 curated Balinese dance images across 7 classes",
      "Achieved 90.12% classification accuracy through manual hyperparameter tuning and data augmentation",
      "Converted and deployed the model using TensorFlow.js for real-time browser-based inference",
      "Built an Express.js backend to handle image processing and prediction workflows",
      "Recognized as Top 50 Product Track at Bangkit Academy 2024",
      "Research published at ICUFN 2025: An Efficient CNN-Based Model for Balinese Dance Classification"
    ],
    tools: ["Python", "TensorFlow", "TensorFlow.js", "Express.js"],
    links: [
      { type: "github", url: "#"}
    ]
  },
  {
    title: "Bangkit Machine Learning Cohort",
    year: "2024",
    images: [bangkit2, bangkit, bangkit3, bangkit4, bangkit5, bangkit6, bangkit7, bangkit8, bangkit9, bangkit10],
    role: "Machine Learning",
    highlights: [
      "Completed 700+ hours of structured learning in Machine Learning, Data Analytics, Deep Learning, and AI deployment with 90+ average performance.",
      "Built end-to-end ML pipelines including data preprocessing, feature engineering, model training, evaluation, and deployment.",
      "Developed supervised and unsupervised learning models using Scikit-learn and TensorFlow (CNN, Neural Networks).",
      "Applied advanced deep learning techniques and optimized models using TensorFlow.",
      "Deployed machine learning models to web environments using TensorFlow.js integration.",
      "Completed a 200-hour Capstone Project delivering a production-ready ML solution in a cross-functional team."
    ],
    tools: ["Python", "TensorFlow", "TensorFlow.js", "Express.js"],
    links: [ 
      { type: "certificate", url:"/files/Bangkit-ari.pdf" }
    ]
  },
  {
    title: "Surat & GIS Desa Batur Tengah",
    year: "2023",
    images: [suratGisImg, suratGisImg2, suratGisImg3, suratGisImg4, suratGisImg5, suratGisImg6, suratGisImg7, suratGisImg8, suratGisImg],
    role: "Backend & System Developer",
    highlights: [
      "Built a fully online village letter management system using Laravel, replacing manual paper-based workflows",
      "Implemented multi-role dashboards (Residents, IT Staff, Village Head, Traditional Leaders) with role-based access control",
      "Enabled digital document generation with PDF export and barcode-based signature verification",
      "Integrated GIS mapping for 20+ cultural tourism locations to support local promotion",
      "Developed under the MBKM (Merdeka Belajar Kampus Merdeka) funded community service program",
    ],
    tools: ["Laravel", "MySQL", "GIS"],
    links: [
      { type: "github", url: "/files/982. STMIK Primakara __ Anak Agung Gede Ari Saputra.pdf"}
    ]
  },
];

const academicProjects = [
  { 
    title: "Decision Tree for Athlete Exercise Recommendations", 
    description: "A machine learning model that generates personalized training recommendations based on athlete performance data using Decision Tree classification.", 
    tools: ["Python", "scikit-learn"], 
    icon: BarChart3 
  },
  { 
    title: "SAW-Based Yoga Movement Recommender", 
    description: "Built a SAW-based decision support system to rank and recommend suitable yoga movements using multi-criteria evaluation. Deployed with Laravel and developed an admin dashboard for dynamic content and criteria management.", 
    tools: ["Python", "Data Analysis", "Laravel"], 
    icon: Cpu 
  },
  { 
    title: "CNN Fish Freshness Classification", 
    description: "A deep learning model that classifies fish freshness from images using Convolutional Neural Networks, focusing on visual feature extraction and image-based prediction.", 
    tools: ["TensorFlow", "CNN", "Python"], 
    icon: Brain 
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
          <p className="text-xs font-mono text-accent uppercase tracking-widest text-center mb-6">What I Built</p>

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
                      <div className="flex gap-2 flex-wrap">
                        {project.links?.map((linkItem, i) => {
                          const config = linkConfig[linkItem.type as keyof typeof linkConfig];
                          if (!config) return null;

                          const Icon = config.icon;

                          return (
                            <Button
                              key={i}
                              size="sm"
                              variant={config.variant ?? "default"}
                              className={`h-8 text-xs ${config.className}`}
                              asChild
                            >
                              <a
                                href={linkItem.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Icon className="mr-1.5 h-3.5 w-3.5" />
                                {config.label}
                              </a>
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right: Image Gallery */}
                  <div className="md:w-[45%] flex flex-col">
                    {/* Main image */}
                    <div
                      className="relative group cursor-pointer h-[250px] sm:h-[300px] md:h-[320px] lg:h-[350px] overflow-hidden"
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
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {academicProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.08, duration: 0.4 }}
                className="p-4 bg-muted/50 rounded-xl border border-border/40 hover:shadow-md transition"
              >
                <div className="flex items-center gap-2 mb-2">
                  <project.icon className="w-4 h-4 text-accent" />
                  <h4 className="text-sm font-semibold">{project.title}</h4>
                </div>

                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-0.5 bg-background rounded text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>


          {/* ── Professional Experience ── */}
          {/* <p className="text-xs font-mono text-accent uppercase tracking-widest text-center mb-6">Roles & Responsibilities</p> */}

          {/* <div className="space-y-4">
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
          </div> */}
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
