import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import FloatingHearts from '../components/FloatingHearts';

function YesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Create a festive confetti burst
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const colors = ['#ff69b4', '#ff1493', '#ff69b4', '#4169e1', '#1e90ff'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    // Add a big burst in the middle
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center p-4">
      <FloatingHearts />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center text-white shadow-xl border border-white/20">
          <h1 className="text-4xl font-bold mb-6">Yay! 🎉</h1>
          <p className="text-xl mb-8">I knew you'd say yes!</p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/final')}
            className="px-8 py-3 bg-blue-400 hover:bg-blue-300 rounded-full font-semibold transition-colors"
          >
            Continue
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default YesPage;