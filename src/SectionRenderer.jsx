import { useTheme } from './themes';
import HeroSection from './renderers/HeroSection';
import CardChecklist from './renderers/CardChecklist';
import CardIconRows from './renderers/CardIconRows';
import CardSteps from './renderers/CardSteps';
import CardLogoGrid from './renderers/CardLogoGrid';
import CardBadgeGrid from './renderers/CardBadgeGrid';
import CardCodeBlock from './renderers/CardCodeBlock';
import CardBadgeList from './renderers/CardBadgeList';
import ComparisonTable from './renderers/ComparisonTable';
import CardWhenList from './renderers/CardWhenList';
import FooterSection from './renderers/FooterSection';

const renderers = {
  'hero': HeroSection,
  'card-checklist': CardChecklist,
  'card-icon-rows': CardIconRows,
  'card-steps': CardSteps,
  'card-logo-grid': CardLogoGrid,
  'card-badge-grid': CardBadgeGrid,
  'card-code-block': CardCodeBlock,
  'card-badge-list': CardBadgeList,
  'comparison-table': ComparisonTable,
  'card-when-list': CardWhenList,
  'footer': FooterSection,
};

function buildLayoutProps(section) {
  const style = {};
  const classes = [];

  if (section.width) style.width = section.width;
  if (section.height) style.height = section.height;
  if (section.flex) classes.push('flex-1');
  if (section.flexShrink) classes.push('flex-shrink-0');

  return {
    style: Object.keys(style).length > 0 ? style : undefined,
    className: classes.join(' '),
  };
}

export default function SectionRenderer({ section }) {
  const theme = useTheme();

  // Handle row type: wrap children in a flex container
  if (section.type === 'row') {
    return (
      <div className="flex" style={{ gap: section.gap }}>
        {section.children.map((child, i) => (
          <SectionRenderer key={i} section={child} />
        ))}
      </div>
    );
  }

  // Theme-level renderer overrides take priority over the global registry
  const Renderer = theme.renderers?.[section.type] ?? renderers[section.type];
  if (!Renderer) {
    console.warn(`Unknown section type: ${section.type}`);
    return null;
  }

  const { style, className } = buildLayoutProps(section);

  // Hero and Footer don't use layout props the same way
  if (section.type === 'hero' || section.type === 'footer') {
    return <Renderer data={section.data} />;
  }

  return <Renderer data={section.data} className={className} style={style} />;
}
