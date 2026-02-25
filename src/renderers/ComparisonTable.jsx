import Card from '../components/Card';
import CardHeader from '../components/CardHeader';

export default function ComparisonTable({ data, className = '', style }) {
  const { header, columns = [], rows = [] } = data;

  return (
    <Card className={className} style={style}>
      <CardHeader {...header} />

      <div className="overflow-hidden h-full">
        {/* Table header */}
        <div className="flex bg-black/[0.04] border-b border-border">
          {columns.map((col, i) => (
            <div
              key={col.key}
              className={`${col.width ? 'flex-shrink-0' : 'flex-1'} px-4 py-2 ${i < columns.length - 1 ? 'border-r border-border' : ''} ${col.headerBg || ''}`}
              style={col.width ? { width: col.width } : undefined}
            >
              <span className="font-body font-semibold text-[12px] text-black tracking-[-0.36px]">
                {col.label}
              </span>
            </div>
          ))}
        </div>

        {/* Rows */}
        {rows.map((row, ri) => (
          <div key={row[columns[0].key]} className={`flex border-b border-border ${ri % 2 === 1 ? 'bg-black/[0.02]' : ''}`}>
            {columns.map((col, ci) => (
              <div
                key={col.key}
                className={`${col.width ? 'flex-shrink-0' : 'flex-1'} px-4 py-2 ${ci < columns.length - 1 ? 'border-r border-border' : ''} ${ci === 0 ? 'bg-black/[0.04]' : ''}`}
                style={col.width ? { width: col.width } : undefined}
              >
                <span className={`font-body ${ci === 0 ? 'font-semibold' : ''} text-[12px] text-black tracking-[-0.36px] leading-snug`}>
                  {row[col.key]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}
