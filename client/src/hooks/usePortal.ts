import { useLayoutEffect, useRef } from 'react';

export const usePortal = () => {
  const portalContainerRef = useRef<HTMLDivElement>(
    document.createElement('div'),
  );

  useLayoutEffect(() => {
    const container = portalContainerRef.current;
    document.body.append(container);

    return () => container.remove();
  }, []);

  return portalContainerRef.current;
};
