// import styles from "./Banner.module.scss";

// export default function Banner() {
//   return (
//     <section
//       className={styles.photo}
//       aria-label="Główna sekcja - Biuro Rachunkowe"
//     >
//       <div className={styles.title}>
//         <p className={styles.location}>
//           <span className={styles.mainText}>Profesjonalne usługi księgowe</span>
//           <span className={styles.subText}>- z Gdańska dla całej Polski</span>
//         </p>
//       </div>
//     </section>
//   );
// }

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
