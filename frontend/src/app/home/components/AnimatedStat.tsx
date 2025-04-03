"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

interface AnimatedStatProps {
  value: string;
  label: string;
  secondaryValue?: string;
}

const glitchChars = "!<>-_\\/[]{}—=+*^?#0123456789";

function getRandomChar() {
  return glitchChars[Math.floor(Math.random() * glitchChars.length)];
}

export function AnimatedStat({ value, label, secondaryValue }: AnimatedStatProps) {
  const [displayedChars, setDisplayedChars] = useState<string[]>(
    Array(value.length).fill("X")
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (currentIndex >= value.length) return;

    // Glitch effect for current character
    const glitchInterval = setInterval(() => {
      setIsGlitching(prev => !prev); // Toggle glitch state for animation
      setDisplayedChars(prev => {
        const next = [...prev];
        // Only glitch characters after the current stable index
        for (let i = currentIndex; i < value.length; i++) {
          next[i] = getRandomChar();
        }
        return next;
      });
    }, 50);

    // Stabilize current character after delay and move to next
    const stabilizeTimeout = setTimeout(() => {
      setDisplayedChars(prev => {
        const next = [...prev];
        next[currentIndex] = value[currentIndex];
        return next;
      });
      setCurrentIndex(prev => prev + 1);
    }, 300); // Time before moving to next character

    return () => {
      clearInterval(glitchInterval);
      clearTimeout(stabilizeTimeout);
    };
  }, [currentIndex, value]);

  // Start the animation after initial delay
  useEffect(() => {
    const startDelay = setTimeout(() => {
      setDisplayedChars(prev => {
        const next = [...prev];
        next[0] = value[0]; // Stabilize first character immediately
        return next;
      });
      setCurrentIndex(1); // Start with second character
    }, 500);

    return () => clearTimeout(startDelay);
  }, [value]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <h3 className="text-2xl font-medium text-primary-text">
          {displayedChars.map((char, index) => (
            <span
              key={index}
              className={clsx(
                "inline-block transition-transform",
                index >= currentIndex && {
                  "animate-glitch-shift": isGlitching,
                  "relative before:absolute before:left-0 before:top-0 before:z-[-1] before:text-primary-purple before:opacity-50 before:content-[attr(data-char)] before:blur-[1px] after:absolute after:left-0 after:top-0 after:z-[-1] after:text-primary-blue after:opacity-50 after:content-[attr(data-char)] after:blur-[1px]": true,
                  "text-shadow-neon": true,
                }
              )}
              data-char={char}
              style={{
                transform: index >= currentIndex && isGlitching
                  ? `translate(${Math.random() * 1 - 0.5}px, ${Math.random() * 1 - 0.5}px)`
                  : 'none'
              }}
            >
              {char}
            </span>
          ))}
        </h3>
        {secondaryValue && (
          <h3 className="text-2xl text-primary-blue">{secondaryValue}</h3>
        )}
      </div>
      <p className="font-medium text-primary-text">{label}</p>
    </div>
  );
} 