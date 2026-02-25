import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import Badge from '../components/Badge';

const ICON = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
    <rect x="10" y="10" width="15" height="15" rx="2"/>
    <line x1="14" y1="10" x2="14" y2="4"/>
    <line x1="21" y1="10" x2="21" y2="4"/>
    <line x1="14" y1="25" x2="14" y2="31"/>
    <line x1="21" y1="25" x2="21" y2="31"/>
    <line x1="10" y1="14" x2="4" y2="14"/>
    <line x1="10" y1="21" x2="4" y2="21"/>
    <line x1="25" y1="14" x2="31" y2="14"/>
    <line x1="25" y1="21" x2="31" y2="21"/>
  </svg>`
)}`;

const traits = [
  'Single task focus',
  'Human-initiated',
  'Stateless',
  'Fixed capabilities',
  'Instant output',
];

const examples = [
  'ChatGPT', 'Midjourney', 'GitHub Copilot',
  'Grammarly', 'DALL-E', 'Perplexity',
];

const bestFor = [
  'A quick, well-defined answer',
  'One-shot content generation',
  'Human review at every step',
  'Short tasks (seconds → minutes)',
];

export default function AIToolsCard() {
  return (
    <Card className="flex-1 h-[470px]">
      <CardHeader title="AI Tools" icon={ICON} />

      <div className="px-5 py-4 flex flex-col gap-4 h-full">
        <p className="font-body text-[13px] text-black tracking-[-0.39px] leading-snug italic text-center">
          Standalone AI-powered apps designed for{' '}
          <strong className="not-italic font-bold">specific, single-purpose tasks</strong>.
          You remain in control of every step.
        </p>

        {/* Traits */}
        <div>
          <p className="font-body font-bold text-[13px] text-black tracking-[-0.39px] mb-2">
            Characteristics
          </p>
          <div className="flex flex-wrap gap-2">
            {traits.map((t) => (
              <Badge key={t} variant="amber">
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
                <span className="text-amber-600 font-bold text-[13px] leading-snug flex-shrink-0">→</span>
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
