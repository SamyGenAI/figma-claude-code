import InfographicRenderer from './InfographicRenderer';
import infographics        from './data';
import { getTheme }        from './themes';

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

  // Dev preview: all registered infographics
  return (
    <div style={wrapStyle}>
      {Object.values(infographics).map((data) => (
        <div key={data.id} className="mt-8 first:mt-0">
          <InfographicRenderer data={data} themeId={themeId} />
        </div>
      ))}
    </div>
  );
}
