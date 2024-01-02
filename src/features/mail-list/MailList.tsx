import styles from "./MailList.module.scss";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { MailListHeader } from "./components/mail-list-header/MailListHeader";
import { MailListItem } from "./components/mail-list-item/MailListItem";
import { useMailList } from "./useMailList";

export const MailList = () => {
  const {
    isLoading,
    title,
    searchedMailList,
    unReadCount,
    searchText,
    onSearch,
    onChangeSearch,
    onAdd,
    onClearSearch,
  } = useMailList();

  const renderMailList = () => {
    return searchedMailList.map((item, index) => (
      <MailListItem key={index} item={item} />
    ));
  };

  return (
    <div className={styles.container}>
      <MailListHeader
        title={title}
        unReadCount={unReadCount}
        onClickAdd={onAdd}
      />
      <div className={styles.innerContainer}>
        <SearchBar
          searchText={searchText}
          onChange={onChangeSearch}
          placeholderText={"Search in mail"}
          onSearch={onSearch}
          onClear={onClearSearch}
        />
      </div>
      <div className={styles.listContainer}>{renderMailList()}</div>
    </div>
  );
};
