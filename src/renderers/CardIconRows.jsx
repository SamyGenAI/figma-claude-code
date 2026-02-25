import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import IconRow from '../components/IconRow';
import FeatureTable from '../components/FeatureTable';
import RichText from '../utils/RichText';

export default function CardIconRows({ data, className = '', style }) {
  const {
    header,
    contentPadding = 'px-5 py-4',
    contentGap = 'gap-4',
    intro,
    iconBgColor = 'bg-blue-light',
    iconColumnWidth,
    iconColumnShrink,
    iconColumnGap = 'gap-3',
    iconRows = [],
    table,
    image,
  } = data;

  // Build icon column classes
  const iconColParts = ['flex', 'flex-col', iconColumnGap];
  if (iconColumnWidth) {
    if (iconColumnShrink) iconColParts.push('flex-shrink-0');
  } else {
    iconColParts.push('flex-1');
  }
  const iconColClass = iconColParts.join(' ');
  const iconColStyle = iconColumnWidth ? { width: iconColumnWidth } : undefined;

  return (
    <Card className={className} style={style}>
      <CardHeader {...header} />

      <div className={`${contentPadding} flex ${contentGap}`}>
        {/* Icon rows column */}
        <div className={iconColClass} style={iconColStyle}>
          {intro && (
            <p className="font-body font-medium italic text-[13px] text-black text-center tracking-[-0.39px] leading-snug">
              {intro}
            </p>
          )}
          {iconRows.map((row, i) => (
            <IconRow key={i} icon={row.icon} bgColor={iconBgColor}>
              <RichText as={null}>{row.text}</RichText>
            </IconRow>
          ))}
        </div>

        {/* Optional table */}
        {table && (
          <FeatureTable
            columns={table.columns}
            rows={table.rows}
            bgColor={table.bgColor}
            className={table.className}
          />
        )}

        {/* Optional image */}
        {image && (
          <div className="flex-shrink-0">
            <img src={image.src} alt={image.alt || ''} className={image.className} />
          </div>
        )}
      </div>
    </Card>
  );
}
