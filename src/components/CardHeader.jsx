import { resolveColor } from '../themes';

export default function CardHeader({ title, icon, bgColor = 'primary', className = '' }) {
  return (
    <div
      className={`h-[51px] flex items-center justify-center relative px-4 ${className}`}
      style={{ backgroundColor: resolveColor(bgColor) }}
    >
      {icon && (
        <img src={icon} alt="" className="absolute left-3 size-[35px] object-contain" />
      )}
      <span
        className="font-heading font-bold text-[32px] tracking-[-0.96px] leading-none"
        style={{ color: 'var(--theme-on-primary)' }}
      >
        {title}
      </span>
    </div>
  );
}
