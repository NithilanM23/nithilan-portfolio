import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xl font-medium text-foreground">Hello</span>
            <span className="text-primary text-2xl">.</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-primary" />
            <span className="text-lg text-muted-foreground italic">I'm Nithilan</span>
            <div className="w-12 h-0.5 bg-primary" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            AI & DATA
            <br />
            <span className="text-gradient">SCIENTIST</span>
          </h1>

          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Building practical AI systems that combine machine learning, data analysis, 
            and scalable backend solutions. Specializing in LLMs, RAG Systems, and Data Analytics.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg">
              View Projects
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Contact Me
              <Send className="w-5 h-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-8 md:gap-12 mt-12"
          >
            <div>
              <div className="text-3xl font-bold text-primary">8.9</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">AIR 5</div>
              <div className="text-sm text-muted-foreground">LLMs Course</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">AIR 16</div>
              <div className="text-sm text-muted-foreground">Responsible AI</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
