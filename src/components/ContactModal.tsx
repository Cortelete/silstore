import { useState } from 'react';
import { Modal } from './Modal';
import { Send } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [reason, setReason] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const toggleReason = (value: string) => {
    setReason(prev => 
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const handleSend = () => {
    const reasonsText = reason.length > 0 ? reason.join(', ') : 'Outros';
    const text = `Olá! Meu nome é *${name || 'Cliente'}*.\n\nGostaria de mais informações sobre: *${reasonsText}*.\n\n${message ? `Mensagem: ${message}` : ''}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5542998561721?text=${encodedText}`, '_blank');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Entre em Contato">
      <div className="space-y-5">
        
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Seu Nome</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-brand-pink)] focus:ring-1 focus:ring-[var(--color-brand-pink)] transition-all"
            placeholder="Como podemos te chamar?"
          />
        </div>

        <div>
           <label className="block text-sm font-medium text-white/70 mb-3">Qual o motivo do contato?</label>
           <div className="space-y-2">
             {['Looks completos', 'Itens e Acessórios', 'Dúvidas e Outras opções'].map((opt) => (
               <label key={opt} className="flex items-center p-3 rounded-xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded border-white/20 text-[var(--color-brand-pink)] focus:ring-[var(--color-brand-pink)] bg-black/50"
                    checked={reason.includes(opt)}
                    onChange={() => toggleReason(opt)}
                  />
                  <span className="ml-3 text-sm text-white/90">{opt}</span>
               </label>
             ))}
           </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Mensagem (opcional)</label>
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-brand-pink)] focus:ring-1 focus:ring-[var(--color-brand-pink)] transition-all resize-none"
            placeholder="Digite algo mais se precisar..."
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSend}
          className="w-full bg-[var(--color-brand-pink)] hover:bg-[var(--color-brand-pink-dark)] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2"
        >
          <Send size={18} />
          Enviar no WhatsApp
        </motion.button>

      </div>
    </Modal>
  );
}
