import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingHearts from '../components/FloatingHearts';

function QuestionPage() {
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
          <motion.img
            src="https://img.freepik.com/free-vector/cute-girl-holding-heart-cartoon-vector-icon-illustration-people-love-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4161.jpg"
            alt="Cute cartoon girl"
            className="w-64 h-64 mx-auto mb-6 rounded-full object-cover bg-white/20 p-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          <h1 className="text-4xl font-bold mb-6">Will you be my Valentine?</h1>
          
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/yes')}
              className="px-8 py-3 bg-blue-400 hover:bg-blue-300 rounded-full font-semibold transition-colors"
            >
              Yes
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/yes')}
              className="px-8 py-3 bg-pink-400 hover:bg-pink-300 rounded-full font-semibold transition-colors"
            >
              Yes
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default QuestionPage;