import { motion } from 'framer-motion';

export default function ScrollReveal({ 
  children, 
  direction = 'up',
  delay = 0,
  className = ''
}) {
  const variants = {
    up:    { hidden: { opacity: 0, y: 50 },  visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 },  visible: { opacity: 1, x: 0 } },
    fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  );
}
