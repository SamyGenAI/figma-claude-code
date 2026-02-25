const defaultColumns = [
  { key: 'feature', label: 'FEATURES', width: '120px' },
  { key: 'desc', label: 'WHAT IT DOES' },
];

const defaultRows = [
  { feature: 'CLAUDE.md',    desc: 'Adds persistent context Claude sees every session' },
  { feature: 'Subagents',    desc: 'Runs their own loops in isolated context' },
  { feature: 'Agent Teams',  desc: 'Coordinates multiple independent sessions with shared tasks' },
  { feature: 'Hooks',        desc: 'Runs outside the loop entirely as deterministic scripts' },
];

import { resolveColor } from '../themes';

export default function FeatureTable({
  columns = defaultColumns,
  rows = defaultRows,
  bgColor = 'table-highlight',
  className = '',
}) {
  return (
    <div
      className={`border rounded-[4px] overflow-hidden ${className}`}
      style={{ backgroundColor: resolveColor(bgColor), borderColor: 'var(--theme-border)' }}
    >
      {/* Header row */}
      <div className="flex">
        {columns.map((col, i) => (
          <div
            key={col.key}
            className={`${col.width ? 'flex-shrink-0' : 'flex-1'} ${i < columns.length - 1 ? 'border-r' : ''} border-b border-border bg-black/[0.06] px-3 py-2`}
            style={col.width ? { width: col.width } : undefined}
          >
            <span className="font-semibold text-[12px] text-black leading-[1.3]">{col.label}</span>
          </div>
        ))}
      </div>
      {/* Data rows */}
      {rows.map((row) => (
        <div key={row[columns[0].key]} className="flex">
          {columns.map((col, i) => (
            <div
              key={col.key}
              className={`${col.width ? 'flex-shrink-0' : 'flex-1'} ${i < columns.length - 1 ? 'border-r' : ''} border-t border-border ${i === 0 ? 'bg-black/[0.06]' : ''} px-3 py-2`}
              style={col.width ? { width: col.width } : undefined}
            >
              <span className={`${i === 0 ? 'font-semibold' : ''} text-[12px] text-black leading-[1.3]`}>
                {row[col.key]}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
