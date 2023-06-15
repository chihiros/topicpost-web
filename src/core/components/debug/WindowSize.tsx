import React from 'react';

/*
Breakpoint prefix	Minimum width	CSS
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
*/

export const WindowSize: React.FC = () => {
  const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState<number>(window.innerHeight);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  const GetResponsiveDesignSize = () => {
    if (windowWidth <= 640) {
      return 'sm';
    } else if (windowWidth <= 768) {
      return 'md';
    } else if (windowWidth <= 1024) {
      return 'lg';
    } else if (windowWidth <= 1280) {
      return 'xl';
    } else if (windowWidth <= 1536) {
      return '2xl';
    } else {
      return '2xl';
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed bottom-0 right-0 bg-gray-100 p-2 text-xs text-gray-500">
      <div className="flex items-center justify-center">
        <div className="mr-2">Width: {windowWidth}px</div>
        <div className="mr-2">Height: {windowHeight}px</div>
        <div>Tailwind Responsive Design: {GetResponsiveDesignSize()}</div>
      </div>
    </div>
  );
}
