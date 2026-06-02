import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "AI/ML Intern (Remote)",
    company: "Sopra Steria India",
    location: "Chennai, India",
    date: "Dec 2025 – March 2026",
    bullets: [
      "Multimodal RAG Development: Architected a fully air-gapped multimodal RAG system in Python that ingested 500+ enterprise PDFs — parsing tables, images, and text — achieving sub-2s retrieval latency with zero external API calls, eliminating data privacy risk for a regulated financial client.",
      "Hybrid Retrieval Architecture: Engineered a hybrid BM25 + dense-vector retrieval pipeline using FAISS, improving top-5 retrieval precision by 18% over baseline keyword search on an internal evaluation set of 200 enterprise queries.",
      "Private LLM Integration: Deployed and optimized a locally-hosted LLaMA-3.2 model using Ollama, reducing inference latency by 35% through 4-bit quantization (GGUF), enabling full document Q&A without cloud dependency."
    ],
    tech: ["Python", "RAG", "FAISS", "LLaMA-3.2", "Ollama", "BM25"]
  },
  {
    role: "Data Analyst Intern",
    company: "8Queens Software Technologies Pvt. Ltd.",
    location: "Chennai, India",
    date: "June 2025 - July 2025",
    bullets: [
      "Built and evaluated customer churn prediction models using Python, Pandas, and statistical analysis, identifying high-risk customer segments and key churn drivers.",
      "Contributed to building an internal knowledge assistant using cheerio, Flowise, and Pinecone, reducing employee information retrieval time by 40%.",
      "Collaborated in designing and deploying interactive business intelligence dashboards using Power BI and Power Query, transforming complex datasets into clear, decision-ready visualizations."
    ],
    tech: ["Power BI", "Power Query", "Cheerio", "Flowise", "Pinecone", "Data Analysis", "Dashboard Design"]
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
