import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import Checkmark from '../components/Checkmark';
import { iconChat } from '../assets/figma-assets';

export default function ClaudeChat() {
  return (
    <Card className="w-[304px] h-[276px] flex-shrink-0">
      <CardHeader title="Claude chat" icon={iconChat} />

      <div className="px-5 py-5 flex flex-col gap-4">
        {/* Intro text */}
        <p className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
          <strong className="font-bold">Claude chat</strong> is the web app that lives in your
          browser. Ideal for{' '}
          <strong className="font-bold">brainstorming, planning and research.</strong>
        </p>

        {/* Checkmark rows */}
        <div className="flex items-start gap-3">
          <Checkmark className="size-[32px] mt-0.5" />
          <p className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
            <span className="underline">Claude projects</span> to isolate context : custom
            instructions and docs
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Checkmark className="size-[32px] mt-0.5" />
          <p className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
            <span className="underline">Artifacts</span> for data analysis and prototyping
          </p>
        </div>
      </div>
    </Card>
  );
}
