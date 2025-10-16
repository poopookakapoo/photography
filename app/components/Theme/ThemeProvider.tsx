'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';
type Ctx = { theme: Theme; setTheme: (t: Theme) => void; toggle: () => void };
const ThemeContext = createContext<Ctx>({ theme: 'light', setTheme: () => {}, toggle: () => {} });

const THEME_COOKIE = 'theme';
const STORAGE_KEY = 'theme';

function readCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

function writeCookie(name: string, value: string) {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=31536000; Path=/; SameSite=Lax`;
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const fromCookie = readCookie(THEME_COOKIE);
  if (fromCookie === 'light' || fromCookie === 'dark') return fromCookie as Theme;
  const fromStorage = window.localStorage.getItem(STORAGE_KEY);
  if (fromStorage === 'light' || fromStorage === 'dark') return fromStorage as Theme;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const initial = getInitialTheme();
    setThemeState(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const applyTheme = (t: Theme) => {
    setThemeState(t);
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem(STORAGE_KEY, t);
    writeCookie(THEME_COOKIE, t);
  };

  const toggle = () => applyTheme(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    if (!window.matchMedia) return;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      const hasExplicitCookie = readCookie(THEME_COOKIE) !== null;
      const hasExplicitStorage = localStorage.getItem(STORAGE_KEY) !== null;
      if (hasExplicitCookie || hasExplicitStorage) return;
      applyTheme(e.matches ? 'dark' : 'light');
    };
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const value = useMemo(() => ({ theme, setTheme: applyTheme, toggle }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
