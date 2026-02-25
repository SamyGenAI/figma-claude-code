import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import Badge from '../components/Badge';
import { iconProjects } from '../assets/figma-assets';

export default function Projects() {
  return (
    <Card className="flex-1 h-[317px]">
      <CardHeader title="Projects" icon={iconProjects} />

      <div className="px-5 py-4 flex flex-col gap-3">
        <p className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
          <strong className="font-bold">Isolate context using Projects</strong>. Each project has
          its own chat memory and knowledge base.
        </p>

        {/* Dashed border box with badges */}
        <div className="border-2 border-black border-dashed rounded-[12px] p-3 flex flex-col gap-2">
          <div className="flex gap-2 flex-wrap">
            <Badge variant="green">
              <span className="font-body text-[14px] text-black tracking-[-0.42px]">Memory</span>
            </Badge>
            <Badge variant="green">
              <span className="font-body text-[14px] text-black tracking-[-0.42px]">Files</span>
            </Badge>
            <Badge variant="green">
              <span className="font-body text-[14px] text-black tracking-[-0.42px]">Chats</span>
            </Badge>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="green">
              <span className="font-body text-[14px] text-black tracking-[-0.42px]">Skills</span>
            </Badge>
            <Badge variant="green">
              <span className="font-body text-[14px] text-black tracking-[-0.42px]">Custom instructions</span>
            </Badge>
          </div>
        </div>

        <p className="font-heading font-bold text-[19px] text-black text-center tracking-[-0.59px]">
          ISOLATED
        </p>
      </div>
    </Card>
  );
}
