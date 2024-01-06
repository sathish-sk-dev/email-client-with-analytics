import cx from "classnames";
import { MailDetailsHeader } from "./components/mail-details-header/MailDetailsHeader";
import { capitalizeFirstLetter } from "../../utils/stringUtils";
import { useMailDetails } from "./useMailDetails";
import { IMailListItem } from "../../interfaces/IMailListItem";
import styles from "./MailDetails.module.scss";
import { Divider } from "../../components/divider/Divider";
import { IconType } from "../../assets/svg/types/IconType";
import { Icon } from "../../components/icon/Icon";
import { useCallback } from "react";
import HtmlRenderer from "../../components/html-renderer/HtmlRenderer";

const MailDetails = () => {
  const { selectedMailItem, onClose } = useMailDetails();
  const mailDetails = selectedMailItem as IMailListItem;
  const { subject, body } = mailDetails;

  const renderBody = useCallback(
    () => (
      <div className={styles.innerContainer}>
        <HtmlRenderer htmlContent={body} />
      </div>
    ),
    [body],
  );

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Icon iconType={IconType.ARROW_LEFT} onClick={onClose} />
        <div className={styles.subject}>{capitalizeFirstLetter(subject)}</div>
      </div>
      <div className={cx(styles.contentContainer)}>
        <MailDetailsHeader mailDetails={mailDetails} />
        <Divider />
        {renderBody()}
      </div>
    </div>
  );
};

export default MailDetails;
