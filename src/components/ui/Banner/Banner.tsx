// import styles from "./Banner.module.scss";

// export function Banner() {
//   return (
//     <div className={styles.bannerWrapper}>
//       <div className={styles.banner}>
//         <div className={styles.bannerItem}>
//           <h3>Zakładanie działalności online</h3>
//         </div>
//         <div className={styles.divider} />
//         <div className={styles.bannerItem}>
//           <h3>Kompleksowa obsługa online</h3>
//         </div>
//       </div>
//     </div>
//   );
// }
import styles from "./Banner.module.scss";

export function Banner() {
  return (
    <section
      aria-label="Usługi online biura rachunkowego"
      className={styles.bannerWrapper}
    >
      <div className={styles.banner}>
        <div className={styles.bannerItem}>
          <h2>Zakładanie działalności online i zdalna księgowość</h2>
        </div>
        <div className={styles.divider} />
        <div className={styles.bannerItem}>
          <h2>Kompleksowa obsługa firm online </h2>
        </div>
      </div>
    </section>
  );
}
