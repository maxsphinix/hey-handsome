import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', x: `${heart.x}vw`, opacity: 0 }}
          animate={{
            y: '-20vh',
            opacity: [0, 1, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'easeOut'
          }}
          className="absolute"
        >
          <Heart className="w-8 h-8 text-blue-200" fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;