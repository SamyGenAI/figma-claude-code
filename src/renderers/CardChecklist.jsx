import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import Checkmark from '../components/Checkmark';
import RichText from '../utils/RichText';

export default function CardChecklist({ data, className = '', style }) {
  const {
    header,
    contentPadding = 'px-5 py-5',
    contentGap = 'gap-4',
    intro,
    items = [],
    checkmarkColor,
  } = data;

  return (
    <Card className={className} style={style}>
      <CardHeader {...header} />

      <div className={`${contentPadding} flex flex-col ${contentGap}`}>
        {intro && (
          <RichText className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
            {intro}
          </RichText>
        )}

        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <Checkmark color={checkmarkColor} className="size-[32px] mt-0.5" />
            <RichText className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
              {item}
            </RichText>
          </div>
        ))}
      </div>
    </Card>
  );
}
