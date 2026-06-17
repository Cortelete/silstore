import { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, MessageCircle, MapPin, Star, Sparkles, Crown } from 'lucide-react';
import { LinkCard } from './components/LinkCard';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';
import { LocationModal } from './components/LocationModal';
import { RatingModal } from './components/RatingModal';
import { DeveloperModal } from './components/DeveloperModal';
import { VipModal } from './components/VipModal';

export default function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isDevOpen, setIsDevOpen] = useState(false);
  const [isVipOpen, setIsVipOpen] = useState(false);
  const [spinLogo, setSpinLogo] = useState(false);

  const handleLogoClick = () => {
    setSpinLogo(true);
    setTimeout(() => {
      setIsAboutOpen(true);
      setSpinLogo(false);
    }, 800); // Wait for the animation to mostly finish
  };

  return (
    <div className="relative h-[100dvh] bg-animated-gradient flex flex-col items-center justify-between font-sans overflow-hidden">
      
      {/* Decorative ambient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-brand-pink)]/10 blur-[100px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-brand-pink)]/5 blur-[120px]" />
      </div>

      <main className="w-full max-w-[480px] px-3 py-4 sm:py-8 flex flex-col items-center justify-center relative z-10 mx-auto flex-1 h-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-[#121212]/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col items-center"
        >
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-4 sm:mb-8 w-full">
            <button 
              onClick={handleLogoClick}
              className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full mb-0 sm:mb-0 p-1 bg-gradient-to-br from-[var(--color-brand-pink)] via-white/20 to-[#080808] focus:outline-none relative z-10 ${spinLogo ? 'coin-spin' : ''}`}
              aria-label="Sobre SilStore PG"
            >
              <div className="w-full h-full rounded-full bg-[#121212] overflow-hidden shadow-[0_0_25px_rgba(209,28,117,0.3)]">
                 <img 
                   src="/logo.png" 
                   alt="SilStore PG - Logo" 
                   className="w-full h-full object-cover" 
                   onError={(e) => { e.currentTarget.src = "https://placehold.co/200x200/080808/d11c75.png?text=SilStore" }}
                  />
              </div>
            </button>

            <img 
              src="/logofonte.png" 
              alt="SilStore PG" 
              className="h-32 sm:h-48 lg:h-56 -mt-6 sm:-mt-10 -mb-4 sm:-mb-6 object-contain w-auto px-4"
            />
            <p className="text-xs sm:text-sm lg:text-base text-white/70 font-medium text-center tracking-widest uppercase -mt-2 sm:-mt-4">
              Elegância & Luxo
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full flex flex-col items-center space-y-2 sm:space-y-3">
              <LinkCard 
                icon={<Instagram size={18} className="sm:w-[22px] sm:h-[22px]" />}
                title="Instagram"
                subtitle="Siga para novidades e estilo"
                href="https://www.instagram.com/silstorepg"
              />
              
              <LinkCard 
                icon={<MessageCircle size={18} className="sm:w-[22px] sm:h-[22px]" />}
                title="Contato"
                subtitle="Looks, Acessórios e Dúvidas"
                onClick={() => setIsContactOpen(true)}
              />

              <LinkCard 
                icon={<Crown size={18} className="sm:w-[22px] sm:h-[22px]" />}
                title="Grupo VIP"
                subtitle="Benefícios e Ofertas Exclusivas"
                onClick={() => setIsVipOpen(true)}
              />
              
              <LinkCard 
                icon={<MapPin size={18} className="sm:w-[22px] sm:h-[22px]" />}
                title="Localização"
                subtitle="Vem nos visitar em Ponta Grossa"
                onClick={() => setIsLocationOpen(true)}
              />
              
              <LinkCard 
                icon={<Star size={18} className="sm:w-[22px] sm:h-[22px]" />}
                title="Avalie-nos"
                subtitle="O que achou da sua experiência?"
                onClick={() => setIsRatingOpen(true)}
              />
          </div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="w-full py-2 sm:py-4 relative z-10 text-center flex flex-col items-center justify-center">
        <button 
          onClick={() => setIsDevOpen(true)}
          className="text-[10px] sm:text-xs text-white/40 hover:text-white/80 transition-colors flex items-center gap-1.5 focus:outline-none group px-4 py-2"
        >
          Desenvolvido por InteligenciArte.IA
          <Sparkles size={12} className="text-[var(--color-brand-pink)] group-hover:animate-pulse" />
        </button>
      </footer>

      {/* Modals */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <VipModal isOpen={isVipOpen} onClose={() => setIsVipOpen(false)} />
      <LocationModal isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
      <RatingModal isOpen={isRatingOpen} onClose={() => setIsRatingOpen(false)} />
      <DeveloperModal isOpen={isDevOpen} onClose={() => setIsDevOpen(false)} />

    </div>
  );
}
