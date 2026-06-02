import { motion } from "framer-motion";

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research <span className="text-gradient">Experience</span>
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
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-foreground mb-1">RGAE-PNNR: Unsupervised Visual Anomaly Detection</h3>
              <p className="text-primary font-medium mb-2">Revised Draft submitted at Springer Nature</p>
              <p className="text-muted-foreground text-sm mb-6">Aug 2025 &ndash; Jan 2026</p>
              
              <p className="text-muted-foreground text-base mb-6">
                Co-developed a lightweight hybrid anomaly detection framework combining Residual Gated AutoEncoder (RGAE) and Patchwise Nearest Neighbor Reconstruction (PNNR).
              </p>
              
              <div className="mb-8">
                <h4 className="font-bold text-foreground mb-4">Key Contributions:</h4>
                <ul className="space-y-3">
                  {[
                    "Implemented the complete end-to-end pipeline in PyTorch",
                    "Engineered a custom gating mechanism to reduce reconstruction over-smoothing",
                    "Worked on defect localization and semantic consistency optimization",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-foreground mb-4">Performance Results:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-background/50 border border-border rounded-xl p-6">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">AUROC on MVTec AD Benchmark</div>
                  </div>
                  <div className="bg-background/50 border border-border rounded-xl p-6">
                    <div className="text-3xl font-bold text-primary mb-2">6M</div>
                    <div className="text-sm text-muted-foreground">Parameters (~35% fewer than SOTA)</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-foreground mb-4">Benchmarks Evaluated:</h4>
                <div className="flex flex-wrap gap-3">
                  {["MVTec AD Benchmark", "VisA Benchmark"].map((bench) => (
                    <span
                      key={bench}
                      className="px-4 py-1.5 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {bench}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-4">Research Areas:</h4>
                <div className="flex flex-wrap gap-3">
                  {["Computer Vision", "Visual Anomaly Detection", "AutoEncoders", "Lightweight Deep Learning"].map((area) => (
                    <span
                      key={area}
                      className="px-4 py-1.5 bg-secondary/30 text-secondary-foreground text-sm rounded-full border border-border/50"
                    >
                      {area}
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

export default ResearchSection;
