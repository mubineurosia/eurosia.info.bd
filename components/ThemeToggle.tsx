// components/ThemeToggle.tsx
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(typeof window !== 'undefined' ? localStorage.theme : 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

return (
  <button onClick={toggleTheme} className="p-2 text-white rounded-full focus:outline-none">
    {theme === 'dark' ? (
      <svg className="w-6 h-6 text-yellow-500 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1m-1.636 6.364l-.707-.707M12 21v-1m-6.364-1.636l.707-.707M3 12H2m1.636-6.364l.707.707"></path>
      </svg>
    ) : (
      <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12a7 7 0 0114 0 7 7 0 01-14 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 19v.01M5 12h.01M19 12h.01M16.24 7.76l-.01.01M7.76 16.24l-.01.01M16.24 16.24l-.01-.01M7.76 7.76l-.01-.01"></path>
      </svg>
    )}
  </button>
);
};

export default ThemeToggle