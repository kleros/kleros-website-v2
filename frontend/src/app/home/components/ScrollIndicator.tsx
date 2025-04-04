"use client";

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 animate-slow-bounce">
      <div className="flex flex-col items-center gap-2">
        <span className="text-base text-primary-text/70">Scroll</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-primary-text/70"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  );
}
