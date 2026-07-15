import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import ViewModeToggle from "./ViewModeToggle";
import GlassSurface from "./GlassSurface";
import MagneticElement from "./MagneticElement";
import { useViewMode } from "@/contexts/ViewModeContext";

const fullNavLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const recruiterNavLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { isRecruiterMode } = useViewMode();

  const navRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const navLinks = isRecruiterMode ? recruiterNavLinks : fullNavLinks;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);

          // Determine active section
          const sections = navLinks.map(link => link.href.substring(1));
          const scrollPosition = window.scrollY + 120;

          for (const section of [...sections].reverse()) {
            const element = document.getElementById(section);
            if (element && element.offsetTop <= scrollPosition) {
              setActiveSection(section);
              break;
            }
          }

          // Reset if at top
          if (window.scrollY < 100) {
            setActiveSection("");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'top-2 sm:top-4 py-2' : 'top-4 sm:top-6 py-4'}`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo — floats left, no glass */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 140 100"
                className="w-7 md:w-8 h-auto text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)] transition-transform duration-300 group-hover:scale-105"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" y="0" width="22" height="100" />
                <rect x="59" y="0" width="22" height="100" />
                <rect x="118" y="0" width="22" height="100" />
                <polygon points="0,0 22,0 81,100 59,100" />
                <polygon points="59,0 81,0 99.5,34.25 118,0 140,0 99.5,75" />
              </svg>
              <span className="text-xl font-extrabold tracking-[0.15em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase group-hover:text-primary transition-colors duration-300 hidden xl:inline" style={{ fontFamily: "'Inter', sans-serif" }}>
                Nithilan <span className="text-primary drop-shadow-[0_0_8px_rgba(255,104,0,0.8)] group-hover:text-primary-glow">M</span>
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation — Centered Glass Pill */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Outer wrapper to apply glow without CSS conflicts */}
              <div 
                ref={navRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative rounded-full shadow-lg shadow-black/5 dark:shadow-[0_0_30px_rgba(255,255,255,0.15),0_0_10px_rgba(255,255,255,0.05)_inset] dark:bg-white/[0.04] ring-1 ring-black/5 dark:ring-white/10 transition-shadow duration-300 overflow-hidden group"
              >
                {/* Spotlight effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  animate={{
                    background: `radial-gradient(100px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 100%)`,
                  }}
                />

                <GlassSurface
                  width="auto"
                  height={52}
                  borderRadius={26}
                  borderWidth={0.05}
                  brightness={40}
                  opacity={0.9}
                  blur={14}
                  displace={0}
                  backgroundOpacity={0.15}
                  saturation={1.2}
                  distortionScale={-120}
                  redOffset={0}
                  greenOffset={8}
                  blueOffset={16}
                  className="nav-glass-pill"
                >
                  <div className="flex items-center gap-1 md:gap-2 px-4 relative z-20">
                    {navLinks.map((link, index) => {
                      const isActive = activeSection === link.href.substring(1);
                      return (
                        <MagneticElement key={link.name} intensity={0.1}>
                          <motion.a
                            href={link.href}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(link.href);
                            }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.06 + 0.4 }}
                            className={`relative px-4 py-2 text-base font-semibold tracking-premium transition-colors duration-300 rounded-full whitespace-nowrap block ${isActive
                              ? "text-primary drop-shadow-[0_0_8px_rgba(255,104,0,0.6)]"
                              : "text-foreground/80 hover:text-foreground"
                              }`}
                          >
                            {/* Sliding frosted pill indicator */}
                            {isActive && (
                              <motion.span
                                layoutId="activeNavPill"
                                className="absolute inset-0 bg-primary/10 rounded-full -z-10 ring-1 ring-primary/20 backdrop-blur-md dark:shadow-[0_0_15px_rgba(255,104,0,0.2)]"
                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                              />
                            )}
                            <span className="relative z-10">{link.name}</span>
                          </motion.a>
                        </MagneticElement>
                      );
                    })}
                  </div>
                </GlassSurface>
              </div>
            </motion.div>
          </div>

          {/* Right controls — float right, no glass */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <ViewModeToggle />
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href="https://drive.google.com/file/d/1zXFpiOLWb9D-thHGlO7pnbIcyuE0jK2p/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, type: "tween", duration: 0.2 }}
                  className="group relative overflow-hidden flex items-center justify-center w-8 h-8 rounded-full bg-secondary/80 backdrop-blur-sm border border-border hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Download Resume"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] animate-shimmer pointer-events-none" />
                  <Download className="w-4 h-4 text-primary group-hover:text-primary transition-colors relative z-10" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                Download Resume
              </TooltipContent>
            </Tooltip>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-foreground p-2 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/40 mt-4 rounded-xl overflow-hidden"
            >
              <div className="py-4 px-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center justify-between py-3 px-4 rounded-lg text-sm font-medium tracking-premium transition-all duration-300 ${activeSection === link.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                  >
                    {link.name}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="px-2 pt-4"
                >
                  <Button 
                    variant="hero" 
                    className="w-full" 
                    size="sm"
                    onClick={() => window.open('https://drive.google.com/file/d/1zXFpiOLWb9D-thHGlO7pnbIcyuE0jK2p/view?usp=sharing', '_blank')}
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
