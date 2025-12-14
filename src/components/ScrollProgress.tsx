import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setProgress(latest * 100);
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-primary/20 z-[9999]">
      <motion.div
        className="h-full bg-gradient-cognac"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
