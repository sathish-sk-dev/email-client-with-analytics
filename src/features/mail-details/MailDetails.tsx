import cx from "classnames";
import { UserInfo } from "../user-info/UserInfo";
import { MailDetailsHeader } from "./components/mail-details-header/MailDetailsHeader";
import { capitalizeFirstLetter } from "../../utils/stringUtils";
import { useMailDetails } from "./useMailDetails";
import { IMailListItem } from "../../interfaces/IMailListItem";
import styles from "./MailDetails.module.scss";

export const MailDetails = () => {
  const { selectedMailItem, onClose, user } = useMailDetails();
  const mailDetails = selectedMailItem as IMailListItem;
  const { subject, body } = mailDetails;
  return (
    <div className={cx(styles.container)}>
      <UserInfo user={user} onClose={onClose} />
      <div className={styles.innerContainer}>
        <MailDetailsHeader mailDetails={mailDetails} />
        <span className={styles.subject}>{capitalizeFirstLetter(subject)}</span>
        <span className={styles.body}>{body}</span>
      </div>
    </div>
  );
};
