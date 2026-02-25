import SectionRenderer                    from './SectionRenderer';
import { getTheme, themeToVars }          from './themes';
import { ThemeContext }                   from './themes/ThemeContext';

export default function InfographicRenderer({ data, themeId }) {
  const {
    canvas = { width: 1080, height: 1350 },
    contentPadding = 59,
    sectionGap = 25,
    footerMargin = 12,
    sections = [],
  } = data;

  const theme    = getTheme(themeId);
  const themeVars = themeToVars(theme);

  // Separate hero, content sections, and footer
  const hero = sections.find((s) => s.type === 'hero');
  const footer = sections.find((s) => s.type === 'footer');
  const contentSections = sections.filter(
    (s) => s.type !== 'hero' && s.type !== 'footer'
  );

  return (
    <ThemeContext.Provider value={theme}>
    <div
      className="grid-bg overflow-hidden mx-auto"
      style={{ width: canvas.width, height: canvas.height, ...themeVars }}
    >
      {/* Hero — full width */}
      {hero && <SectionRenderer section={hero} />}

      {/* Content sections — padded with vertical gap */}
      <div
        className="flex flex-col"
        style={{
          paddingLeft: contentPadding,
          paddingRight: contentPadding,
          gap: sectionGap,
        }}
      >
        {contentSections.map((section, i) => (
          <SectionRenderer key={i} section={section} />
        ))}
      </div>

      {/* Footer — with top margin and padding */}
      {footer && (
        <div
          style={{
            marginTop: footerMargin,
            paddingLeft: contentPadding,
            paddingRight: contentPadding,
          }}
        >
          <SectionRenderer section={footer} />
        </div>
      )}
    </div>
    </ThemeContext.Provider>
  );
}
