import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-20 md:pt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-accent text-xs font-mono tracking-widest uppercase mb-4">
              📍 Ubud, Bali
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight tracking-tight">
              Anak Agung Gede
              <br />
              <span className="text-gradient">Ari Saputra</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium mb-3">
              Backend Developer
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I build reliable APIs, design scalable systems, and integrate machine learning into production — turning complex requirements into clean, working software.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                onClick={() => window.open('/cv.pdf', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-border shadow-lg">
              <img
                src={profileAvatar}
                alt="Anak Agung Gede Ari Saputra"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
