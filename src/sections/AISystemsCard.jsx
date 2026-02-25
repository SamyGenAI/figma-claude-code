import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import Badge from '../components/Badge';

const ICON = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
    <circle cx="17" cy="17" r="4"/>
    <circle cx="5" cy="8" r="3"/>
    <circle cx="30" cy="8" r="3"/>
    <circle cx="5" cy="27" r="3"/>
    <circle cx="30" cy="27" r="3"/>
    <line x1="8" y1="9" x2="14" y2="14"/>
    <line x1="27" y1="9" x2="20" y2="14"/>
    <line x1="8" y1="26" x2="14" y2="20"/>
    <line x1="27" y1="26" x2="20" y2="20"/>
  </svg>`
)}`;

const traits = [
  'Multi-step goals',
  'Autonomous loops',
  'Persistent memory',
  'Tool orchestration',
  'Subagent delegation',
];

const examples = [
  'Claude Code', 'AutoGPT', 'LangChain agents',
  'n8n + AI', 'CrewAI', 'Claude Projects',
];

const bestFor = [
  'Complex, multi-step workflows',
  'Tasks that repeat or run autonomously',
  'Coordinating multiple tools & files',
  'Long-horizon work (minutes → hours)',
];

export default function AISystemsCard() {
  return (
    <Card className="flex-1 h-[470px]">
      <CardHeader title="AI Systems" icon={ICON} />

      <div className="px-5 py-4 flex flex-col gap-4 h-full">
        <p className="font-body text-[13px] text-black tracking-[-0.39px] leading-snug italic text-center">
          Networks of AI agents that <strong className="not-italic font-bold">autonomously orchestrate</strong>{' '}
          tools, memory, and workflows to achieve complex goals.
        </p>

        {/* Traits */}
        <div>
          <p className="font-body font-bold text-[13px] text-black tracking-[-0.39px] mb-2">
            Characteristics
          </p>
          <div className="flex flex-wrap gap-2">
            {traits.map((t) => (
              <Badge key={t} variant="blue">
                <span className="font-body text-[12px] text-black tracking-[-0.36px]">{t}</span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Examples */}
        <div>
          <p className="font-body font-bold text-[13px] text-black tracking-[-0.39px] mb-2">
            Examples
          </p>
          <div className="flex flex-wrap gap-2">
            {examples.map((ex) => (
              <span
                key={ex}
                className="bg-white/30 border border-border rounded-[5px] px-2 py-1 font-body text-[12px] text-black"
              >
                {ex}
              </span>
            ))}
          </div>
        </div>

        {/* Best for */}
        <div>
          <p className="font-body font-bold text-[13px] text-black tracking-[-0.39px] mb-2">
            Best for
          </p>
          <div className="flex flex-col gap-1">
            {bestFor.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="text-navy font-bold text-[13px] leading-snug flex-shrink-0">→</span>
                <span className="font-body text-[13px] text-black tracking-[-0.39px] leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
