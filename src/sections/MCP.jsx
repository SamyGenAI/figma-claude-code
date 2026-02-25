import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import LogoTile from '../components/LogoTile';
import {
  iconMCP,
  logoNotion, logoClay, logoFigma, logoGoogleDrive,
  logoHubspot, logoAtlassian, logoGCalendar, logoGMail,
} from '../assets/figma-assets';

const logosRow1 = [
  { src: logoNotion,      alt: 'Notion' },
  { src: logoClay,        alt: 'Clay' },
  { src: logoFigma,       alt: 'Figma' },
  { src: logoGoogleDrive, alt: 'Google Drive' },
];

const logosRow2 = [
  { src: logoHubspot,   alt: 'HubSpot' },
  { src: logoAtlassian, alt: 'Atlassian' },
  { src: logoGCalendar, alt: 'Google Calendar' },
  { src: logoGMail,     alt: 'Gmail' },
];

export default function MCP() {
  return (
    <Card className="flex-1 h-[317px]">
      <CardHeader title="MCP" icon={iconMCP} />

      <div className="px-5 py-4 flex flex-col gap-3">
        <p className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
          <strong className="font-bold">Connect Claude to external services</strong> : databases,
          specific workflows, tools...
        </p>

        <p className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
          <strong className="font-bold">How : </strong>
          Add a new connector. Works with Claude chat, Cowork and Code !
        </p>

        <p className="font-body font-bold text-[14px] text-black tracking-[-0.42px]">
          Examples :
        </p>

        {/* Logo grid */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {logosRow1.map((logo) => (
              <LogoTile key={logo.alt} src={logo.src} alt={logo.alt} />
            ))}
          </div>
          <div className="flex gap-2">
            {logosRow2.map((logo) => (
              <LogoTile key={logo.alt} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
