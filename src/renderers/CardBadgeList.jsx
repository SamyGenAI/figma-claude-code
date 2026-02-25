import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import Badge from '../components/Badge';
import RichText from '../utils/RichText';

export default function CardBadgeList({ data, className = '', style }) {
  const {
    header,
    intro,
    introStyle,
    sections = [],
  } = data;

  const isSmallText = introStyle === 'italic-centered-13';

  return (
    <Card className={className} style={style}>
      <CardHeader {...header} />

      <div className="px-5 py-4 flex flex-col gap-4 h-full">
        {intro && (
          <RichText
            className={`font-body text-[13px] text-black tracking-[-0.39px] leading-snug italic text-center`}
            boldClass="not-italic font-bold"
          >
            {intro}
          </RichText>
        )}

        {sections.map((section, si) => (
          <div key={si}>
            <p className="font-body font-bold text-[13px] text-black tracking-[-0.39px] mb-2">
              {section.label}
            </p>

            {section.type === 'badges' && (
              <div className="flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <Badge key={item} variant={section.badgeVariant}>
                    <span className="font-body text-[12px] text-black tracking-[-0.36px]">{item}</span>
                  </Badge>
                ))}
              </div>
            )}

            {section.type === 'tags' && (
              <div className="flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="bg-white/30 border border-border rounded-[5px] px-2 py-1 font-body text-[12px] text-black"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            {section.type === 'arrows' && (
              <div className="flex flex-col gap-1">
                {section.items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className={`${section.arrowColor} font-bold text-[13px] leading-snug flex-shrink-0`}>→</span>
                    <span className="font-body text-[13px] text-black tracking-[-0.39px] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
