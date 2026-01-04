import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
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
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
