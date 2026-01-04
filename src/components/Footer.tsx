import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#home" className="text-xl font-bold text-foreground">
              Nithilan <span className="text-primary">M</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2 flex items-center gap-1 justify-center md:justify-start">
               © {currentYear}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/MadeForMoney", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/nithilanm23/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:am.nithilan@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
