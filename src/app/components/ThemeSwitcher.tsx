"use client"

import { useEffect, useState } from 'react';

interface ThemeSwitcherProps {
  themes: string[];
}

export default function ThemeSwitcher({ themes }: ThemeSwitcherProps) {
  const [themeIndex, setThemeIndex] = useState(0);
  const toggleTheme = (index: number) => {
    setThemeIndex(index);
  };
  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      htmlElement.setAttribute('data-theme', themes[themeIndex]);
    }
  }, [themeIndex, themes]);
  return (

            <li>
                <details>
                    <summary>Temas</summary>
                    <ul className='p-2 bg-base-100'>
                        {themes.map((theme, index) => (
                            <li key={theme}>
                            <button onClick={() => toggleTheme(index)}>
                                {theme.toUpperCase()}
                            </button>
                            </li>
                        ))}
                    </ul>
                </details>
            </li>

  );
}