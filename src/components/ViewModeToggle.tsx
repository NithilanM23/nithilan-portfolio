import { motion } from "framer-motion";
import { Briefcase, User } from "lucide-react";
import { useViewMode } from "@/contexts/ViewModeContext";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const ViewModeToggle = () => {
  const { viewMode, setViewMode } = useViewMode();

  const isFullMode = viewMode === "full";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => setViewMode(isFullMode ? "recruiter" : "full")}
            className="group flex items-center justify-center w-8 h-8 rounded-full bg-secondary/80 backdrop-blur-sm border border-border hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
            aria-label="Toggle View Mode"
          >
            {isFullMode ? (
              <Briefcase className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            ) : (
              <User className="w-4 h-4 text-primary group-hover:text-primary transition-colors" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs">
          {isFullMode ? "Switch to Recruiter Mode" : "Switch to Full Mode"}
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
};

export default ViewModeToggle;
