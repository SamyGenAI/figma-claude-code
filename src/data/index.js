/**
 * Infographic Registry
 * ─────────────────────────────────────────────────────────────────────────────
 * When a new infographic is generated, add it here (2 lines):
 *   1. import myInfographic from './my-infographic';
 *   2. Add  'my-infographic': myInfographic  to the map below
 *
 * Access via: ?infographic=my-infographic in the URL
 */

import ultimateClaudeGuide from './ultimate-claude-guide';
import aiSystemsVsTools    from './ai-systems-vs-tools';

const infographics = {
  'ultimate-claude-guide': ultimateClaudeGuide,
  'ai-systems-vs-tools':   aiSystemsVsTools,
};

export default infographics;
