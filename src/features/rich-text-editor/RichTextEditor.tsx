import { FC } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { RichTextEditorProps } from "./types/RichTextEditorProps";
import {
  getEditorFormats,
  getEditorModules,
} from "./utils/RichTextEditorConfigUtils";
import "./react-quill.css";

export const RichTextEditor: FC<RichTextEditorProps> = ({
  editorHtml,
  onChangeEditorHtml,
  placeholder,
}) => {
  const editorModules = getEditorModules();
  const editorFormats = getEditorFormats();

  return (
    <ReactQuill
      theme="snow"
      value={editorHtml}
      onChange={onChangeEditorHtml}
      placeholder={placeholder}
      modules={editorModules}
      formats={editorFormats}
      className={"editor"}
    />
  );
};
