import { useState, useEffect } from 'react';

export function useThemeColors() {
  const [colors, setColors] = useState({
    background: 'oklch(1 0 0)',
    foreground: 'oklch(0.145 0 0)',
    muted: 'oklch(0.97 0 0)',
    mutedForeground: 'oklch(0.556 0 0)',
  });

  useEffect(() => {
    const body = document.body;
    const observer = new MutationObserver(() => {
      const computedStyle = getComputedStyle(body);
      setColors({
        background: computedStyle.getPropertyValue('--background').trim(),
        foreground: computedStyle.getPropertyValue('--foreground').trim(),
        muted: computedStyle.getPropertyValue('--muted').trim(),
        mutedForeground: computedStyle.getPropertyValue('--muted-foreground').trim(),
      });
    });

    observer.observe(body, { attributes: true, attributeFilter: ['class'] });

    // Initial colors
    const computedStyle = getComputedStyle(body);
    setColors({
      background: computedStyle.getPropertyValue('--background').trim(),
      foreground: computedStyle.getPropertyValue('--foreground').trim(),
      muted: computedStyle.getPropertyValue('--muted').trim(),
      mutedForeground: computedStyle.getPropertyValue('--muted-foreground').trim(),
    });

    return () => observer.disconnect();
  }, []);

  return colors;
}
