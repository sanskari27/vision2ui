import { useEffect, useState } from 'react';

export type VSCodeTheme = 'light' | 'dark' | 'high-contrast';

export function useVSCodeTheme(): VSCodeTheme {
  const [theme, setTheme] = useState<VSCodeTheme>('dark');

  useEffect(() => {
    // Get initial theme from VS Code
    const updateTheme = () => {
      const body = document.body;
      const computedStyle = window.getComputedStyle(body);
      const backgroundColor = computedStyle.backgroundColor;
      
      // Simple heuristic: if background is dark, use dark theme
      const rgb = backgroundColor.match(/\d+/g);
      if (rgb) {
        const [r, g, b] = rgb.map(Number);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        setTheme(brightness < 128 ? 'dark' : 'light');
      }
    };

    // Check for VS Code theme class
    const checkTheme = () => {
      const html = document.documentElement;
      if (html.classList.contains('vscode-dark') || html.classList.contains('vscode-high-contrast')) {
        setTheme(html.classList.contains('vscode-high-contrast') ? 'high-contrast' : 'dark');
      } else if (html.classList.contains('vscode-light')) {
        setTheme('light');
      } else {
        updateTheme();
      }
    };

    // Initial check
    checkTheme();

    // Listen for theme changes via message from extension
    const handleMessage = (event: MessageEvent) => {
      if (event.data.command === 'themeChanged') {
        const newTheme = event.data.theme;
        if (newTheme === 'dark' || newTheme === 'light') {
          setTheme(newTheme);
        } else {
          checkTheme();
        }
      }
    };

    window.addEventListener('message', handleMessage);

    // Also observe body class changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.removeEventListener('message', handleMessage);
      observer.disconnect();
    };
  }, []);

  return theme;
}

