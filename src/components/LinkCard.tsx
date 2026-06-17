import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface LinkCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  href?: string;
}

export function LinkCard({ icon, title, subtitle, onClick, href }: LinkCardProps) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
      whileTap={{ scale: 0.98 }}
      className="relative flex items-center p-3 sm:p-4 mb-4 w-full bg-white/5 border border-white/10 rounded-2xl shadow-[0_4px_14px_0_rgba(209,28,117,0.1)] hover:shadow-[0_6px_20px_rgba(209,28,117,0.2)] transition-all duration-300 overflow-hidden cursor-pointer group min-h-[4.5rem] sm:min-h-[5rem]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-pink)]/0 via-[var(--color-brand-pink)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-black/40 text-[var(--color-brand-pink)] rounded-full border border-white/10 ml-2">
        {icon}
      </div>
      
      <div className="absolute inset-x-0 w-full h-full flex flex-col items-center justify-center text-center px-14 sm:px-16 pointer-events-none z-10">
        <h3 className="font-heading font-semibold text-white text-sm sm:text-base md:text-lg tracking-wide w-full truncate">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm text-white/50 mt-0.5 font-sans w-full truncate">
            {subtitle}
          </p>
        )}
      </div>
      
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} className="w-full">
      {content}
    </div>
  );
}
