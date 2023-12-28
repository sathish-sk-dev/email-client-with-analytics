import styles from "./UserInfo.module.scss";

export const UserInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <span className={styles.title}> {"Sathish Kumar"} </span>
        <div className={styles.status}>
          <div className={styles.statusColor}> </div> {"ONLINE"}
        </div>
      </div>
      <img
        className={styles.avatar}
        src={
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/563.jpg"
        }
      />
    </div>
  );
};
