import { useLocation } from "react-router-dom";
import { motion as M } from "framer-motion";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };
  const location = useLocation();
  return (
    <M.section exit={{ opacity: 0 }}>
      <M.div
        key={location.pathname}
        variants={content}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </M.div>
    </M.section>
  );
};
