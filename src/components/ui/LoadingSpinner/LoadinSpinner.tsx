import styles from "./LoadingSpinner.module.scss";

export function LoadingSpinner() {
  return (
    <div className={styles.loadingSpinnerContainer}>
      <div className={styles.loadingSpinner}>
        <div
          className={`${styles.spinnerSector} ${styles.spinnerSectorBlue}`}
        ></div>
        <div
          className={`${styles.spinnerSector} ${styles.spinnerSectorWhite}`}
        ></div>
      </div>
      <p className={styles.loadingText}>Ładowanie...</p>
    </div>
  );
}
