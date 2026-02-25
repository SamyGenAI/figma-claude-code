import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import StepCircle from '../components/StepCircle';
import RichText from '../utils/RichText';

export default function CardSteps({ data, className = '', style }) {
  const {
    header,
    intro,
    howLabel,
    steps = [],
    stepBgColor,
  } = data;

  return (
    <Card className={className} style={style}>
      <CardHeader {...header} />

      <div className="px-5 py-5 flex flex-col gap-3">
        {intro && (
          <RichText className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
            {intro}
          </RichText>
        )}

        {howLabel && (
          <p className="font-body font-bold text-[14px] text-black tracking-[-0.42px]">
            {howLabel}
          </p>
        )}

        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <StepCircle number={i + 1} bgColor={stepBgColor} />
            <RichText className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
              {step}
            </RichText>
          </div>
        ))}
      </div>
    </Card>
  );
}
