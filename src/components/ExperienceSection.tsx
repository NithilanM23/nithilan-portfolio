import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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
          <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
            {/* Accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-xl shrink-0">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">Data Analyst Intern</h3>
                <p className="text-lg text-primary font-medium mb-3">8Queens Software Technologies Pvt. Ltd.</p>
                
                <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Chennai, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>2025</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "Worked on real-world industry datasets to extract meaningful insights",
                    "Cleaned and transformed data using Power Query and OpenRefine",
                    "Built interactive Power BI dashboards aggregating 500K+ global job records",
                    "Delivered insights through visual storytelling and advanced analytics",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {["Power BI", "Power Query", "OpenRefine", "Data Analysis", "Dashboard Design"].map((tech) => (
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
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
