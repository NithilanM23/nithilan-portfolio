import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, Brain, BarChart3, Plane, BookOpen, Flag } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    icon: Bot,
    title: "Enterprise RAG System",
    description: "Enterprise-grade RAG system for internal knowledge base Question & Answering.",
    tech: ["PostgreSQL", "PGVector", "LangChain", "Ollama", "Python", "Streamlit"],
    color: "from-orange-500 to-amber-500",
    githubLink: "https://github.com/NithilanM23/Enterprise_RAG",
  },
  {
    icon: BarChart3,
    title: "Tomato Price Prediction System",
    description: "ANN-based regression model for Tamil Nadu tomato prices with AI-driven inference explanations for farmers.",
    tech: ["TensorFlow", "Keras", "Python", "Flask", "Pandas"],
    color: "from-amber-500 to-yellow-500",
    githubLink: "#",
  },
  {
    icon: Brain,
    title: "AI Clinic Triage System",
    description: "NLP-based medical triage and symptom extraction system using SpaCy for patient priority classification.",
    tech: ["SpaCy", "NLP", "Python", "Healthcare AI", "Classification"],
    color: "from-orange-600 to-orange-400",
    githubLink: "https://github.com/NithilanM23/BERT-Finetuning-For-MedicalData",
  },
  {
    icon: BarChart3,
    title: "Job Market Analytics Dashboard",
    description: "Interactive Power BI dashboard analyzing 500K+ job postings globally with insights on trends and demands.",
    tech: ["Power BI", "Power Query", "Data Visualization", "Analytics"],
    color: "from-amber-600 to-orange-500",
    githubLink: "https://github.com/NithilanM23/Power-Bi",
  },
  {
    icon: Plane,
    title: "British Airways Data Science Simulation",
    description: "Forage simulation project involving web scraping, analysis, and ML-based purchase prediction modeling.",
    tech: ["Web Scraping", "ML", "Python", "Scikit-learn", "Analysis"],
    color: "from-orange-500 to-red-500",
    githubLink: "https://github.com/NithilanM23/Airline-Review-System-BA-",
  },
  {
    icon: Flag,
    title: "F1 Finish Position Prediction",
    description: "End-to-end ML project predicting Formula 1 race finishing positions using historical data.",
    tech: ["Machine Learning", "Python", "Scikit-learn", "Feature Engineering"],
    color: "from-orange-400 to-amber-400",
    githubLink: "https://github.com/NithilanM23/F1-Predictor",
    demoLink: "https://f1predictor.onrender.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of AI and data science projects showcasing practical applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 card-hover group flex flex-col"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-6 h-6 text-background" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <Button variant="ghost" size="sm" className="flex-1" onClick={() => window.open(project.githubLink, '_blank')}>
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                {project.demoLink && (
                  <Button variant="ghost" size="sm" className="flex-1" onClick={() => window.open(project.demoLink, '_blank')}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg">
            View All Projects on GitHub
            <ExternalLink className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
