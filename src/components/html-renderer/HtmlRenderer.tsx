import { FC } from "react";
import DOMPurify from "dompurify";
import { HtmlRendererProps } from "./HtmlRendererProps";

const HtmlRenderer: FC<HtmlRendererProps> = ({ htmlContent }) => {
  const sanitizedContent = DOMPurify.sanitize(htmlContent);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      style={{ padding: 24 }}
    />
  );
};

export default HtmlRenderer;
