import {
  imgClaudeIcon, imgCoworkFiles, imgCodeTerminal, imgProfile,
  iconChat, iconCowork, iconCode, iconSkills, iconMCP, iconProjects, iconPlugins,
  iconDesktopApp, iconFolder, iconOrgFiles, iconCloud,
  iconCursor, iconBrush, iconIT,
  logoNotion, logoClay, logoFigma, logoGoogleDrive,
  logoHubspot, logoAtlassian, logoGCalendar, logoGMail,
} from '../assets/figma-assets';

export default {
  id: 'ultimate-claude-guide',
  meta: {
    title: 'The Ultimate Claude Guide',
    subtitle: 'Master Claude features in 5 minutes',
  },
  canvas: { width: 1080, height: 1350 },
  contentPadding: 59,
  sectionGap: 25,
  footerMargin: 12,
  sections: [
    // ── Hero ──
    {
      type: 'hero',
      data: {
        title: 'The Ultimate Claude Guide',
        titleSize: '72px',
        titleTracking: '-2.19px',
        subtitle: 'Master Claude features in 5 minutes',
        subtitleSize: '29px',
        subtitleTracking: '-0.89px',
        subtitleMargin: 'mt-1',
        icon: imgClaudeIcon,
      },
    },

    // ── Row 1: Claude Chat + Claude Cowork ──
    {
      type: 'row',
      gap: 17,
      children: [
        {
          type: 'card-checklist',
          width: '304px',
          height: '276px',
          flexShrink: true,
          data: {
            header: { title: 'Claude chat', icon: iconChat },
            contentPadding: 'px-5 py-5',
            contentGap: 'gap-4',
            intro: '**Claude chat** is the web app that lives in your browser. Ideal for **brainstorming, planning and research.**',
            items: [
              '__Claude projects__ to isolate context : custom instructions and docs',
              '__Artifacts__ for data analysis and prototyping',
            ],
          },
        },
        {
          type: 'card-icon-rows',
          flex: 1,
          height: '276px',
          data: {
            header: { title: 'Claude Cowork', icon: iconCowork },
            contentPadding: 'px-5 py-4',
            contentGap: 'gap-4',
            intro: 'The non-technical version of Claude code. Cowork agent works on your files and folders instead of your codebase',
            iconBgColor: 'bg-blue-light',
            iconColumnGap: 'gap-3',
            iconRows: [
              { icon: iconDesktopApp, text: 'Access in Claude ** Desktop app**' },
              { icon: iconFolder, text: 'Works directly in your **Desktop folders**' },
              { icon: iconOrgFiles, text: 'Use it to **analyze and edit multiple files** (Excel, PowerPoint, Word, PDFs...)' },
              { icon: iconCloud, text: 'Ideal to work with **heavy files** without hitting size limit' },
            ],
            image: {
              src: imgCoworkFiles,
              alt: 'Cowork file browser',
              className: 'w-[275px] h-[169px] object-cover rounded-[8px] shadow-card border border-[#e6e6e6]',
            },
          },
        },
      ],
    },

    // ── Claude Code ──
    {
      type: 'card-icon-rows',
      height: '243px',
      data: {
        header: { title: 'Claude code', icon: iconCode },
        contentPadding: 'px-5 py-5',
        contentGap: 'gap-6',
        iconBgColor: 'bg-amber',
        iconColumnWidth: 280,
        iconColumnShrink: true,
        iconColumnGap: 'gap-4',
        iconRows: [
          { icon: iconCursor, text: 'Access in Claude ** Desktop app, Terminal** or your **favorite IDE **(Cursor, VS code...)' },
          { icon: iconBrush, text: 'Ideal for **coding**, **design** and **complex marketing & sales tasks**' },
          { icon: iconIT, text: 'Leverage **subagents and Agent teams** to spin up parallel tasks with more intelligence' },
        ],
        table: {
          bgColor: 'bg-[rgba(250,202,128,0.29)]',
          className: 'flex-1',
          columns: [
            { key: 'feature', label: 'FEATURES', width: '120px' },
            { key: 'desc', label: 'WHAT IT DOES' },
          ],
          rows: [
            { feature: 'CLAUDE.md', desc: 'Adds persistent context Claude sees every session' },
            { feature: 'Subagents', desc: 'Runs their own loops in isolated context' },
            { feature: 'Agent Teams', desc: 'Coordinates multiple independent sessions with shared tasks' },
            { feature: 'Hooks', desc: 'Runs outside the loop entirely as deterministic scripts' },
          ],
        },
        image: {
          src: imgCodeTerminal,
          alt: 'Claude Code terminal',
          className: 'w-[232px] h-[137px] object-cover rounded-[8px] shadow-card',
        },
      },
    },

    // ── Row 2: Skills + MCP + Projects ──
    {
      type: 'row',
      gap: 25,
      children: [
        {
          type: 'card-steps',
          flex: 1,
          height: '317px',
          data: {
            header: { title: 'Skills', icon: iconSkills },
            intro: 'Use **Skill files** to pull relevant context (instructions, templates...) on demand.',
            howLabel: 'How ?',
            steps: [
              'Use **Skill-creator** Claude skill',
              'Describe your goal, be very specific, **1 skill = 1 goal**',
              '**Upload resources** : good and bad templates, file examples...',
            ],
          },
        },
        {
          type: 'card-logo-grid',
          flex: 1,
          height: '317px',
          data: {
            header: { title: 'MCP', icon: iconMCP },
            paragraphs: [
              '**Connect Claude to external services** : databases, specific workflows, tools...',
              '**How : **Add a new connector. Works with Claude chat, Cowork and Code !',
            ],
            label: 'Examples :',
            logos: [
              [
                { src: logoNotion, alt: 'Notion' },
                { src: logoClay, alt: 'Clay' },
                { src: logoFigma, alt: 'Figma' },
                { src: logoGoogleDrive, alt: 'Google Drive' },
              ],
              [
                { src: logoHubspot, alt: 'HubSpot' },
                { src: logoAtlassian, alt: 'Atlassian' },
                { src: logoGCalendar, alt: 'Google Calendar' },
                { src: logoGMail, alt: 'Gmail' },
              ],
            ],
          },
        },
        {
          type: 'card-badge-grid',
          flex: 1,
          height: '317px',
          data: {
            header: { title: 'Projects', icon: iconProjects },
            intro: '**Isolate context using Projects**. Each project has its own chat memory and knowledge base.',
            badgeVariant: 'green',
            badges: [
              ['Memory', 'Files', 'Chats'],
              ['Skills', 'Custom instructions'],
            ],
            footerText: 'ISOLATED',
          },
        },
      ],
    },

    // ── Claude Plugins ──
    {
      type: 'card-code-block',
      height: '162px',
      data: {
        header: { title: 'Claude Plugins', icon: iconPlugins },
        description: 'A plugin is a **self-contained directory of components** that extends Claude Code with custom functionality. Plugin components include : **skills, agents, hooks, MCP servers, and LSP servers**',
        descriptionWidth: 265,
        code: {
          content: 'my-plugin/\n├── .claude-plugin/\n│   └── plugin.json\n└── skills/\n    └── code-review/\n        └── SKILL.md',
          bgColor: 'bg-blue-light',
          width: 161,
        },
        featuresLabel: 'Use it to customize Claude code with :',
        features: [
          'Custom **slash commands**',
          'Custom **subagents**',
          'Pre-defined **MCP servers**',
          'Use **Hooks** to predefine workflows',
        ],
      },
    },

    // ── Footer ──
    {
      type: 'footer',
      data: {
        cta: 'Follow for more',
        name: 'Samy Chouaf',
        avatar: imgProfile,
      },
    },
  ],
};
