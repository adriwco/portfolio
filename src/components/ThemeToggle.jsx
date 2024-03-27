import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove(theme === 'dark' ? 'light' : 'dark');
    html.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      className="ml-8 p-5 relative border-solid bg-fundo-3 rounded-full shadow-primeira shadow-md transition-all duration-300 hover:shadow-lg"
      onClick={toggleTheme}
    >
      <FontAwesomeIcon
        icon={faSun}
        size="lg"
        className={`text-yellow-500 shadow-yellow-500  transition-opacity duration-500 absolute top-[10px] right-[9px] ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <FontAwesomeIcon
        icon={faMoon}
        size="lg"
        className={`text-gray-500 shadow-gray-500 transition-opacity duration-500 absolute top-[10px] right-3 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
