/**
 * Infographic Data Schema
 *
 * An infographic is a JS object with this shape:
 *
 * {
 *   id: string,                    // URL-safe identifier
 *   meta: {
 *     title: string,               // Infographic title
 *     subtitle: string,            // Subtitle text
 *   },
 *   canvas: {
 *     width: number,               // Canvas width in px (e.g. 1080)
 *     height: number,              // Canvas height in px (e.g. 1350)
 *   },
 *   contentPadding: number,        // Horizontal padding for content area (px)
 *   sectionGap: number,            // Vertical gap between sections (px)
 *   footerMargin: number,          // Top margin before footer (px)
 *   sections: Section[],           // Ordered list of sections
 * }
 *
 * Section Types:
 *
 * { type: 'hero', data: HeroData }
 *   HeroData: { title, titleSize, titleTracking, subtitle, subtitleSize,
 *               subtitleTracking, subtitleMargin, icon }
 *
 * { type: 'card-checklist', data: CardChecklistData }
 *   CardChecklistData: { header, contentPadding, contentGap, intro, items[] }
 *
 * { type: 'card-icon-rows', data: CardIconRowsData }
 *   CardIconRowsData: { header, contentPadding, contentGap, intro,
 *                        iconBgColor, iconColumnWidth, iconColumnShrink,
 *                        iconColumnGap, iconRows[], table?, image? }
 *
 * { type: 'card-steps', data: CardStepsData }
 *   CardStepsData: { header, intro, howLabel, steps[] }
 *
 * { type: 'card-logo-grid', data: CardLogoGridData }
 *   CardLogoGridData: { header, paragraphs[], label, logos[][] }
 *
 * { type: 'card-badge-grid', data: CardBadgeGridData }
 *   CardBadgeGridData: { header, intro, badgeVariant, badges[][], footerText }
 *
 * { type: 'card-code-block', data: CardCodeBlockData }
 *   CardCodeBlockData: { header, description, descriptionWidth, code,
 *                         featuresLabel, features[] }
 *
 * { type: 'card-badge-list', data: CardBadgeListData }
 *   CardBadgeListData: { header, intro, introStyle, sections[] }
 *
 * { type: 'comparison-table', data: ComparisonTableData }
 *   ComparisonTableData: { header, columns[], rows[] }
 *
 * { type: 'card-when-list', data: CardWhenListData }
 *   CardWhenListData: { header, badgeColor, items[] }
 *
 * { type: 'footer', data: FooterData }
 *   FooterData: { cta, name, avatar }
 *
 * { type: 'row', gap: number, children: Section[] }
 *   Wraps children in a horizontal flex container.
 *
 * Layout props (on any section):
 *   width: string       — e.g. '304px'
 *   height: string      — e.g. '276px'
 *   flex: number|true   — flex-grow (typically 1)
 *   flexShrink: boolean — flex-shrink-0
 *
 * Text formatting (in string values):
 *   **text** → bold
 *   __text__ → underline
 */

export const SECTION_TYPES = [
  'hero',
  'card-checklist',
  'card-icon-rows',
  'card-steps',
  'card-logo-grid',
  'card-badge-grid',
  'card-code-block',
  'card-badge-list',
  'comparison-table',
  'card-when-list',
  'footer',
  'row',
];
