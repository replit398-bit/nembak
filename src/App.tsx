import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ReasonsSection from './components/ReasonsSection';
import LetterSection from './components/LetterSection';
import QuestionSection from './components/QuestionSection';
import CelebrationScreen from './components/CelebrationScreen';
import FloatingHearts from './components/FloatingHearts';

export default function App() {
  const [answered, setAnswered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  if (answered) {
    return <CelebrationScreen />;
  }

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-red-50 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <FloatingHearts />
      <HeroSection />
      <ReasonsSection />
      <LetterSection />
      <QuestionSection onYes={() => setAnswered(true)} />
    </div>
  );
}
