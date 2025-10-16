'use client';

import { useTheme } from './ThemeProvider';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ className = '', floating = false }: { className?: string; floating?: boolean }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      aria-pressed={theme === 'dark'}
      onClick={toggle}
      className={[styles.toggle, theme === 'dark' ? styles.dark : styles.light, floating ? styles.floating : '', className].join(' ').trim()}
    >
      <span className={styles.knob} />
      <span className={styles.label}>{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  );
}
