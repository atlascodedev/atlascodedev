import { useScrollbarContext } from '@atlascode/frontend-smoothscroll';
import React from 'react';
import { Data2d } from 'smooth-scrollbar/interfaces';
import { Box } from '@mui/material';

export function useSmoothScrollOffset() {
  const { scrollbarInstance } = useScrollbarContext();

  const [offset, setOffset] = React.useState<Data2d>({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = React.useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  });

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let subscribe: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let windowSubscribe: any;

    if (typeof window !== 'undefined') {
      setWindowSize({ h: window.innerHeight, w: window.innerWidth });

      windowSubscribe = window.addEventListener('resize', () => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        setWindowSize({ w: windowWidth, h: windowHeight });
      });

      subscribe = scrollbarInstance?.addListener((status) => {
        const offset = status.offset;

        setOffset(offset);
      });
    }

    return () => {
      scrollbarInstance?.removeListener(subscribe);
      window.removeEventListener('resize', windowSubscribe);
    };
  }, [scrollbarInstance]);

  return { coords: offset, windowSize: windowSize };
}

export default useSmoothScrollOffset;

export const RenderSmoothScrollOffset = (props: {
  children: (
    coords: ReturnType<typeof useSmoothScrollOffset>
  ) => React.ReactElement;
}) => {
  const { coords, windowSize } = useSmoothScrollOffset();

  return (
    <Box>{props.children({ coords: coords, windowSize: windowSize })}</Box>
  );
};
