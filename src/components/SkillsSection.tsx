import { motion } from "framer-motion";
import { Brain, Code, Database, BarChart3, Layers,Server,Workflow } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Artificial Neural Networks (ANN)",
      "CNNs",
      "RNNs",
      "LSTM",
      "GRU",
      "Regression & Classification",
      "Model Evaluation"
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Layers,
    title: "LLMs & NLP",
    skills: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "BERT",
      "SpaCy",
      "Embeddings",
      "Vector Search"
    ],
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Code,
    title: "Programming & Frameworks",
    skills: [
      "Python",
      "SQL",
      "PyTorch",
      "TensorFlow / Keras",
      "Flask",
      "Django REST Framework",
      "Streamlit"
    ],
    color: "from-orange-600 to-orange-400",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    skills: [
      "Power BI",
      "Power Query",
      "OpenRefine",
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization",
      "Insight Generation"
    ],
    color: "from-amber-600 to-orange-500",
  },
  {
    icon: Database,
    title: "Databases & Vector Stores",
    skills: [
      "FAISS",
      "Pinecone",
      "ChromaDB",
      "MongoDB",
      "SQLite",
      "Vector Databases",
      "Embedding Indexing"
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Server,
    title: "Backend & Deployment",
    skills: [
      "REST APIs",
      "Model Deployment",
      "API Integration",
      "Authentication (Token / Session)",
      "Railway / Render Deployment"
    ],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Workflow,
    title: "Tools & Platforms",
    skills: [
      "Flowise",
      "N8N",
      "Langchain",
      "Git & GitHub",
      "No-Code AI Pipelines"
    ],
    color: "from-orange-400 to-amber-400",
  },
];


const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 card-hover group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
