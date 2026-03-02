import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const links = [
    { icon: Mail, label: "gungdeari51@gmail.com", href: "mailto:gungdeari51@gmail.com" },
    { icon: Phone, label: "+62 857-3924-8003", href: "tel:+6285739248003" },
    { icon: Linkedin, label: "linkedin.com/in/agungarisaputra", href: "https://linkedin.com/in/agungarisaputra" },
    { icon: Github, label: "github.com/gungdeari", href: "https://github.com/gungdeari" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you — I'll respond within 24 hours." });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-spacing bg-section-bg/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-accent text-xs font-mono tracking-widest uppercase text-center mb-2">Contact</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            Looking for a backend developer who can also ship ML models? Let's talk about how I can help your team build scalable, production-ready systems.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="space-y-3">
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + index * 0.06, duration: 0.4 }}
                    className="flex items-center gap-3 p-3.5 bg-card rounded-xl border border-border/50 hover:border-primary/40 transition-colors group"
                  >
                    <link.icon className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="bg-card border-border/50 focus:border-primary h-11" />
                <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="bg-card border-border/50 focus:border-primary h-11" />
                <Textarea name="message" placeholder="Tell me about your project or opportunity..." value={formData.message} onChange={handleChange} required rows={5} className="bg-card border-border/50 focus:border-primary resize-none" />
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
