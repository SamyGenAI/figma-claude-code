import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import {
  iconCowork, iconDesktopApp, iconFolder, iconOrgFiles, iconCloud, imgCoworkFiles,
} from '../assets/figma-assets';

function IconRow({ icon, children, iconBg = 'bg-blue-light' }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`${iconBg} rounded-[5px] shadow-card size-[32px] flex-shrink-0 flex items-center justify-center`}>
        <img src={icon} alt="" className="size-[24px] object-contain" />
      </div>
      <p className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">{children}</p>
    </div>
  );
}

export default function ClaudeCowork() {
  return (
    <Card className="flex-1 h-[276px]">
      <CardHeader title="Claude Cowork" icon={iconCowork} />

      <div className="px-5 py-4 flex gap-4">
        {/* Left content */}
        <div className="flex flex-col gap-3 flex-1">
          <p className="font-body font-medium italic text-[13px] text-black text-center tracking-[-0.39px] leading-snug">
            The non-technical version of Claude code. Cowork agent works on your files and folders
            instead of your codebase
          </p>

          <IconRow icon={iconDesktopApp}>
            Access in Claude <strong className="font-bold"> Desktop app</strong>
          </IconRow>

          <IconRow icon={iconFolder}>
            Works directly in your <strong className="font-bold">Desktop folders</strong>
          </IconRow>

          <IconRow icon={iconOrgFiles}>
            Use it to{' '}
            <strong className="font-bold">analyze and edit multiple files</strong>{' '}
            (Excel, PowerPoint, Word, PDFs...)
          </IconRow>

          <IconRow icon={iconCloud}>
            Ideal to work with <strong className="font-bold">heavy files</strong> without hitting
            size limit
          </IconRow>
        </div>

        {/* Right image */}
        <div className="flex-shrink-0">
          <img
            src={imgCoworkFiles}
            alt="Cowork file browser"
            className="w-[275px] h-[169px] object-cover rounded-[8px] shadow-card border border-[#e6e6e6]"
          />
        </div>
      </div>
    </Card>
  );
}
