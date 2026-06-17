import { useState } from 'react';
import { Modal } from './Modal';
import { Sparkles, ArrowRight, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName?: string;
}

export function DeveloperModal({ isOpen, onClose, brandName = "SilStore PG" }: DeveloperModalProps) {
  const [name, setName] = useState('');

  const handleContactDev = () => {
    const text = `Olá, vi o link da ${brandName} e quero um site igual! Meu nome é ${name || 'Cliente'}.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5541988710303?text=${encodedText}`, '_blank');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Desenvolvido por IA">
      <div className="flex flex-col items-center text-center space-y-6">
        
        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-brand-pink)] shadow-[0_0_15px_rgba(209,28,117,0.2)]">
          <Sparkles size={32} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-heading font-bold text-gradient-animated">
            InteligenciArte.IA
          </h3>
          <p className="text-white/70 font-sans text-sm">
            Criamos experiências digitais únicas, modernas e focadas em conversão para sua marca.
          </p>
        </div>

        <a 
          href="https://www.instagram.com/inteligenciarte.ia" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--color-brand-pink)] text-sm font-medium hover:underline flex items-center gap-1"
        >
          @inteligenciarte.ia <ArrowRight size={14} />
        </a>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

        <div className="w-full space-y-4">
          <p className="text-sm font-medium text-white/90">
            Quer um site incrível como esse? Fale comigo! 🚀
          </p>
          
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-brand-pink)] text-sm transition-all"
            placeholder="Seu nome"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleContactDev}
            className="w-full bg-gradient-to-r from-[#d11c75] to-[#991355] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(209,28,117,0.3)] hover:shadow-[0_0_25px_rgba(209,28,117,0.5)]"
          >
            <Smartphone size={18} />
            Solicitar Orçamento
          </motion.button>
        </div>

      </div>
    </Modal>
  );
}
