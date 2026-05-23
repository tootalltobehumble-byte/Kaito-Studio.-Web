import { motion } from 'motion/react';
import founderImage from '../assets/images/regenerated_image_1779539837094.jpg';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-7xl mx-auto px-6 py-20 md:px-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 lg:order-1 flex flex-col items-start gap-6">
          <motion.h2 
            variants={itemVariants}
            className="inline-block px-4 py-1 border border-accent rounded-full text-[10px] uppercase tracking-widest text-accent mb-2"
          >
            Who We Are
          </motion.h2>
          
          <motion.h1 
            variants={itemVariants}
            className="font-heading text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight text-cream"
          >
            The Story of <span className="font-serif italic block pt-2">Kaito Studio.</span>
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="space-y-6 text-secondary text-base leading-relaxed max-w-lg mt-4 font-light"
          >
            <p>
              "Kaito" translates to "Ocean and Soar." It represents depth, clarity, and the boundless trajectory of digital ambition. Kaito Studio is a highly specialized design practice servicing the US, UK, EU, and Japan.
            </p>
            <p>
              Run by Abhay, a 20-year-old digital specialist, the studio operates on contrarian principles: total client privacy, zero public portfolios, and an entirely asynchronous communication model.
            </p>
            <p>
              We believe great design shouldn't require endless Zoom calls. You provide the vision. We execute with precision. 
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-x-12 gap-y-6 mt-8 p-6 border border-card bg-card/10 w-full md:w-auto"
          >
            <div>
              <p className="text-accent text-xs uppercase tracking-widest mb-1">Focus</p>
              <p className="font-serif text-cream">SaaS & Services</p>
            </div>
            <div>
              <p className="text-accent text-xs uppercase tracking-widest mb-1">Model</p>
              <p className="font-serif text-cream">100% Async</p>
            </div>
            <div>
              <p className="text-accent text-xs uppercase tracking-widest mb-1">Privacy</p>
              <p className="font-serif text-cream">Closed Portfolio</p>
            </div>
            <div>
              <p className="text-accent text-xs uppercase tracking-widest mb-1">Locations</p>
              <p className="font-serif text-cream">Global Reach</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="order-1 lg:order-2 w-full flex justify-center"
        >
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-accent cursor-pointer group"
          >
            <img 
              id="founder-photo-about"
              src={founderImage} 
              alt="Abhay" 
              className="w-full h-full object-cover z-10 relative grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}
