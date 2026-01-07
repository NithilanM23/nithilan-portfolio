import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import ContactSectionMinimal from "@/components/ContactSectionMinimal";
import Footer from "@/components/Footer";
import { ViewModeProvider, useViewMode } from "@/contexts/ViewModeContext";

const IndexContent = () => {
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
          {!isRecruiterMode && <HeroSection />}
          {!isRecruiterMode && <AboutSection />}
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          {!isRecruiterMode && <ServicesSection />}
          {isRecruiterMode ? <ContactSectionMinimal /> : <ContactSection />}
        </main>
        <Footer />
      </div>
    </>
  );
};

const Index = () => {
  return (
    <ViewModeProvider>
      <IndexContent />
    </ViewModeProvider>
  );
};

export default Index;
