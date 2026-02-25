import { resolveColor } from '../themes';

const variantKeys = {
  blue:  'accent1',
  amber: 'accent2',
  green: 'accent3',
  pink:  'accent4',
};

export default function Badge({ children, variant = 'blue', bgColor, className = '' }) {
  const colorKey = bgColor || variantKeys[variant] || variantKeys.blue;
  return (
    <div
      className={`shadow-card px-3 py-1 inline-flex items-center justify-center ${className}`}
      style={{
        backgroundColor: resolveColor(colorKey),
        borderRadius: 'var(--shape-badge-radius)',
      }}
    >
      {children}
    </div>
  );
}
