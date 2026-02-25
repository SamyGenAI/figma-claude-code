import InfographicRenderer from './InfographicRenderer';
import ultimateClaudeGuide from './data/ultimate-claude-guide';
import aiSystemsVsTools    from './data/ai-systems-vs-tools';
import { getTheme }        from './themes';

const infographics = {
  'ultimate-claude-guide': ultimateClaudeGuide,
  'ai-systems-vs-tools':   aiSystemsVsTools,
};

function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    infographicId: params.get('infographic'),
    themeId:       params.get('theme'),
  };
}

export default function App() {
  const { infographicId, themeId } = getParams();
  const theme = getTheme(themeId);

  const wrapStyle = { backgroundColor: theme.colors.pageBg };

  if (infographicId && infographics[infographicId]) {
    return (
      <div style={wrapStyle}>
        <InfographicRenderer data={infographics[infographicId]} themeId={themeId} />
      </div>
    );
  }

  // Dev preview: all infographics
  return (
    <div style={wrapStyle}>
      <InfographicRenderer data={ultimateClaudeGuide} themeId={themeId} />
      <div className="mt-8">
        <InfographicRenderer data={aiSystemsVsTools} themeId={themeId} />
      </div>
    </div>
  );
}
