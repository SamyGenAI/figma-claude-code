import Card from '../components/Card';
import CardHeader from '../components/CardHeader';

const ICON = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 17h23"/>
    <path d="M6 10l5-5 5 5"/>
    <path d="M24 27l5-5-5-5"/>
    <line x1="11" y1="5" x2="11" y2="17"/>
    <line x1="24" y1="18" x2="24" y2="30"/>
  </svg>`
)}`;

const rows = [
  { feature: 'Who drives',   tools: 'Human at every step',          systems: 'Agent self-directs toward goal' },
  { feature: 'Scope',        tools: 'One task → one output',        systems: 'Multi-step plan → execute → iterate' },
  { feature: 'Memory',       tools: 'None beyond the session',      systems: 'Persistent across tasks & runs' },
  { feature: 'Capabilities', tools: 'Single built-in function',     systems: 'Orchestrates many tools at once' },
  { feature: 'Time scale',   tools: 'Seconds → minutes',           systems: 'Minutes → hours' },
  { feature: 'Output',       tools: 'Single artifact or answer',    systems: 'Complex, multi-part deliverable' },
];

export default function AIComparison() {
  return (
    <Card className="h-[280px]">
      <CardHeader title="Head-to-Head Comparison" icon={ICON} />

      <div className="overflow-hidden h-full">
        {/* Table header */}
        <div className="flex bg-black/[0.04] border-b border-border">
          <div className="w-[160px] flex-shrink-0 px-4 py-2 border-r border-border">
            <span className="font-body font-semibold text-[12px] text-black tracking-[-0.36px]">
              FEATURE
            </span>
          </div>
          <div className="flex-1 px-4 py-2 border-r border-border bg-amber/30">
            <span className="font-body font-semibold text-[12px] text-black tracking-[-0.36px]">
              AI TOOLS
            </span>
          </div>
          <div className="flex-1 px-4 py-2 bg-blue-light/40">
            <span className="font-body font-semibold text-[12px] text-black tracking-[-0.36px]">
              AI SYSTEMS
            </span>
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div key={row.feature} className={`flex border-b border-border ${i % 2 === 0 ? '' : 'bg-black/[0.02]'}`}>
            <div className="w-[160px] flex-shrink-0 px-4 py-2 border-r border-border bg-black/[0.04]">
              <span className="font-body font-semibold text-[12px] text-black tracking-[-0.36px] leading-snug">
                {row.feature}
              </span>
            </div>
            <div className="flex-1 px-4 py-2 border-r border-border">
              <span className="font-body text-[12px] text-black tracking-[-0.36px] leading-snug">
                {row.tools}
              </span>
            </div>
            <div className="flex-1 px-4 py-2">
              <span className="font-body text-[12px] text-black tracking-[-0.36px] leading-snug">
                {row.systems}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
