import { useEffect } from 'react';
import { useLocation, useNavigate } from '@tanstack/react-router';
import { getOppositeDemoStackNavigate } from '@/lib/demoStackToggle';

function isTextFieldTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(
    target.closest('input, textarea, select, [contenteditable="true"]'),
  );
}

/**
 * Press `$` (Shift+4 on US QWERTY) to jump between `/tsq/...` and `/tsdb/...`
 * for the same logical screen when possible. Ignored while typing in a field.
 */
export function useDemoStackToggleHotkey() {
  const navigate = useNavigate();
  const pathname = useLocation({ select: (l) => l.pathname });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== '$' || e.repeat) return;
      if (e.metaKey || e.ctrlKey) return;
      if (isTextFieldTarget(e.target)) return;

      const opts = getOppositeDemoStackNavigate(pathname);
      if (!opts) return;

      e.preventDefault();
      navigate(opts);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [navigate, pathname]);
}
