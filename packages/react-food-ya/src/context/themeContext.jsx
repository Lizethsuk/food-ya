/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light');
    } else {
      setTheme(localStorage.getItem('theme'));
    }
  }, []);

  const ToggleTheme = () => {
    const themeValue = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
    setTheme(themeValue);
    localStorage.setItem('theme', themeValue);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, ToggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeProvider };
