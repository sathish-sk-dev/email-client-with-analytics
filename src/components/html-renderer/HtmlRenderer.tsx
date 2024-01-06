import { FC } from "react";
import DOMPurify from "dompurify";
import { HtmlRendererProps } from "./HtmlRendererProps";
import styles from "./HtmlRedererer.module.scss";

const HtmlRenderer: FC<HtmlRendererProps> = ({ htmlContent }) => {
  const sanitizedContent = DOMPurify.sanitize(htmlContent);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      className={styles.container}
    />
  );
};

export default HtmlRenderer;
