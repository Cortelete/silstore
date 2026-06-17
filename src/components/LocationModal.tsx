import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { Modal } from './Modal';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LocationModal({ isOpen, onClose }: LocationModalProps) {
  const openMaps = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=AV+Carlos+Cavalcanti+3374", "_blank");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Nossa Localização">
      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div className="p-3 bg-[var(--color-brand-pink)]/20 rounded-lg text-[var(--color-brand-pink)] flex-shrink-0">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Endereço</h4>
            <p className="text-sm text-white/70 leading-relaxed font-sans">
              AV Carlos Cavalcanti 3374<br/>
              Ponta Grossa, PR
            </p>
          </div>
        </div>

        <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.2659701289404!2d-50.1235502250859!3d-25.09285651963659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81b00308ce747%3A0x7f3dde83d644de85!2sSilstorepg!5e0!3m2!1spt-BR!2sbr!4v1781726345311!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={openMaps}
          className="w-full bg-[var(--color-brand-pink)] hover:bg-[var(--color-brand-pink-dark)] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2 shadow-lg shadow-[var(--color-brand-pink)]/20"
        >
          <Navigation size={18} />
          Abrir no Mapa
        </motion.button>
      </div>
    </Modal>
  );
}
