import React, { useState } from 'react';
import { Modal } from './Modal';
import { Star, Send } from 'lucide-react';
import { motion } from 'motion/react';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RatingModal({ isOpen, onClose }: RatingModalProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [step, setStep] = useState<1 | 2>(1);

  const handleRate = (value: number) => {
    setRating(value);
    if (value === 5) {
      window.open('https://search.google.com/local/writereview?placeid=ChIJR-eMMAAb6JQRhd5E1oPePX8', '_blank');
      setTimeout(onClose, 1000);
    } else {
      setTimeout(() => setStep(2), 500);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={step === 1 ? "Avalie sua Experiência" : "Nos Ajude a Melhorar"}>
      {step === 1 ? (
        <div className="flex flex-col items-center py-6">
          <p className="text-white/80 text-center mb-8 font-sans">
            Sua opinião é muito importante. Como foi sua experiência com a SilStore PG?
          </p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => handleRate(star)}
                className="focus:outline-none p-1"
              >
                <Star 
                  size={36} 
                  className={`transition-colors duration-200 ${
                    (hoveredRating || rating) >= star 
                      ? 'fill-[var(--color-brand-pink)] text-[var(--color-brand-pink)] drop-shadow-[0_0_8px_rgba(209,28,117,0.5)]' 
                      : 'text-white/20'
                  }`}
                  strokeWidth={1.5}
                />
              </motion.button>
            ))}
          </div>
        </div>
      ) : (
        <form action="https://formsubmit.co/sil27sil@hotmail.com" method="POST" className="space-y-4">
          <p className="text-white/80 font-sans text-sm mb-4">
            Notamos que sua avaliação foi de {rating} estrela{rating > 1 ? 's' : ''}. O que houve e como podemos melhorar?
          </p>
          <input type="hidden" name="_subject" value="Novo Feedback - SILStorePG" />
          <input type="hidden" name="Avaliacao" value={`${rating} estrelas`} />
          <input type="hidden" name="_captcha" value="false" />
          
          <input 
            type="text" 
            name="name" 
            required 
            placeholder="Seu nome"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-brand-pink)] transition-all font-sans text-sm"
          />
          
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="Seu e-mail"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-brand-pink)] transition-all font-sans text-sm"
          />

          <textarea 
            name="message"
            rows={4}
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-brand-pink)] transition-all resize-none font-sans text-sm"
            placeholder="Conte-nos o que podemos fazer melhor..."
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[var(--color-brand-pink)] to-[var(--color-brand-pink-dark)] hover:opacity-90 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-2 shadow-[0_0_15px_rgba(209,28,117,0.3)]"
          >
            <Send size={18} />
            Enviar Feedback
          </motion.button>
        </form>
      )}
    </Modal>
  );
}
