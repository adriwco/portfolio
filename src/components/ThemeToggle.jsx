import { useEffect, useState } from 'react';

export default function ThemeToggle() {
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
    <button className="p-5" onClick={toggleTheme}>
      X
    </button>
  );
}
