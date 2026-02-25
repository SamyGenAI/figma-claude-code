import { resolveColor } from '../themes';

export default function IconRow({ icon, children, bgColor = 'accent1' }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="shadow-card size-[32px] flex-shrink-0 flex items-center justify-center"
        style={{
          backgroundColor: resolveColor(bgColor),
          borderRadius: 'var(--shape-icon-chip-radius)',
        }}
      >
        <img src={icon} alt="" className="size-[24px] object-contain" />
      </div>
      <p className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">{children}</p>
    </div>
  );
}
