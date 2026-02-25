import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import Checkmark from '../components/Checkmark';
import RichText from '../utils/RichText';

export default function CardCodeBlock({ data, className = '', style }) {
  const {
    header,
    description,
    descriptionWidth = 265,
    code,
    featuresLabel,
    features = [],
  } = data;

  return (
    <Card className={className} style={style}>
      <CardHeader {...header} />

      <div className="px-5 py-5 flex gap-6">
        {/* Left: description */}
        <div className="flex-shrink-0" style={{ width: descriptionWidth }}>
          <RichText className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
            {description}
          </RichText>
        </div>

        {/* Middle: code block */}
        {code && (
          <div
            className={`${code.bgColor || 'bg-blue-light'} rounded-[8px] shadow-card px-4 py-3 flex-shrink-0`}
            style={{ width: code.width }}
          >
            <pre className="font-mono text-[12px] text-black leading-relaxed whitespace-pre">
              {code.content}
            </pre>
          </div>
        )}

        {/* Right: feature list with checkmarks */}
        <div className="flex-1 flex flex-col gap-3 justify-center">
          {featuresLabel && (
            <p className="font-body font-bold text-[14px] text-black tracking-[-0.42px]">
              {featuresLabel}
            </p>
          )}

          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <Checkmark className="size-[28px]" />
              <RichText as="span" className="font-body text-[14px] text-black tracking-[-0.42px]">
                {feature}
              </RichText>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
