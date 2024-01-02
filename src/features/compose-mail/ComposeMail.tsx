import styles from "./ComposeMail.module.scss";
import { RichTextEditor } from "../../components/rich-text-editor/RichTextEditor";
import { AutoCompleteTag } from "../../components/auto-complete-tag/AutoCompleteTag";
import { LabelWithInput } from "./components/lable-with-input/LabelWithInput";
import { Icon } from "../../components/icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";
import { useComposeMail } from "./useComposeMail";

export const ComposeMail = () => {
  const {
    editorHtml,
    fromEmailId,
    subject,
    suggestions,
    selectedSuggestions,
    onAdd,
    onChangeSubject,
    onDelete,
    onClose,
    onChangeEditorHtml,
  } = useComposeMail();

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.title}> {"New Mail"} </div>
        <Icon
          iconType={IconType.CLOSE}
          containerClass={styles.icon}
          onClick={onClose}
        />
      </div>
      <LabelWithInput
        label={"From"}
        value={fromEmailId}
        onChangeValue={() => {}}
      />
      <AutoCompleteTag
        suggestions={suggestions}
        selectedSuggestions={selectedSuggestions}
        placeholderText={"Select Receipients"}
        noSuggestionsText={"No Matching Receipients"}
        onAdd={onAdd}
        onDelete={onDelete}
      />
      <LabelWithInput
        label={"Subject"}
        value={subject}
        onChangeValue={onChangeSubject}
      />
      <RichTextEditor
        editorHtml={editorHtml}
        onChangeEditorHtml={onChangeEditorHtml}
        placeholder={"Write something..."}
      />
    </div>
  );
};
