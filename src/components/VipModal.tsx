import { Modal } from './Modal';
import { Crown, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface VipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VipModal({ isOpen, onClose }: VipModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Grupo VIP">
      <div className="flex flex-col items-center text-center space-y-5">
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--color-brand-pink)] to-[var(--color-brand-pink-dark)] border border-white/20 rounded-full flex items-center justify-center text-white shadow-[0_0_25px_rgba(209,28,117,0.4)]"
        >
          <Crown size={32} strokeWidth={1.5} className="mb-0.5 sm:w-10 sm:h-10" />
        </motion.div>

        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-heading font-bold text-gradient-animated flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-[var(--color-brand-pink)]" />
            Em Breve
            <Sparkles size={16} className="text-[var(--color-brand-pink)]" />
          </h3>
          <p className="text-white/80 font-sans text-xs sm:text-sm px-2">
            Estamos preparando algo <span className="text-[var(--color-brand-pink)] font-semibold">exclusivo</span> para você. 
            Nosso grupo VIP trará benefícios únicos, novidades em primeira mão e ofertas especiais.
          </p>
        </div>

        <motion.div 
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center gap-2 mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <AlertCircle size={18} className="text-white/50" />
          <p className="text-[10px] sm:text-xs text-white/50 font-medium tracking-wide uppercase">
            Aguarde o Lançamento
          </p>
        </motion.div>

      </div>
    </Modal>
  );
}
