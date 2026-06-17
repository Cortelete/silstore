import { Modal } from './Modal';
import { Crown, Sparkles } from 'lucide-react';
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
            Faça parte
            <Sparkles size={16} className="text-[var(--color-brand-pink)]" />
          </h3>
          <p className="text-white/80 font-sans text-xs sm:text-sm px-2">
            Acesse nosso grupo <span className="text-[var(--color-brand-pink)] font-semibold">exclusivo</span> e tenha acesso a benefícios únicos, novidades em primeira mão e ofertas especiais para nossas clientes VIP.
          </p>
        </div>

        <motion.a 
          href="https://chat.whatsapp.com/FiDjkdo1B8t8iRxGbCrhLE?s=sw&p=a&mlu=2"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-[var(--color-brand-pink)] to-[var(--color-brand-pink-dark)] hover:opacity-90 active:scale-[0.98] transition-all rounded-2xl py-3 px-4 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(209,28,117,0.3)] mt-2 font-medium text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Crown size={18} />
          <span>Entrar no Grupo VIP</span>
        </motion.a>

      </div>
    </Modal>
  );
}
