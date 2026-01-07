import { motion } from "framer-motion";
import { Briefcase, User } from "lucide-react";
import { useViewMode } from "@/contexts/ViewModeContext";

const ViewModeToggle = () => {
  const { viewMode, setViewMode } = useViewMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="flex items-center gap-2 bg-secondary/80 backdrop-blur-sm border border-border rounded-full p-1"
    >
      <button
        onClick={() => setViewMode("full")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          viewMode === "full"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <User className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Full</span>
      </button>
      <button
        onClick={() => setViewMode("recruiter")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          viewMode === "recruiter"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Briefcase className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Recruiter</span>
      </button>
    </motion.div>
  );
};

export default ViewModeToggle;
