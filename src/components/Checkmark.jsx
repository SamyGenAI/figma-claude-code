import { useTheme } from '../themes';

export default function Checkmark({ color = 'var(--theme-checkmark)', className = 'size-[32px]' }) {
  const theme = useTheme();
  const shape = theme.assets?.checkmarkShape ?? 'rounded-square';

  return (
    <div className={`flex-shrink-0 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {shape === 'circle'
          ? <circle cx="16" cy="16" r="16" fill={color} />
          : <rect width="32" height="32" rx="5" fill={color} />
        }
        <path d="M7 16L13 22L25 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
