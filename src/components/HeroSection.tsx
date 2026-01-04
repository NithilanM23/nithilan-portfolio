import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-photo.png";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-medium text-foreground">Hello</span>
              <span className="text-primary text-2xl">.</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-primary" />
              <span className="text-lg text-muted-foreground italic">I'm Nithilan</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              AI & DATA
              <br />
              <span className="text-gradient">SCIENTIST</span>
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              Building practical AI systems that combine machine learning, data analysis, 
              and scalable backend solutions. Specializing in LLMs, RAG Systems, and Data Analytics.
            </p>

            <div className="flex flex-wrap gap-4">
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
              className="flex gap-8 mt-12"
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

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            {/* Glowing circle background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border-[6px] border-primary/60 animate-glow-pulse" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-primary/10 blur-3xl animate-glow-pulse" />
            </div>
            
            {/* Profile Image */}
            <div className="relative z-10">
              <img
                src={profilePhoto}
                alt="Nithilan M - AI & Data Science Engineer"
                className="w-[300px] h-[400px] md:w-[350px] md:h-[450px] object-cover object-top rounded-b-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
