import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import Checkmark from '../components/Checkmark';
import { iconPlugins } from '../assets/figma-assets';

export default function ClaudePlugins() {
  return (
    <Card className="h-[162px]">
      <CardHeader title="Claude Plugins" icon={iconPlugins} />

      <div className="px-5 py-5 flex gap-6">
        {/* Left: description */}
        <div className="w-[265px] flex-shrink-0">
          <p className="font-body text-[14px] text-black tracking-[-0.42px] leading-snug">
            A plugin is a{' '}
            <strong className="font-bold">self-contained directory of components</strong> that
            extends Claude Code with custom functionality. Plugin components include :{' '}
            <strong className="font-bold">
              skills, agents, hooks, MCP servers, and LSP servers
            </strong>
          </p>
        </div>

        {/* Middle: file structure */}
        <div className="bg-blue-light rounded-[8px] shadow-card px-4 py-3 flex-shrink-0 w-[161px]">
          <pre className="font-mono text-[12px] text-black leading-relaxed whitespace-pre">
{`my-plugin/
├── .claude-plugin/
│   └── plugin.json
└── skills/
    └── code-review/
        └── SKILL.md`}
          </pre>
        </div>

        {/* Right: feature list with checkmarks */}
        <div className="flex-1 flex flex-col gap-3 justify-center">
          <p className="font-body font-bold text-[14px] text-black tracking-[-0.42px]">
            Use it to customize Claude code with :
          </p>

          <div className="flex items-center gap-2">
            <Checkmark className="size-[28px]" />
            <span className="font-body text-[14px] text-black tracking-[-0.42px]">
              Custom <strong className="font-bold">slash commands</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Checkmark className="size-[28px]" />
            <span className="font-body text-[14px] text-black tracking-[-0.42px]">
              Custom <strong className="font-bold">subagents</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Checkmark className="size-[28px]" />
            <span className="font-body text-[14px] text-black tracking-[-0.42px]">
              Pre-defined <strong className="font-bold">MCP servers</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Checkmark className="size-[28px]" />
            <span className="font-body text-[14px] text-black tracking-[-0.42px]">
              Use <strong className="font-bold">Hooks</strong> to predefine workflows
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
