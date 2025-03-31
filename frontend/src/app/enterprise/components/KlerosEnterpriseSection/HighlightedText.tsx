import clsx from "clsx";

import { HighlightedText as IHighlightedText } from "../../queries/kleros-enterprise-section";

const HighlightedText: React.FC<
  IHighlightedText & { fullTextStyle?: string; highlightedTextStyle?: string }
> = ({ fullText, highlightedText, fullTextStyle, highlightedTextStyle }) => {
  const FullText = (
    <span
      className={clsx(
        "text-base font-normal text-secondary-text lg:text-lg lg:font-medium",
        fullTextStyle,
      )}
    >
      {fullText}
    </span>
  );
  if (!highlightedText) return FullText;

  const index = fullText.indexOf(highlightedText);

  if (index === -1) return FullText;

  const beforeMatch = fullText.slice(0, index);
  const match = fullText.slice(index, index + highlightedText.length);
  const afterMatch = fullText.slice(index + highlightedText.length);

  return (
    <span
      className={clsx(
        "text-base font-normal text-secondary-text lg:text-lg lg:font-medium",
        fullTextStyle,
      )}
    >
      {beforeMatch}
      <span
        className={clsx(
          "text-base font-normal text-primary-purple lg:text-lg lg:font-medium",
          highlightedTextStyle,
        )}
      >
        {match}
      </span>
      {afterMatch}
    </span>
  );
};

export default HighlightedText;
