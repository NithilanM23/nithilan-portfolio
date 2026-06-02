import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import ViewModeToggle from "./ViewModeToggle";
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

  const navLinks = isRecruiterMode ? recruiterNavLinks : fullNavLinks;

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-3 bg-background/60 backdrop-blur-xl border-b border-border/40 shadow-soft" 
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-bold text-foreground group flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="transition-colors duration-300">Nithilan</span>
            <span className="text-primary ml-1 group-hover:text-primary-glow transition-colors duration-300">M</span>
          </motion.a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 + 0.3 }}
                  className={`relative px-4 py-2 text-sm font-medium tracking-premium transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {/* Active indicator */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: activeSection === link.href.substring(1) ? '50%' : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* View Mode Toggle & Resume Button - Right (Stacked) */}
          <div className="hidden lg:flex flex-col items-end gap-1 flex-shrink-0">
            <ViewModeToggle />
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href="/resume.pdf"
                  download
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, type: "tween", duration: 0.2 }}
                  className="group flex items-center gap-2 h-7 px-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary hover:border-primary transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-3 h-3 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
                  <span className="text-xs font-medium text-primary group-hover:text-primary-foreground transition-colors duration-200 whitespace-nowrap">
                    Resume
                  </span>
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
                    className={`flex items-center justify-between py-3 px-4 rounded-lg text-sm font-medium tracking-premium transition-all duration-300 ${
                      activeSection === link.href.substring(1)
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
                  <Button variant="hero" className="w-full" size="sm">
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
