import Card from '../components/Card';
import CardHeader from '../components/CardHeader';

export default function CardWhenList({ data, className = '', style }) {
  const { header, badgeColor = 'bg-amber', items = [] } = data;

  return (
    <Card className={className} style={style}>
      <CardHeader {...header} />

      <div className="px-5 py-4 flex flex-col gap-3">
        {items.map((item, i) => (
          <div key={item} className="flex items-start gap-3">
            <div className={`${badgeColor} rounded-full shadow-card size-[32px] flex-shrink-0 mt-0.5 flex items-center justify-center`}>
              <span className="font-heading font-bold text-[16px] text-black tracking-[-0.48px] leading-none">
                {i + 1}
              </span>
            </div>
            <p className="font-body text-[13px] text-black tracking-[-0.39px] leading-snug">
              {item}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
