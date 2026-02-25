import Card from '../components/Card';
import CardHeader from '../components/CardHeader';

const ICON_TOOLS = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 4a6 6 0 0 1 0 11l-2 2-10 10a2 2 0 0 1-3-3L16 14l2-2A6 6 0 0 1 21 4z"/>
    <line x1="18" y1="9" x2="22" y2="13"/>
  </svg>`
)}`;

const ICON_SYSTEMS = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="4" width="12" height="10" rx="2"/>
    <rect x="19" y="4" width="12" height="10" rx="2"/>
    <rect x="11" y="21" width="13" height="10" rx="2"/>
    <line x1="10" y1="14" x2="10" y2="21"/>
    <line x1="25" y1="14" x2="25" y2="21"/>
    <line x1="10" y1="21" x2="17" y2="21"/>
    <line x1="25" y1="21" x2="24" y2="21"/>
  </svg>`
)}`;

const toolsWhen = [
  'You need a quick, specific answer',
  'The task is short and well-defined',
  'A human should review each output',
  'No history or context needs to persist',
];

const systemsWhen = [
  'The task has multiple dependent steps',
  'The workflow runs repeatedly or autonomously',
  'Multiple tools or files need coordination',
  'You want to fully delegate and come back to results',
];

function WhenCard({ title, icon, items, badgeColor }) {
  return (
    <Card className="flex-1 h-[248px]">
      <CardHeader title={title} icon={icon} />
      <div className="px-5 py-4 flex flex-col gap-3">
        {items.map((item, i) => (
          <div key={item} className="flex items-start gap-3">
            <div className={`${badgeColor} rounded-full shadow-card size-[32px] flex-shrink-0 mt-0.5 flex items-center justify-center`}>
              <span className="font-heading font-bold text-[16px] text-black tracking-[-0.48px] leading-none">
                {i + 1}
              </span>
            </div>
            <p className="font-body text-[13px] text-black tracking-[-0.39px] leading-snug">
              {item}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default function WhenToUse() {
  return (
    <div className="flex gap-[26px]">
      <WhenCard
        title="Use AI Tools when…"
        icon={ICON_TOOLS}
        items={toolsWhen}
        badgeColor="bg-amber"
      />
      <WhenCard
        title="Use AI Systems when…"
        icon={ICON_SYSTEMS}
        items={systemsWhen}
        badgeColor="bg-blue-light"
      />
    </div>
  );
}
