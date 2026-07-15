import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "AI Engineer Trainee",
    company: "Daimler India Commercial Vehicles (DICV)",
    location: "Chennai, India",
    date: "May 2026 – July 2026",
    bullets: [
      "Enterprise Local AI Platform: Architected and deployed an enterprise on-premise GenAI platform (Next.js, FastAPI) powered by GGUF-quantized local LLMs, packaged as a zero-touch Windows installer enabling one-click deployment across 50+ enterprise systems.",
      "Agentic Query & Data Pipeline: Built a 3-agent pipeline (query routing, tool invocation, response generation) for RAG and real-time web-augmented search, plus a natural-language-to-code module for querying Excel datasets in plain English."
    ],
    tech: ["Next.js", "FastAPI", "GGUF", "Local LLMs", "Windows Installer", "Agentic RAG"]
  },
  {
    role: "AI/ML Intern (Remote)",
    company: "Sopra Steria India",
    location: "Remote",
    date: "Dec 2025 – March 2026",
    bullets: [
      "Multimodal RAG Development: Built a multimodal RAG system for 500+ enterprise PDFs (text, tables, images), implementing heading-aware chunking and metadata filtering to achieve <2s retrieval with zero external API calls.",
      "Hybrid Retrieval Architecture: Engineered a hybrid retrieval pipeline combining BM25 and FAISS with RRF, MMR diversification, and cross-encoder reranking, improving Top-5 retrieval precision by 18% on 200 enterprise queries.",
      "Local LLM Deployment: Deployed a GGUF-quantized LLaMA-3.2 model using Ollama, reducing inference latency by 35% while enabling secure, offline enterprise document Q&A."
    ],
    tech: ["Python", "RAG", "FAISS", "LLaMA-3.2", "Ollama", "BM25"]
  },
  {
    role: "Data Science Intern",
    company: "8Queens Software Technologies Pvt. Ltd.",
    location: "Chennai, India",
    date: "June 2025 – July 2025",
    bullets: [
      "Churn Modeling: Built customer churn prediction models using Python and Pandas to identify high-risk customer segments.",
      "Visualization Tools: Built an automated EDA pipeline using YData Profiling and Pandas to generate statistical reports."
    ],
    tech: ["Python", "Pandas", "Machine Learning", "YData Profiling", "EDA"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            {experiences.map((exp, expIndex) => (
              <div key={expIndex} className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
                {/* Accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="p-4 bg-primary/10 rounded-xl shrink-0">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                    <p className="text-lg text-primary font-medium mb-3">{exp.company}</p>

                    <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{exp.date}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.bullets.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
