import styles from "./ComposeMail.module.scss";
import { RichTextEditor } from "../../components/rich-text-editor/RichTextEditor";
import { AutoCompleteTag } from "../../components/auto-complete-tag/AutoCompleteTag";
import { LabelWithInput } from "./components/lable-with-input/LabelWithInput";
import { Icon } from "../../components/icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";
import { useComposeMail } from "./useComposeMail";
import ComposeMailFooter from "./components/compose-mail-footer/ComposeMailFooter";
import { Divider } from "../../components/divider/Divider";
import { useCallback } from "react";
import BottomSheet from "../../components/bottom-sheet/BottomSheet";
import useMobileMediaQuery from "../../components/responsive/hooks/useMobileMediaQuery";
import ComposeMailHeader from "./components/compose-mail-header/ComposeMailHeader";

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
    isOpenComposeView,
  } = useComposeMail();
  const isMobile = useMobileMediaQuery();

  const renderHeader = useCallback(
    () => (
      <div className={styles.headerContainer}>
        <div className={styles.title}> {"New Mail"} </div>
        <Icon
          iconType={IconType.CLOSE}
          containerClass={styles.icon}
          onClick={onClose}
        />
      </div>
    ),
    [onClose],
  );

  const renderMobileHeader = useCallback(
    () => <ComposeMailHeader onClose={onClose} onSend={onSend} />,
    [onClose, onSend],
  );

  const renderFrom = useCallback(
    () => (
      <LabelWithInput
        label={"From"}
        value={fromEmailId}
        onChangeValue={() => {}}
      />
    ),
    [fromEmailId],
  );

  const renderReceipients = useCallback(
    () => (
      <AutoCompleteTag
        suggestions={suggestions}
        selectedSuggestions={selectedSuggestions}
        placeholderText={"Select Receipients"}
        noSuggestionsText={"No Matching Receipients"}
        onAdd={onAddReceipient}
        onDelete={onDeleteReceipient}
      />
    ),
    [onAddReceipient, onDeleteReceipient, selectedSuggestions, suggestions],
  );

  const renderSubject = useCallback(
    () => (
      <LabelWithInput
        label={"Subject"}
        value={subject}
        onChangeValue={onChangeSubject}
      />
    ),
    [onChangeSubject, subject],
  );

  const renderTextEditor = useCallback(
    () => (
      <RichTextEditor
        editorHtml={editorHtml}
        onChangeEditorHtml={onChangeEditorHtml}
        placeholder={"Write something..."}
      />
    ),
    [editorHtml, onChangeEditorHtml],
  );

  const renderFooter = useCallback(
    () => <ComposeMailFooter onClickSend={onSend} onClickDelete={onDelete} />,
    [onDelete, onSend],
  );

  const renderContent = useCallback(
    () => (
      <>
        {isMobile ? renderMobileHeader() : renderHeader()}
        <Divider />
        {!isMobile && renderFrom()}
        {!isMobile && <Divider />}
        {renderReceipients()}
        <Divider />
        {renderSubject()}
        <Divider />
        {renderTextEditor()}
        <Divider containerClass={styles.mobileFooterDivider} />
        {!isMobile && renderFooter()}
      </>
    ),
    [
      isMobile,
      renderFooter,
      renderFrom,
      renderHeader,
      renderMobileHeader,
      renderReceipients,
      renderSubject,
      renderTextEditor,
    ],
  );

  const renderMobileView = useCallback(
    () => (
      <BottomSheet isOpen={isOpenComposeView} onClose={onClose}>
        {renderContent()}
      </BottomSheet>
    ),
    [isOpenComposeView, onClose, renderContent],
  );

  const renderDesktopView = useCallback(
    () => <div className={styles.container}>{renderContent()}</div>,
    [renderContent],
  );

  if (isMobile) {
    return renderMobileView();
  }

  return renderDesktopView();
};
