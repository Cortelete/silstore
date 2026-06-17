import { Modal } from './Modal';
import { motion, stagger, useAnimate } from 'motion/react';
import { Sparkles, Diamond, Heart } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Nossa Essência">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center space-y-4"
      >
        <motion.div 
          variants={itemVariants}
          className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[var(--color-brand-pink)] to-[#000] p-[2px] flex-shrink-0 shadow-[0_0_30px_rgba(209,28,117,0.3)]"
        >
          <div className="w-full h-full bg-[#121212] rounded-full flex items-center justify-center overflow-hidden">
             <img src="/logo.png" alt="SilStore PG Logo" className="w-full h-full object-cover scale-110" onError={(e) => { e.currentTarget.src = "https://placehold.co/200x200/121212/d11c75.png?text=SilStore" }} />
          </div>
        </motion.div>
        
        <div className="space-y-3 sm:space-y-5">
          <motion.h3 
            variants={itemVariants}
            className="text-xl sm:text-3xl font-heading font-bold text-gradient-animated"
          >
            SilStore PG
          </motion.h3>

          <motion.p 
            variants={itemVariants}
            className="text-white/80 leading-relaxed font-sans text-xs sm:text-base px-2"
          >
            Nascemos para elevar o seu estilo. Somos a união perfeita entre a <span className="text-[var(--color-brand-pink)] font-semibold">sofisticação</span> e o <span className="text-[var(--color-brand-pink)] font-semibold">luxo acessível</span>.
            Cada peça é escolhida a dedo para celebrar a sua melhor versão.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-3 py-2 text-[var(--color-brand-pink)]"
          >
             <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--color-brand-pink)]/50" />
             <Sparkles size={16} />
             <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">Exclusividade</span>
             <Sparkles size={16} />
             <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--color-brand-pink)]/50" />
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-3 sm:gap-4 mt-2"
          >
            <div className="bg-gradient-to-b from-white/10 to-white/5 p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[var(--color-brand-pink)]/50 transition-colors">
              <Diamond size={24} className="text-[var(--color-brand-pink)] mb-2 opacity-80 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm font-bold text-white uppercase tracking-widest">Premium</h4>
              <p className="text-xs text-white/40 mt-1">Acabamento</p>
            </div>

            <div className="bg-gradient-to-b from-white/10 to-white/5 p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[var(--color-brand-pink)]/50 transition-colors">
              <Heart size={24} className="text-[var(--color-brand-pink)] mb-2 opacity-80 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm font-bold text-white uppercase tracking-widest">Cuidado</h4>
              <p className="text-xs text-white/40 mt-1">Em cada detalhe</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Modal>
  );
}
