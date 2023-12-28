import styles from "./MailList.module.scss";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { useState } from "react";
import { MailListHeader } from "./components/mail-list-header/MailListHeader";
import { MailListItem } from "./components/mail-list-item/MailListItem";
import { generateMockMailList } from "../../utils/fakeDataGenerator";
import { UserMailStatus } from "../../enums/UserMailStatus";

export const MailList = () => {
  const [searchText, setSearchText] = useState("");

  const list = generateMockMailList(50);

  let unReadCount = 0;

  list.forEach((item) => {
    if (item.userMailStatus === UserMailStatus.UN_READ) {
      unReadCount++;
    }
  });

  console.log(list);

  const onChange = (text: string) => {
    setSearchText(text);
  };

  const onSearch = () => {};

  const onClickAdd = () => {};

  const renderMailList = () => {
    return list.map((item) => <MailListItem item={item} />);
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
