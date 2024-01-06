import styles from "./ComposeMail.module.scss";
import { RichTextEditor } from "../../components/rich-text-editor/RichTextEditor";
import { AutoCompleteTag } from "../../components/auto-complete-tag/AutoCompleteTag";
import { LabelWithInput } from "./components/lable-with-input/LabelWithInput";
import { Icon } from "../../components/icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";
import { useComposeMail } from "./useComposeMail";
import ComposeMailFooter from "./components/compose-mail-footer/ComposeMailFooter";
import { Divider } from "../../components/divider/Divider";

export const ComposeMail = () => {
  const {
    editorHtml,
    fromEmailId,
    subject,
    suggestions,
    selectedSuggestions,
    onAddReceipient,
    onChangeSubject,
    onDeleteReceipient,
    onClose,
    onChangeEditorHtml,
    onDelete,
    onSend,
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
      <Divider />
      <LabelWithInput
        label={"From"}
        value={fromEmailId}
        onChangeValue={() => {}}
      />
      <Divider />
      <AutoCompleteTag
        suggestions={suggestions}
        selectedSuggestions={selectedSuggestions}
        placeholderText={"Select Receipients"}
        noSuggestionsText={"No Matching Receipients"}
        onAdd={onAddReceipient}
        onDelete={onDeleteReceipient}
      />
      <Divider />
      <LabelWithInput
        label={"Subject"}
        value={subject}
        onChangeValue={onChangeSubject}
      />
      <Divider />
      <RichTextEditor
        editorHtml={editorHtml}
        onChangeEditorHtml={onChangeEditorHtml}
        placeholder={"Write something..."}
      />
      <Divider />
      <ComposeMailFooter onClickSend={onSend} onClickDelete={onDelete} />
    </div>
  );
};
