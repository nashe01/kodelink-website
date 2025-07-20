import { useEffect, useRef, useState } from "react";

interface TargetCursorProps {
  targetSelector?: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
}

const TargetCursor = ({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = true,
}: TargetCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('cursor-target')) {
        setIsSpinning(true);
      }
    };

    const handleMouseLeave = () => {
      setIsSpinning(false);
    };

    // Add global styles for hiding default cursor
    if (hideDefaultCursor) {
      const style = document.createElement('style');
      style.textContent = `
        * {
          cursor: none !important;
        }
        .cursor-target {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', () => setIsVisible(true));
    document.addEventListener('mouseleave', () => setIsVisible(false));
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', () => setIsVisible(true));
      document.removeEventListener('mouseleave', () => setIsVisible(false));
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [hideDefaultCursor]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        left: position.x - 12,
        top: position.y - 12,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`w-6 h-6 border-2 border-blue-500 rounded-full transition-all duration-300 ${
          isSpinning ? 'animate-spin' : ''
        }`}
        style={{
          animationDuration: `${spinDuration}s`,
        }}
      >
        <div className="w-full h-full bg-blue-500/20 rounded-full"></div>
      </div>
      <div
        className={`absolute top-1/2 left-1/2 w-1 h-1 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isSpinning ? 'scale-150' : 'scale-100'
        }`}
      ></div>
    </div>
  );
};

export default TargetCursor; 