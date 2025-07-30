'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function ThemeColorUpdater() {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const color = currentTheme === 'dark' ? 'hsl(0 0% 8.5%)' : 'hsl(0 0% 99%)';
    
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.getElementsByTagName('head')[0].appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', color);
  }, [theme, systemTheme]);

  return null;
}