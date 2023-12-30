import styles from "./ComposeMail.module.scss";
import { RichTextEditor } from "../rich-text-editor/RichTextEditor";
import { useCallback, useEffect, useState } from "react";
import { IAutoCompleteSuggestion } from "../../components/auto-complete-tag/interfaces/IAutoCompleteSuggestion";
import { AutoCompleteTag } from "../../components/auto-complete-tag/AutoCompleteTag";
import { constructSuggestionsFromReceipients } from "./utils/ComposeMailUtils";
import { generateMockReceipients } from "../../utils/fakeDataGenerator";
import { LabelWithInput } from "./components/lable-with-input/LabelWithInput";

export const ComposeMail = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const [selected, setSelected] = useState<IAutoCompleteSuggestion[]>([]);
  const [suggestions, setSuggestions] = useState<IAutoCompleteSuggestion[]>([]);
  const [subject, setSubject] = useState("");
  const [to, setTo] = useState("sathish@gmail.com");

  useEffect(() => {
    const receipients = generateMockReceipients(100);
    setSuggestions(constructSuggestionsFromReceipients(receipients));
  }, []);

  const onAdd = useCallback(
    (newTag: IAutoCompleteSuggestion) => {
      setSelected([...selected, newTag]);
    },
    [selected],
  );

  const onDelete = useCallback(
    (tagIndex: number) => {
      setSelected(selected.filter((_, index) => index !== tagIndex));
    },
    [selected],
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}> {"New Mail"} </div>
      <LabelWithInput label={"From"} value={to} onChangeValue={setTo} />
      <AutoCompleteTag
        suggestions={suggestions}
        selectedSuggestions={selected}
        placeholderText={"Select Receipients"}
        noSuggestionsText={"No Matching Receipients"}
        onAdd={onAdd}
        onDelete={onDelete}
      />
      <LabelWithInput  label={"Subject"} value={subject} onChangeValue={setSubject} />
      <RichTextEditor
        editorHtml={editorHtml}
        onChangeEditorHtml={setEditorHtml}
        placeholder={"Write something..."}
      />
    </div>
  );
};
