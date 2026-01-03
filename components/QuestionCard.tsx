
import React, { useState } from 'react';
import type { QuizQuestion } from '../types.ts';
import { motion, AnimatePresence } from 'framer-motion';
import { BatIcon } from './BatIcon.tsx';
import { HeartIcon } from './HeartIcon.tsx';

interface QuestionCardProps {
  questionData: QuizQuestion;
  phaseTitle: string;
  questionNumber: number;
  totalQuestions: number;
  isAnswerShown: boolean;
  onShowAnswer: () => void;
  onNext: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questionData,
  phaseTitle,
  questionNumber,
  totalQuestions,
  isAnswerShown,
  onShowAnswer,
  onNext,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (optionText: string) => {
    setSelectedOption(optionText);
    onShowAnswer();
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };
  
  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={questionNumber}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-primary shadow-2xl rounded-2xl p-6 md:p-8 w-full min-h-[70vh] flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-caveat font-bold text-accent">{phaseTitle}</h2>
            <span className="text-sm font-poppins text-light/70">{questionNumber} / {totalQuestions}</span>
          </div>

          <motion.div variants={contentVariants}>
            <p className="text-2xl md:text-3xl font-poppins font-semibold text-light mb-6 min-h-[100px]">{questionData.question}</p>
            {questionData.image && (
              <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
                <img src={questionData.image} alt="Memória" className="w-full h-auto max-h-64 object-cover" />
              </div>
            )}
            
            {!isAnswerShown && questionData.options && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {questionData.options.map((opt, index) => (
                        <button key={index} onClick={() => handleOptionClick(opt.text)} className="w-full text-left bg-secondary p-4 rounded-lg hover:bg-accent transition-colors duration-300">
                           {opt.text}
                        </button>
                    ))}
                </div>
            )}
          </motion.div>
        </div>

        <div className="mt-8">
            <AnimatePresence>
              {isAnswerShown && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-secondary p-6 rounded-lg text-center mb-6 relative"
                >
                  <div className="absolute -top-4 -left-4 animate-float">
                     <BatIcon className="w-10 h-10 text-accent/50 transform -rotate-12" />
                  </div>
                  <p className="text-xl md:text-2xl font-caveat text-light">{questionData.answer}</p>
                  <div className="absolute -bottom-4 -right-4 animate-float" style={{animationDelay:'0.3s'}}>
                     <HeartIcon className="w-10 h-10 text-accent/80 transform rotate-12" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-center">
              {!isAnswerShown && !questionData.options ? (
                <button onClick={onShowAnswer} className="bg-accent text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-105 text-lg">
                  Revelar Resposta
                </button>
              ) : isAnswerShown ? (
                 <button onClick={onNext} className="bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 text-lg">
                   Próxima
                </button>
              ) : null }
            </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionCard;