export default function FooterSection({ data }) {
  const { cta = 'Follow for more', name, avatar } = data;

  return (
    <footer
      className="h-[70px] flex items-center justify-center gap-4"
      style={{
        backgroundColor: 'var(--theme-primary)',
        borderRadius: 'var(--shape-footer-radius)',
      }}
    >
      <span
        className="font-heading font-semibold text-[24px] tracking-[-0.72px]"
        style={{ color: 'var(--theme-on-primary)' }}
      >
        {cta}
      </span>

      {avatar && (
        <img
          src={avatar}
          alt={name}
          className="size-[44px] rounded-full border-2 border-white shadow-card object-cover"
        />
      )}

      {name && (
        <span
          className="font-heading font-semibold text-[24px] tracking-[-0.72px]"
          style={{ color: 'var(--theme-on-primary)' }}
        >
          {name}
        </span>
      )}
    </footer>
  );
}
