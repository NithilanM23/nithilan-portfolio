import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ResearchSection from "@/components/ResearchSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import ContactSectionMinimal from "@/components/ContactSectionMinimal";
import Footer from "@/components/Footer";
import { useViewMode } from "@/contexts/ViewModeContext";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" as const }
  }
};

const Index = () => {
  const { isRecruiterMode } = useViewMode();

  return (
    <>
      <Helmet>
        <title>Nithilan M | AI & Data Science Engineer</title>
        <meta
          name="description"
          content="Portfolio of Nithilan M - AI & Data Science Engineer specializing in LLMs, RAG Systems, Machine Learning, and Data Analytics. Building practical AI systems with real-world impact."
        />
        <meta name="keywords" content="AI Engineer, Data Scientist, Machine Learning, LLMs, RAG Systems, Python, Deep Learning" />
        <link rel="canonical" href="https://nithilan.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            {!isRecruiterMode && (
              <motion.div
                key="hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <HeroSection />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {!isRecruiterMode && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <AboutSection />
              </motion.div>
            )}
          </AnimatePresence>

          <SkillsSection />
          <ExperienceSection />
          <ResearchSection />
          <ProjectsSection />

          <AnimatePresence mode="wait">
            {!isRecruiterMode && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ServicesSection />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={isRecruiterMode ? "contact-minimal" : "contact-full"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {isRecruiterMode ? <ContactSectionMinimal /> : <ContactSection />}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
