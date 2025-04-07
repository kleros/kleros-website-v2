import _HighlightedText from "@/components/HighlightedText";

import { HighlightedText as IHighlightedText } from "../../queries/kleros-enterprise-section";

const HighlightedText: React.FC<
  IHighlightedText & { fullTextStyle?: string; highlightedTextStyle?: string }
> = ({ fullText, highlightedText, fullTextStyle, highlightedTextStyle }) => {
  return (
    <_HighlightedText
      {...{ fullText, highlightedText, fullTextStyle, highlightedTextStyle }}
    />
  );
};

export default HighlightedText;
