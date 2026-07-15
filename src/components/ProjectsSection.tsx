import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, Brain, BarChart3, Plane, BookOpen, Flag } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    icon: Flag,
    title: 'F1 Race Position Predictor',
    description: 'Trained an XGBoost regressor on 10+ years of F1 historical data to predict race positions (MAE: 2.3 positions); served predictions via a Django REST API with <150ms response time, deployed on Render.',
    tech: ['Django', 'XGBoost', 'REST API', 'HTML/CSS', 'Render'],
    color: "from-orange-500 to-red-500",
    githubLink: 'https://github.com/NithilanM23/F1-Predictor',
    demoLink: 'https://f1predictor.onrender.com',
    images: ['/f1-predictor/homepage_f1.png', '/f1-predictor/mainpage_f1.png'],
  },
  {
    icon: Brain,
    title: 'Multimodal RAG System',
    description: 'Architected a fully air-gapped multimodal RAG system ingesting 500+ enterprise PDFs. Engineered a hybrid BM25 + dense-vector retrieval pipeline using FAISS.',
    tech: ['Python', 'FAISS', 'Ollama', 'LLaMA-3.2', 'GGUF'],
    color: "from-blue-500 to-indigo-500",
    githubLink: 'https://github.com/NithilanM23/Enterprise_RAG',
    images: ['/multimodal_rag/ui_rag.png'],
  },
  {
    icon: BookOpen,
    title: 'Magic Story',
    description: 'An interactive application that generates interesting stories using Gemini, creates great visuals for the story, and performs Text-to-Speech (TTS) to read them aloud.',
    tech: ['Gemini', 'Generative AI', 'TTS', 'React'],
    color: "from-purple-500 to-pink-500",
    githubLink: 'https://github.com/NithilanM23/Magic_StoryBook',
    images: ['/Magic_story/Screenshot 2026-07-07 112812.png', '/Magic_story/Screenshot 2026-07-07 112824.png'],
  },
  {
    icon: BarChart3,
    title: 'CashDabba: AI-Powered FinTech Platform',
    description: 'Architected a full-stack FinTech application to prevent operational capital shortages, featuring an algorithmic cash flow optimization engine, a multimodal OCR invoice parser, and an LLM-driven market intelligence pipeline.',
    tech: ['Next.js', 'FastAPI', 'Python', 'SQLite', 'LLMs', 'OCR'],
    color: "from-emerald-500 to-teal-500",
    githubLink: 'https://github.com/NithilanM23/CashDabba',
    images: ['/CashDabba/UI1.jpeg', '/CashDabba/ui2.jpeg', '/CashDabba/ui3.jpeg', '/CashDabba/UI4.jpeg'],
  },
  {
    icon: Bot,
    title: 'Intelligent CSV Assistant',
    description: 'Developed an interactive Streamlit application enabling users to perform data exploration and obtain ML model insights via an LLM-driven assistant.',
    tech: ['Streamlit', 'Pandas', 'Scikit-learn', 'PandasAI', 'Gemini 1.5 Pro'],
    color: "from-cyan-500 to-blue-500",
    githubLink: 'https://github.com/NithilanM23/Intelligent-CSV-Assistant-LLM-Powered',
    images: ['/csv_bot/ex1.png', '/csv_bot/ex2.png', '/csv_bot/ex3.png'],
  },
  {
    icon: Bot,
    title: 'Internal Knowledge Chatbot',
    description: 'Built a RAG-powered internal knowledge chatbot using Flowise (no-code platform) reducing average employee lookup time by 40%.',
    tech: ['Flowise', 'Pinecone', 'Pandas', 'Cheerio'],
    color: "from-violet-500 to-purple-500",
    images: ['/chatbot/blocks.png', '/chatbot/chatbubble.png'],
  },
  {
    icon: Plane,
    title: 'Airline Review Analysis - British Airways',
    description: 'Scraped airline reviews, cleaned data, and performed sentiment analysis with Logistic Regression to predict customer purchase intent.',
    tech: ['BeautifulSoup', 'Pandas', 'Logistic Regression'],
    color: "from-blue-600 to-blue-400",
    githubLink: 'https://github.com/NithilanM23/Airline-Review-System-BA-',
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

              {project.images && project.images.length > 0 && (
                <div className="mb-4 flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {project.images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`${project.title} screenshot ${idx + 1}`} 
                      className="h-32 w-auto object-cover rounded-md snap-center shrink-0 border border-border"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                {project.githubLink && (
                  <Button variant="ghost" size="sm" className="flex-1" onClick={() => window.open(project.githubLink, '_blank')}>
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                )}
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
          <Button variant="heroOutline" size="lg" onClick={() => window.open('https://github.com/NithilanM23', '_blank')}>
            View All Projects on GitHub
            <ExternalLink className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
