import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Involvement } from './components/Involvement';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CyberBackground } from './components/CyberBackground';
import { useState, useEffect } from 'react';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="size-full relative">
      <CyberBackground />
      <div className="relative z-10">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main>
          <Hero />
          <Education />
          <Experience />
          <Projects />
          <Involvement />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}