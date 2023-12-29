import styles from "./ComposeMail.module.scss";
import { RichTextEditor } from "../rich-text-editor/RichTextEditor";
import { useState } from "react";

export const ComposeMail = () => {
  const [editorHtml, setEditorHtml] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.title}> {"New Mail"} </div>
      <RichTextEditor
        editorHtml={editorHtml}
        onChangeEditorHtml={setEditorHtml}
        placeholder={"Write something..."}
      />
    </div>
  );
};
