import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import FeatureTable from '../components/FeatureTable';
import { iconCode, iconCursor, iconBrush, iconIT, imgCodeTerminal } from '../assets/figma-assets';

function IconRow({ icon, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="bg-amber rounded-[5px] shadow-card size-[32px] flex-shrink-0 flex items-center justify-center">
        <img src={icon} alt="" className="size-[24px] object-contain" />
      </div>
      <p className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">{children}</p>
    </div>
  );
}

export default function ClaudeCode() {
  return (
    <Card className="h-[243px]">
      <CardHeader title="Claude code" icon={iconCode} />

      <div className="px-5 py-5 flex gap-6">
        {/* Left: feature list */}
        <div className="flex flex-col gap-4 w-[280px] flex-shrink-0">
          <IconRow icon={iconCursor}>
            Access in Claude{' '}
            <strong className="font-bold"> Desktop app, Terminal</strong> or your{' '}
            <strong className="font-bold">favorite IDE </strong>
            (Cursor, VS code...)
          </IconRow>

          <IconRow icon={iconBrush}>
            Ideal for{' '}
            <strong className="font-bold">coding</strong>,{' '}
            <strong className="font-bold">design</strong> and{' '}
            <strong className="font-bold">complex marketing &amp; sales tasks</strong>
          </IconRow>

          <IconRow icon={iconIT}>
            Leverage{' '}
            <strong className="font-bold">subagents and Agent teams</strong> to spin up parallel
            tasks with more intelligence
          </IconRow>
        </div>

        {/* Middle: feature table */}
        <FeatureTable className="flex-1" />

        {/* Right: terminal image */}
        <div className="flex-shrink-0">
          <img
            src={imgCodeTerminal}
            alt="Claude Code terminal"
            className="w-[232px] h-[137px] object-cover rounded-[8px] shadow-card"
          />
        </div>
      </div>
    </Card>
  );
}
