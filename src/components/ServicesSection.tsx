import { motion } from "framer-motion";
import { Brain, Bot, BarChart3, Server, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & ML Model Development",
    description: "Custom machine learning and deep learning models tailored to your specific business problems and data.",
  },
  {
    icon: Bot,
    title: "LLM-based Chatbots & RAG Systems",
    description: "Intelligent chatbots powered by large language models with document retrieval capabilities.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Dashboarding",
    description: "Comprehensive data analysis with interactive Power BI dashboards for actionable insights.",
  },
  {
    icon: Server,
    title: "API-based ML Model Deployment",
    description: "End-to-end deployment of ML models as scalable APIs using Flask, FastAPI, or Django.",
  },
  {
    icon: Lightbulb,
    title: "Custom AI Solutions",
    description: "Tailored AI solutions designed to solve unique real-world problems for your organization.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional services to help bring your AI and data projects to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 card-hover group text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
