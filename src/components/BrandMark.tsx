interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className = 'w-8 h-8' }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={`shrink-0 block ${className}`}
    >
      <circle
        cx="100"
        cy="100"
        r="58"
        fill="none"
        stroke="#D6B160"
        strokeWidth="18"
        strokeDasharray="295.6 68.8"
        transform="rotate(8 100 100)"
      />
      <rect x="101" y="94" width="58" height="13" fill="#B98D3E" />
      <circle
        cx="152"
        cy="75"
        r="15"
        fill="none"
        stroke="#F1D58F"
        strokeWidth="1.6"
        opacity="0.7"
      />
      <circle cx="152" cy="75" r="8.5" fill="#F1D58F" />
    </svg>
  );
}
