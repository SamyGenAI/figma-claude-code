import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import Badge from '../components/Badge';
import RichText from '../utils/RichText';

export default function CardBadgeGrid({ data, className = '', style }) {
  const {
    header,
    intro,
    badgeVariant = 'green',
    badges = [],
    footerText,
  } = data;

  return (
    <Card className={className} style={style}>
      <CardHeader {...header} />

      <div className="px-5 py-4 flex flex-col gap-3">
        {intro && (
          <RichText className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
            {intro}
          </RichText>
        )}

        {/* Dashed border box with badges */}
        <div className="border-2 border-black border-dashed rounded-[12px] p-3 flex flex-col gap-2">
          {badges.map((row, ri) => (
            <div key={ri} className="flex gap-2 flex-wrap">
              {row.map((label) => (
                <Badge key={label} variant={badgeVariant}>
                  <span className="font-body text-[14px] text-black tracking-[-0.42px]">{label}</span>
                </Badge>
              ))}
            </div>
          ))}
        </div>

        {footerText && (
          <p className="font-heading font-bold text-[19px] text-black text-center tracking-[-0.59px]">
            {footerText}
          </p>
        )}
      </div>
    </Card>
  );
}
