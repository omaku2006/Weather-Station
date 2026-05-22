import { useState, useEffect, useRef } from 'react';
import './TextTypeAnimation.css';

interface TextTypeAnimationProps {
  text: string;
  duration?: number;
  deleteDuration?: number;
  startDelay?: number;
  repeatDelay?: number;
  isActive?: boolean;
  placeholder?: string;
  showCursor?: boolean;
  infinite?: boolean;
  loopCount?: number;
  threshold?: number;
  once?: boolean;
}

const TextTypeAnimation: React.FC<TextTypeAnimationProps> = ({
  text,
  duration = 50,
  deleteDuration = 30,
  startDelay = 0,
  repeatDelay = 1000,
  isActive = true,
  placeholder = '',
  showCursor = false,
  infinite = false,
  loopCount = 0,
  threshold = 0.5,
  once = false,
}) => {
  const [displayText, setDisplayText] = useState<string>(placeholder);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const [currentLoop, setCurrentLoop] = useState<number>(0);

  const elementRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 🔍 Intersection Observer
  useEffect(() => {
    if (!isActive || (hasAnimated && once)) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setTimeout(() => {
              setHasStarted(true);
              if (once) setHasAnimated(true);
            }, startDelay);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isActive, hasStarted, hasAnimated, once, threshold, startDelay]);

  // ⌨️ Typing/Deleting Logic - FIXED
  useEffect(() => {
    if (!hasStarted || !isActive) return;

    // Check if animation should stop
    const totalLoops = loopCount || 1;
    const shouldStop = !infinite && currentLoop >= totalLoops && currentIndex === 0 && !isDeleting;

    if (shouldStop) return;

    // Determine next action
    if (!isDeleting && currentIndex < text.length) {
      // 🔼 TYPING
      timerRef.current = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, duration);
    } else if (!isDeleting && currentIndex === text.length) {
      // ✋ PAUSE after typing complete
      timerRef.current = setTimeout(() => {
        if (infinite || currentLoop < totalLoops - 1) {
          setIsDeleting(true);
        }
      }, repeatDelay);
    } else if (isDeleting && currentIndex > 0) {
      // 🔽 DELETING
      timerRef.current = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex - 1));
        setCurrentIndex((prev) => prev - 1);
      }, deleteDuration);
    } else if (isDeleting && currentIndex === 0) {
      // ✋ PAUSE after deleting complete
      timerRef.current = setTimeout(() => {
        setIsDeleting(false);
        setCurrentLoop((prev) => prev + 1);
      }, repeatDelay);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [
    currentIndex,
    isDeleting,
    text,
    duration,
    deleteDuration,
    repeatDelay,
    infinite,
    loopCount,
    currentLoop,
    hasStarted,
    isActive,
  ]);

  const containerStyle: React.CSSProperties = {
    display: 'inline-block',
    minHeight: '1.2em',
    verticalAlign: 'bottom',
    whiteSpace: 'wrap',
  };

  const isAnimating = hasStarted && isActive;

  return (
    <span ref={elementRef} style={containerStyle}>
      {displayText}
      {showCursor && isAnimating && (
        <span
          className="typing-cursor"
          style={{
            animation: 'blink 0.7s infinite',
            marginLeft: '2px',
            textWrap: 'auto',
            whiteSpace: 'wrap',
          }}
        >
          |
        </span>
      )}
    </span>
  );
};

export default TextTypeAnimation;
