import { FC } from "react";
import { ComposeMailFooterProps } from "../../types/ComposeMailFooterProps";
import styles from "./ComposeMailFooter.module.scss";
import Button from "../../../../components/button/Button";
import { Icon } from "../../../../components/icon/Icon";
import { IconType } from "../../../../assets/svg/types/IconType";

const ComposeMailFooter: FC<ComposeMailFooterProps> = ({
  onClickSend,
  onClickDelete,
}) => {
  return (
    <div className={styles.container}>
      <Button
        title={"Send"}
        onClick={onClickSend}
        containerClass={styles.button}
      />
      <Icon
        iconType={IconType.DELETE_OUTLINE}
        onClick={onClickDelete}
        containerClass={styles.delete}
      />
    </div>
  );
};

export default ComposeMailFooter;
