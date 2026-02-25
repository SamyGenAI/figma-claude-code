export default function LogoTile({ src, alt = '', size = 50, className = '' }) {
  const innerSize = Math.round(size * 0.76);
  return (
    <div
      className={`bg-white rounded-[5px] shadow-card flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          className="object-contain"
          style={{ maxWidth: innerSize, maxHeight: innerSize }}
        />
      )}
    </div>
  );
}
