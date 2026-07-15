import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, ChevronDown, GraduationCap, Trophy, Award } from "lucide-react";
import { Button } from "./ui/button";
import { useRef, useEffect, useState } from "react";
import CursorTrail from "./CursorTrail";

import VariableProximity from "./VariableProximity";
import Lightfall from "./Lightfall";


// Animated counter hook
const useCounter = (end: number, duration: number = 2000, decimals: number = 0) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Number((easeProgress * end).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, decimals, hasAnimated]);

  return count;
};

// Typing animation hook for rotating text
const useTypingRotation = (phrases: string[], typingSpeed: number = 80, pauseDuration: number = 2000) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex, phrases, typingSpeed, pauseDuration]);

  return displayText;
};

// Role badge with hover state
const RoleBadge = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center justify-center mb-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <span
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 backdrop-blur-md border border-primary/30 text-primary shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-sm font-medium tracking-premium cursor-default transition-all duration-300 hover:bg-background/80 hover:border-primary/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        <AnimatePresence mode="wait">
          <motion.span
            key={isHovered ? "hover" : "default"}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {isHovered ? "Engineer who ships, not just experiments" : "AI & Data Science Engineer"}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.div>
  );
};

// Typing tagline component
const TypingTagline = () => {
  const phrases = [
    "Finding the racing line through data",
    "Powered by Data & Downforce",
    "Training models faster than pit stops",
    "Building AI at race pace",
    "Always chasing the next millisecond",
    "Debugging reality with Python",
    "Convincing data to behave",
    "Finding patterns in chaos",
    "Powered by caffeine and curiosity",
    "Making statistics look cool",
    "Teaching machines new tricks",
    "Making GPUs earn their salary",
    "Touching grass occasionally",
    "Prompting responsibly",
    "Teaching transformers manners",
    "Currently arguing with a model"
  ];
  const displayText = useTypingRotation(phrases, 70, 2500);

  return (
    <motion.div
      className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed-premium flex items-center justify-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <span>I am</span>
      <span className="text-primary font-medium min-w-[180px] text-left">
        {displayText}
        <span className="animate-pulse ml-0.5">|</span>
      </span>
    </motion.div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [splitTextDone, setSplitTextDone] = useState(false);
  const [mountBackground, setMountBackground] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMountBackground(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cgpa = useCounter(9.04, 2000, 2);
  const llmRank = useCounter(5, 1500);
  const aiRank = useCounter(16, 1800);

  const stats = [
    {
      icon: GraduationCap,
      value: cgpa,
      suffix: '',
      label: 'CGPA',
      sublabel: 'Academic Score'
    },
    {
      icon: Trophy,
      value: llmRank,
      prefix: 'AIR ',
      label: 'LLMs Course',
      sublabel: 'All India Rank'
    },
    {
      icon: Award,
      value: aiRank,
      prefix: 'AIR ',
      label: 'Responsible AI',
      sublabel: 'All India Rank'
    },
  ];

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-32 pb-16">
      {/* Cursor Trail Effect */}
      {/* <CursorTrail /> */}

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10" />

      {/* Lightfall 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <AnimatePresence>
          {mountBackground && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Lightfall
                colors={['#cd6a00ff', '#a95700ff', '#cd6a00ff']} // Pure white, vibrant orange, and deep rose/red
                backgroundColor="#cd6a00ff" // Restored to a clean orange glow
                speed={0.3}
                streakCount={1}
                density={0.5}
                backgroundGlow={0.8}
                glow={1.3}
                streakWidth={1}
                twinkle={1.5}
                zoom={2}
                mouseInteraction={true}
                mouseStrength={0.5}
                mouseRadius={3}
                mouseDampening={0.15}
                mixBlendMode="screen"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Transition Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <CursorTrail />

      <motion.div
        style={{ opacity, y, scale }}
        className="section-container relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Role Badge with hover interaction */}
          <RoleBadge />

          {/* Name intro */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <span className="text-lg text-foreground font-semibold italic tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">I'm Nithilan</span>
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>

          {/* Main headline */}
          <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 leading-none tracking-tight flex flex-col items-center justify-center variable-proximity drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            <VariableProximity
              label="AI & DATA"
              className="inline-block cursor-default"
              fromFontVariationSettings="'wght' 700, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={sectionRef}
              radius={150}
              falloff="linear"
              animateIn={true}
              staggerDelay={0.03}
              animationDelay={0.5}
              enableHover={splitTextDone}
            />
            <span className="relative inline-block animate-float-smooth mt-2">
              <VariableProximity
                label="SCIENTIST"
                className="inline-block cursor-default"
                fromFontVariationSettings="'wght' 700, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={sectionRef}
                radius={150}
                falloff="linear"
                animateIn={true}
                staggerDelay={0.03}
                animationDelay={0.71}
                enableHover={splitTextDone}
                letterClassName="text-gradient"
                onAnimationComplete={() => {
                  setTimeout(() => setSplitTextDone(true), 100);
                }}
              />
              {/* Glow effect behind SCIENTIST */}
              <span className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 blur-3xl -z-10 rounded-lg animate-glow-pulse pointer-events-none" />
            </span>
          </div>

          {/* Personal one-liner */}
          <motion.div
            className="text-foreground/90 text-lg md:text-xl mb-4 max-w-xl mx-auto leading-relaxed-premium font-medium cursor-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <VariableProximity
              label="I turn real-world data into AI systems people actually use."
              className="variable-proximity-demo"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={sectionRef}
              radius={120}
              falloff="linear"
            />
          </motion.div>

          {/* Typing animation for focus areas */}
          <TypingTagline />

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group btn-premium"
            >
              View Projects
              <ArrowRight className="w-5 h-5 arrow-animate" />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group"
            >
              Contact Me
              <Send className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Button>
          </motion.div>

          {/* Stats Section with Glass Cards */}
          <motion.div
            id="stats-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <stat.icon className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground count-up">
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>
                <div className="text-xs text-primary font-medium mt-1 tracking-premium">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollToSection('about')}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Scroll</span>
        <motion.div className="scroll-bounce">
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
