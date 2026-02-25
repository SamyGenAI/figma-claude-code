export default function Card({ children, className = '', style }) {
  return (
    <div
      className={`shadow-card overflow-hidden ${className}`}
      style={{
        backgroundColor: 'var(--shape-card-bg)',
        border: 'var(--shape-card-border-width) solid var(--shape-card-border-color)',
        borderRadius: 'var(--shape-card-radius)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
