import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import LogoTile from '../components/LogoTile';
import RichText from '../utils/RichText';

export default function CardLogoGrid({ data, className = '', style }) {
  const {
    header,
    paragraphs = [],
    label,
    logos = [],
    logoSize,
  } = data;

  return (
    <Card className={className} style={style}>
      <CardHeader {...header} />

      <div className="px-5 py-4 flex flex-col gap-3">
        {paragraphs.map((text, i) => (
          <RichText key={i} className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
            {text}
          </RichText>
        ))}

        {label && (
          <p className="font-body font-bold text-[14px] text-black tracking-[-0.42px]">
            {label}
          </p>
        )}

        {/* Logo grid */}
        <div className="flex flex-col gap-2">
          {logos.map((row, ri) => (
            <div key={ri} className="flex gap-2">
              {row.map((logo) => (
                <LogoTile key={logo.alt} src={logo.src} alt={logo.alt} size={logoSize} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
