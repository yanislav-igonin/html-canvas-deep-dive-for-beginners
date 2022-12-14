import { Dispatch, useEffect, useState } from 'react';

export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

function useDarkMode() {
  const isBrowser = typeof window !== 'undefined';
  const savedTheme = isBrowser ? localStorage.getItem('theme') : null;
  const [theme, setTheme] = useState(savedTheme || ThemeMode.Light);
  const previousTheme = theme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark;

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(previousTheme);
    root.classList.add(theme);

    if (isBrowser) {
      localStorage.setItem('theme', theme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return [theme, setTheme] as [ThemeMode, Dispatch<ThemeMode>];
}

export default useDarkMode;
