"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/13074436778"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
      style={{ backgroundColor: "#25D366" }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-whatsapp/30"
        aria-hidden="true"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.27 4.89L2 22l5.23-1.24A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.5 14c-.23.65-1.34 1.24-1.85 1.32-.51.08-1 .36-3.36-.7-2.86-1.29-4.68-4.22-4.82-4.42-.14-.2-1.16-1.54-1.16-2.94s.73-2.09.99-2.37c.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.03.51-.1.19-.15.31-.3.48-.15.17-.31.38-.45.51-.15.14-.3.3-.13.59.17.29.76 1.26 1.63 2.04 1.12 1 2.07 1.31 2.36 1.46.29.15.46.13.63-.07.17-.2.73-.84.92-1.13.19-.29.39-.24.66-.15.27.1 1.71.81 2 .96.29.15.49.22.56.34.07.12.07.69-.16 1.34z" />
      </svg>
    </motion.a>
  );
}
