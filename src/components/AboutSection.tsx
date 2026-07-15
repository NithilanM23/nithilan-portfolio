import { motion } from "framer-motion";
import { GraduationCap, Award, Brain } from "lucide-react";
import { useRef } from "react";
import VariableProximity from "./VariableProximity";

const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  return (
    <section id="about" className="py-24 relative" ref={containerRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Passionate AI & Data Science Engineer
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a third-year B.Tech student in Artificial Intelligence & Data Science, passionate about building practical AI systems that combine machine learning, data analysis, and scalable backend solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With hands-on experience in RAG systems, LLM-based applications, NLP pipelines, and ML model deployment, I focus on creating real-world impact through technology. My strong academic performance and national-level rankings in AI-related courses reflect my dedication to mastering this field.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in the power of AI to solve complex problems and am constantly exploring new ways to apply machine learning and data science to create meaningful solutions.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education Card */}
            <div className="bg-card border border-border rounded-xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Education
                  </h4>
                  <p className="text-foreground font-medium">
                    B.Tech in Artificial Intelligence & Data Science
                  </p>
                  <p className="text-muted-foreground">
                    Shiv Nadar University Chennai (SNUC)
                  </p>
                  <p className="text-muted-foreground">
                    3rd Year | CGPA: 9.04
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="bg-card border border-border rounded-xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Academic Achievements
                  </h4>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <span className="text-primary font-semibold">
                        All India Rank 5
                      </span>
                      {" — Introduction to LLMs"}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-primary font-semibold">
                        All India Rank 16
                      </span>
                      {" — Responsible AI"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Foundation Card */}
            <div className="bg-card border border-border rounded-xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Strong Foundation
                  </h4>
                  <p className="text-muted-foreground">
                    Machine Learning, Deep Learning, CNNs, RNNs, SQL, and AI Theory
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
