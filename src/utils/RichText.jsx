/**
 * Parses simple markdown-like text into React elements.
 * Supports: **bold**, __underline__
 *
 * Usage:
 *   <RichText>**bold** and __underline__</RichText>          → <p>...</p>
 *   <RichText as="span">text</RichText>                      → <span>...</span>
 *   <RichText as={null}>text</RichText>                       → <>...</> (fragment)
 *   <RichText boldClass="not-italic font-bold">text</RichText> → custom bold class
 */
export default function RichText({ children, as: Tag = 'p', className = '', boldClass = 'font-bold' }) {
  if (!children || typeof children !== 'string') {
    return Tag ? <Tag className={className}>{children}</Tag> : <>{children}</>;
  }

  const parts = [];
  const regex = /(\*\*(.+?)\*\*)|(__(.+?)__)/g;
  let lastIndex = 0;
  let key = 0;
  let match;

  while ((match = regex.exec(children)) !== null) {
    if (match.index > lastIndex) {
      parts.push(children.slice(lastIndex, match.index));
    }
    if (match[1]) {
      parts.push(<strong key={key++} className={boldClass}>{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(<span key={key++} className="underline">{match[4]}</span>);
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < children.length) {
    parts.push(children.slice(lastIndex));
  }

  return Tag ? <Tag className={className}>{parts}</Tag> : <>{parts}</>;
}
