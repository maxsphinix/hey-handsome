import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import FloatingHearts from '../components/FloatingHearts';

function FinalPage() {
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
          <h1 className="text-4xl font-bold mb-6">Thank You! ❤️</h1>
          <p className="text-xl mb-4">You've made me the happiest girl!</p>
          <p className="text-lg mb-8">Can't wait to spend Valentine's Day with you!</p>
          
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className="w-16 h-16 mx-auto text-red-400" fill="currentColor" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default FinalPage;