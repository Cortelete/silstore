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
  const [feedback, setFeedback] = useState('');

  const handleRate = (value: number) => {
    setRating(value);
    if (value === 5) {
      window.open('https://search.google.com/local/writereview?placeid=ChIJR-eMMAAb6JQRhd5E1oPePX8', '_blank');
      setTimeout(onClose, 1000);
    } else {
      setTimeout(() => setStep(2), 500);
    }
  };

  const submitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    // Use formsubmit.co or similar mechanism when integrated later
    alert("Avaliação enviada com sucesso! Agradecemos o seu feedback.");
    onClose();
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
        <form onSubmit={submitFeedback} className="space-y-4">
          <p className="text-white/80 font-sans text-sm mb-4">
            Notamos que sua avaliação foi de {rating} estrela{rating > 1 ? 's' : ''}. O que houve e como podemos melhorar?
          </p>
          <textarea 
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-brand-pink)] transition-all resize-none font-sans text-sm"
            placeholder="Conte-nos o que podemos fazer melhor..."
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-[var(--color-brand-pink)] hover:bg-[var(--color-brand-pink-dark)] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2"
          >
            <Send size={18} />
            Enviar Feedback
          </motion.button>
        </form>
      )}
    </Modal>
  );
}
