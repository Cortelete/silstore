import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-[320px] sm:max-w-sm md:max-w-md bg-[#121212] border border-white/10 rounded-[1.5rem] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10">
              <h2 className="text-lg sm:text-xl font-heading font-semibold text-white">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white focus:outline-none"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
