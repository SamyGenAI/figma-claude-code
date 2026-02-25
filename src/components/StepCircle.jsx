import { resolveColor } from '../themes';

export default function StepCircle({ number, bgColor = 'accent4', className = '' }) {
  return (
    <div
      className={`rounded-full shadow-card size-[32px] flex-shrink-0 flex items-center justify-center ${className}`}
      style={{ backgroundColor: resolveColor(bgColor) }}
    >
      <span className="font-heading font-bold text-[16px] text-black tracking-[-0.48px] leading-none">
        {number}
      </span>
    </div>
  );
}
