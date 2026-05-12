import { useId } from 'react';

export default function GoldenDivider() {
  const id = useId();

  return (
    <div className="flex justify-center py-8 px-6">
      <svg
        width="100%"
        height="20"
        viewBox="0 0 300 20"
        preserveAspectRatio="xMidYMid meet"
        className="max-w-md"
      >
        <defs>
          <linearGradient id={`gold-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#C9A96E" />
            <stop offset="50%" stopColor="#C9748A" />
            <stop offset="70%" stopColor="#C9A96E" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="10"
          x2="300"
          y2="10"
          stroke={`url(#gold-grad-${id})`}
          strokeWidth="1"
        />
        <polygon
          points="150,4 156,10 150,16 144,10"
          fill="#C9748A"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
