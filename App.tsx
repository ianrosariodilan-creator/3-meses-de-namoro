
import React, { useState, useMemo } from 'react';
import { quizData, finalQuestionData, finalVideoData } from './constants';
import QuestionCard from './components/QuestionCard';
import ChartCard from './components/ChartCard';
import VideoCard from './components/VideoCard';
import { BatIcon } from './components/BatIcon';
import { HeartIcon } from './components/HeartIcon';

type AppState = 'welcome' | 'quiz' | 'charts' | 'final-question' | 'video';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  const allQuestions = useMemo(() => quizData.flatMap(phase => phase.questions), []);
  
  const currentQuestion = allQuestions[currentQuestionIndex];
  const currentPhase = quizData.find(phase => phase.questions.includes(currentQuestion));

  const handleStartQuiz = () => {
    setAppState('quiz');
  };

  const handleShowAnswer = () => {
    setIsAnswerShown(true);
  };

  const handleNext = () => {
    setIsAnswerShown(false);
    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setAppState('charts');
    }
  };
  
  const handleChartsDone = () => {
      setAppState('final-question');
  };
  
  const handleFinalQuestionDone = () => {
      setAppState('video');
  };

  const renderContent = () => {
    switch (appState) {
      case 'welcome':
        return (
          <div className="text-center text-light p-8 flex flex-col items-center justify-center min-h-screen">
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-7xl font-caveat font-bold text-accent animate-pulse">
                Quiz: 3 Meses de Nós
              </h1>
              <div className="absolute -top-8 -left-12 animate-float">
                <BatIcon className="w-16 h-16 text-secondary transform -rotate-12" />
              </div>
               <div className="absolute -bottom-8 -right-12 animate-float" style={{animationDelay: '0.5s'}}>
                <HeartIcon className="w-16 h-16 text-accent transform rotate-12" />
              </div>
            </div>
            <p className="text-xl md:text-2xl font-poppins mb-8">Será que você sabe tudo sobre o seu namoradinho, Clarice?</p>
            <p className="text-2xl md:text-3xl font-caveat mb-10">I ❤️ MC</p>
            <button
              onClick={handleStartQuiz}
              className="bg-accent text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-500 transition-all duration-300 transform hover:scale-105 text-xl font-poppins"
            >
              Começar Aventura!
            </button>
          </div>
        );
      case 'quiz':
        if (!currentQuestion || !currentPhase) return null;
        return (
          <QuestionCard
            questionData={currentQuestion}
            phaseTitle={currentPhase.title}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={allQuestions.length}
            isAnswerShown={isAnswerShown}
            onShowAnswer={handleShowAnswer}
            onNext={handleNext}
          />
        );
      case 'charts':
        return <ChartCard onNext={handleChartsDone} />;
      case 'final-question':
        return (
             <QuestionCard
                questionData={finalQuestionData}
                phaseTitle="A Grande Final!"
                questionNumber={allQuestions.length + 1}
                totalQuestions={allQuestions.length + 1}
                isAnswerShown={isAnswerShown}
                onShowAnswer={handleShowAnswer}
                onNext={handleFinalQuestionDone}
              />
        );
      case 'video':
        return <VideoCard videoData={finalVideoData} />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-background font-poppins text-light p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </main>
  );
};

export default App;
