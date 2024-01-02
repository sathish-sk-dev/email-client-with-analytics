import styles from "./MailList.module.scss";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { useEffect, useState } from "react";
import { MailListHeader } from "./components/mail-list-header/MailListHeader";
import { MailListItem } from "./components/mail-list-item/MailListItem";
import { generateMockMailList } from "../../utils/fakeDataGenerator";
import { UserMailStatus } from "../../enums/UserMailStatus";
import { IMailListItem } from "../../interfaces/IMailListItem";

export const MailList = () => {
  const [searchText, setSearchText] = useState("");
  const [mailList, setMailList] = useState<IMailListItem[]>([]);
  const [unReadCount, setUnReadCount] = useState(0);

  useEffect(() => {
    const list = generateMockMailList(50);
    let count = 0;
    list.forEach((item) => {
      if (item.userMailStatus === UserMailStatus.UN_READ) {
        count++;
      }
    });
    console.log(list);
    setMailList(list);
    setUnReadCount(count);
  }, []);

  const onChange = (text: string) => {
    setSearchText(text);
  };

  const onSearch = () => {};

  const onClickAdd = () => {};

  const renderMailList = () => {
    return mailList.map((item, index) => (
      <MailListItem item={item} index={index} />
    ));
  };

  return (
    <div className={styles.container}>
      <MailListHeader
        title={"Inbox"}
        unReadCount={unReadCount}
        onClickAdd={onClickAdd}
      />
      <div className={styles.innerContainer}>
        <SearchBar
          searchText={searchText}
          onChange={onChange}
          placeholderText={"Search in mail"}
          onSearch={onSearch}
        />
      </div>
      <div className={styles.listContainer}>{renderMailList()}</div>
    </div>
  );
};
