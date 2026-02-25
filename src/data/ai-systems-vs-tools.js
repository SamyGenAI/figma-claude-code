import { imgClaudeIcon, imgProfile } from '../assets/figma-assets';

// Inline SVG data-URI icons (not from Figma — specific to this infographic)
const ICON_TOOLS = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
    <rect x="10" y="10" width="15" height="15" rx="2"/>
    <line x1="14" y1="10" x2="14" y2="4"/>
    <line x1="21" y1="10" x2="21" y2="4"/>
    <line x1="14" y1="25" x2="14" y2="31"/>
    <line x1="21" y1="25" x2="21" y2="31"/>
    <line x1="10" y1="14" x2="4" y2="14"/>
    <line x1="10" y1="21" x2="4" y2="21"/>
    <line x1="25" y1="14" x2="31" y2="14"/>
    <line x1="25" y1="21" x2="31" y2="21"/>
  </svg>`
)}`;

const ICON_SYSTEMS = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
    <circle cx="17" cy="17" r="4"/>
    <circle cx="5" cy="8" r="3"/>
    <circle cx="30" cy="8" r="3"/>
    <circle cx="5" cy="27" r="3"/>
    <circle cx="30" cy="27" r="3"/>
    <line x1="8" y1="9" x2="14" y2="14"/>
    <line x1="27" y1="9" x2="20" y2="14"/>
    <line x1="8" y1="26" x2="14" y2="20"/>
    <line x1="27" y1="26" x2="20" y2="20"/>
  </svg>`
)}`;

const ICON_COMPARISON = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 17h23"/>
    <path d="M6 10l5-5 5 5"/>
    <path d="M24 27l5-5-5-5"/>
    <line x1="11" y1="5" x2="11" y2="17"/>
    <line x1="24" y1="18" x2="24" y2="30"/>
  </svg>`
)}`;

const ICON_WHEN_TOOLS = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 4a6 6 0 0 1 0 11l-2 2-10 10a2 2 0 0 1-3-3L16 14l2-2A6 6 0 0 1 21 4z"/>
    <line x1="18" y1="9" x2="22" y2="13"/>
  </svg>`
)}`;

const ICON_WHEN_SYSTEMS = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="4" width="12" height="10" rx="2"/>
    <rect x="19" y="4" width="12" height="10" rx="2"/>
    <rect x="11" y="21" width="13" height="10" rx="2"/>
    <line x1="10" y1="14" x2="10" y2="21"/>
    <line x1="25" y1="14" x2="25" y2="21"/>
    <line x1="10" y1="21" x2="17" y2="21"/>
    <line x1="25" y1="21" x2="24" y2="21"/>
  </svg>`
)}`;

export default {
  id: 'ai-systems-vs-tools',
  meta: {
    title: 'AI Systems vs AI Tools',
    subtitle: 'Understanding the key differences in 5 minutes',
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
        title: 'AI Systems vs AI Tools',
        titleSize: '66px',
        titleTracking: '-2px',
        subtitle: 'Understanding the key differences in 5 minutes',
        subtitleSize: '27px',
        subtitleTracking: '-0.81px',
        subtitleMargin: 'mt-2',
        icon: imgClaudeIcon,
      },
    },

    // ── Row 1: AI Tools + AI Systems ──
    {
      type: 'row',
      gap: 26,
      children: [
        {
          type: 'card-badge-list',
          flex: 1,
          height: '470px',
          data: {
            header: { title: 'AI Tools', icon: ICON_TOOLS },
            intro: 'Standalone AI-powered apps designed for **specific, single-purpose tasks**. You remain in control of every step.',
            introStyle: 'italic-centered-13',
            sections: [
              {
                label: 'Characteristics',
                type: 'badges',
                badgeVariant: 'amber',
                items: ['Single task focus', 'Human-initiated', 'Stateless', 'Fixed capabilities', 'Instant output'],
              },
              {
                label: 'Examples',
                type: 'tags',
                items: ['ChatGPT', 'Midjourney', 'GitHub Copilot', 'Grammarly', 'DALL-E', 'Perplexity'],
              },
              {
                label: 'Best for',
                type: 'arrows',
                arrowColor: 'text-amber-600',
                items: [
                  'A quick, well-defined answer',
                  'One-shot content generation',
                  'Human review at every step',
                  'Short tasks (seconds → minutes)',
                ],
              },
            ],
          },
        },
        {
          type: 'card-badge-list',
          flex: 1,
          height: '470px',
          data: {
            header: { title: 'AI Systems', icon: ICON_SYSTEMS },
            intro: 'Networks of AI agents that **autonomously orchestrate** tools, memory, and workflows to achieve complex goals.',
            introStyle: 'italic-centered-13',
            sections: [
              {
                label: 'Characteristics',
                type: 'badges',
                badgeVariant: 'blue',
                items: ['Multi-step goals', 'Autonomous loops', 'Persistent memory', 'Tool orchestration', 'Subagent delegation'],
              },
              {
                label: 'Examples',
                type: 'tags',
                items: ['Claude Code', 'AutoGPT', 'LangChain agents', 'n8n + AI', 'CrewAI', 'Claude Projects'],
              },
              {
                label: 'Best for',
                type: 'arrows',
                arrowColor: 'text-navy',
                items: [
                  'Complex, multi-step workflows',
                  'Tasks that repeat or run autonomously',
                  'Coordinating multiple tools & files',
                  'Long-horizon work (minutes → hours)',
                ],
              },
            ],
          },
        },
      ],
    },

    // ── Comparison Table ──
    {
      type: 'comparison-table',
      height: '280px',
      data: {
        header: { title: 'Head-to-Head Comparison', icon: ICON_COMPARISON },
        columns: [
          { key: 'feature', label: 'FEATURE', width: '160px', headerBg: '' },
          { key: 'tools', label: 'AI TOOLS', headerBg: 'bg-amber/30' },
          { key: 'systems', label: 'AI SYSTEMS', headerBg: 'bg-blue-light/40' },
        ],
        rows: [
          { feature: 'Who drives', tools: 'Human at every step', systems: 'Agent self-directs toward goal' },
          { feature: 'Scope', tools: 'One task → one output', systems: 'Multi-step plan → execute → iterate' },
          { feature: 'Memory', tools: 'None beyond the session', systems: 'Persistent across tasks & runs' },
          { feature: 'Capabilities', tools: 'Single built-in function', systems: 'Orchestrates many tools at once' },
          { feature: 'Time scale', tools: 'Seconds → minutes', systems: 'Minutes → hours' },
          { feature: 'Output', tools: 'Single artifact or answer', systems: 'Complex, multi-part deliverable' },
        ],
      },
    },

    // ── When to Use ──
    {
      type: 'row',
      gap: 26,
      children: [
        {
          type: 'card-when-list',
          flex: 1,
          height: '248px',
          data: {
            header: { title: 'Use AI Tools when…', icon: ICON_WHEN_TOOLS },
            badgeColor: 'bg-amber',
            items: [
              'You need a quick, specific answer',
              'The task is short and well-defined',
              'A human should review each output',
              'No history or context needs to persist',
            ],
          },
        },
        {
          type: 'card-when-list',
          flex: 1,
          height: '248px',
          data: {
            header: { title: 'Use AI Systems when…', icon: ICON_WHEN_SYSTEMS },
            badgeColor: 'bg-blue-light',
            items: [
              'The task has multiple dependent steps',
              'The workflow runs repeatedly or autonomously',
              'Multiple tools or files need coordination',
              'You want to fully delegate and come back to results',
            ],
          },
        },
      ],
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
