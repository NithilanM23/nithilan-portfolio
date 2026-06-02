import { motion } from "framer-motion";

const AiCoreAnimation = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center bg-card border border-border rounded-2xl overflow-hidden p-8">
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Central Core */}
        <motion.div
          className="absolute w-40 h-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border-t-2 border-primary/80 border-r-2 border-transparent" />
          <div className="absolute inset-2 rounded-full border-b-2 border-primary/50 border-l-2 border-transparent" />
          <div className="absolute inset-4 rounded-full border-t-2 border-primary/30 border-r-2 border-transparent" />
          
        </motion.div>
        
        {/* Pulsing Center */}
        <motion.div
          className="absolute flex items-center justify-center z-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-16 h-16 bg-primary rounded-full blur-md" />
          <div className="absolute w-10 h-10 bg-white rounded-full blur-sm opacity-90" />
        </motion.div>

        {/* Orbiting particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[240px] h-[240px] rounded-full border border-primary/10"
            initial={{ rotate: i * 60 }}
            animate={{ rotate: i * 60 + 360 }}
            transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-primary rounded-full shadow-[0_0_10px_rgba(255,100,0,0.8)]"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          </motion.div>
        ))}

        {/* Outer Ring */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-primary/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Overlay text */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <motion.p 
          className="text-primary font-mono text-sm tracking-widest uppercase glow-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Neural Interface Active
        </motion.p>
      </div>
    </div>
  );
};

export default AiCoreAnimation;
