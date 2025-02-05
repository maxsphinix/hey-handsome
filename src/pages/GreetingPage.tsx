import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingHearts from '../components/FloatingHearts';

function GreetingPage() {
  const navigate = useNavigate();

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
          <h1 className="text-4xl font-bold mb-6">Hey Handsome!</h1>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/question')}
            className="px-8 py-3 bg-blue-400 hover:bg-blue-300 rounded-full font-semibold transition-colors"
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default GreetingPage;