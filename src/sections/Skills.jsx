import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import StepCircle from '../components/StepCircle';
import { iconSkills } from '../assets/figma-assets';

function Step({ number, children }) {
  return (
    <div className="flex items-start gap-3">
      <StepCircle number={number} />
      <p className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">{children}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <Card className="flex-1 h-[317px]">
      <CardHeader title="Skills" icon={iconSkills} />

      <div className="px-5 py-5 flex flex-col gap-3">
        <p className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
          Use <strong className="font-bold">Skill files</strong> to pull relevant context
          (instructions, templates...) on demand.
        </p>

        <p className="font-body font-bold text-[14px] text-black tracking-[-0.42px]">How ?</p>

        <Step number={1}>
          Use <strong className="font-bold">Skill-creator</strong> Claude skill
        </Step>

        <Step number={2}>
          Describe your goal, be very specific,{' '}
          <strong className="font-bold">1 skill = 1 goal</strong>
        </Step>

        <Step number={3}>
          <strong className="font-bold">Upload resources</strong> : good and bad templates, file
          examples...
        </Step>
      </div>
    </Card>
  );
}
