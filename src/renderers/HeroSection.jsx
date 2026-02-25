export default function HeroSection({ data }) {
  const {
    title,
    titleSize     = '72px',
    titleTracking = '-2.19px',
    subtitle,
    subtitleSize     = '29px',
    subtitleTracking = '-0.89px',
    subtitleMargin   = 'mt-1',
    icon,
  } = data;

  return (
    <section className="relative h-[195px] overflow-hidden">
      <div className="h-full flex flex-col justify-center pl-[59px] pr-[160px]">
        <h1
          className="font-heading font-bold leading-none whitespace-nowrap"
          style={{ fontSize: titleSize, letterSpacing: titleTracking, color: 'var(--theme-primary)' }}
        >
          {title}
        </h1>
        <p
          className={`font-heading font-medium italic ${subtitleMargin}`}
          style={{ fontSize: subtitleSize, letterSpacing: subtitleTracking, color: 'var(--theme-primary)' }}
        >
          {subtitle}
        </p>
      </div>

      {icon && (
        <div className="absolute top-[56px] right-[59px] flex items-center justify-center size-[139px]">
          <div className="-rotate-[30deg]">
            <img
              src={icon}
              alt=""
              className="size-[102px] object-contain shadow-[0px_4px_15px_4px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
