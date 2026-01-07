import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, FileText } from "lucide-react";
import { Button } from "./ui/button";

const ContactSectionMinimal = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "am.nithilan@gmail.com",
      href: "mailto:am.nithilan@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nithilanm23",
      href: "https://www.linkedin.com/in/nithilanm23/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/MadeForMoney",
      href: "https://github.com/MadeForMoney",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-secondary/30 relative">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Contact <span className="text-gradient">Details</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors duration-300 group"
            >
              <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{link.label}</p>
                <p className="text-foreground font-medium text-sm truncate">{link.value}</p>
              </div>
            </a>
          ))}

          <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
            <div className="p-2.5 bg-primary/10 rounded-lg">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-foreground font-medium text-sm">Chennai, India</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <Button variant="hero" size="lg" className="group">
            <FileText className="w-4 h-4" />
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSectionMinimal;
