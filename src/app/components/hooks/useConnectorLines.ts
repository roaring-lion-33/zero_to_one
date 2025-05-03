import { useEffect, useState } from 'react';

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export function useConnectorLines(refs: React.RefObject<HTMLElement>[]) {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const updateLines = () => {
      const nextLines: Line[] = [];

      for (let i = 0; i < refs.length - 1; i++) {
        const from = refs[i].current;
        const to = refs[i + 1].current;

        if (from && to) {
          const fromRect = from.getBoundingClientRect();
          const toRect = to.getBoundingClientRect();

          nextLines.push({
            x1: fromRect.left + fromRect.width / 2,
            y1: fromRect.top + fromRect.height / 2,
            x2: toRect.left + toRect.width / 2,
            y2: toRect.top + toRect.height / 2,
          });
        }
      }

      setLines(nextLines);
    };

    updateLines();
    window.addEventListener('resize', updateLines);
    window.addEventListener('scroll', updateLines, true);

    return () => {
      window.removeEventListener('resize', updateLines);
      window.removeEventListener('scroll', updateLines, true);
    };
  }, [refs]);

  return lines;
}
