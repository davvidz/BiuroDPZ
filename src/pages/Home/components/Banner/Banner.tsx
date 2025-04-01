import styles from "./Banner.module.scss";

export function Banner() {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.banner}>
        <div className={styles.bannerItem}>
          <h3>Zakładanie działalności online</h3>
        </div>
        <div className={styles.divider} />
        <div className={styles.bannerItem}>
          <h3>Kompleksowa obsługa online</h3>
        </div>
      </div>
    </div>
  );
}
