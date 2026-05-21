import { useState, useEffect } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Education from './components/Education';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const themeClasses = theme === 'dark' 
    ? "bg-[#0b3b60] text-white" 
    : "bg-gray-100 text-gray-900";

  const cardClasses = theme === 'dark'
    ? "bg-[#125488] border-[#7dd3fc]/40"
    : "bg-white border-blue-300";

  return (
    <div className={`min-h-screen flex justify-center py-10 px-4 font-sans leading-relaxed transition-colors duration-500 ${themeClasses}`}>
      <div className={`max-w-4xl w-full p-8 md:p-12 border border-dashed shadow-2xl relative ${cardClasses}`}>
        
        {/* Кнопка перемикання теми */}
        <button 
          onClick={toggleTheme}
          className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded shadow"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>

        <Header />
        <main className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10">
          <div className="flex flex-col gap-8 md:border-r md:border-dashed md:border-current md:pr-10">
            <Summary />
            <Education />
          </div>
          <div className="flex flex-col gap-8">
            <Skills />
            <Reviews />
          </div>
        </main>
        <Footer />
      </div>
      <ContactForm />
    </div>
  );
}

export default App;