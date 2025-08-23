// import styles from "./ImageSection.module.scss";
// import Image from "next/image";

// export function ImageSection() {
//   return (
//     <section
//       className={styles.photo}
//       aria-label="Główna sekcja - Biuro Rachunkowe"
//     >
//       {/* Tło jako <Image /> absolutnie pozycjonowane */}
//       <div className={styles.backgroundImage}>
//         <Image
//           src="/images/businessWoman.jpg"
//           alt="Bizneswoman symbolizująca profesjonalne usługi księgowe"
//           fill
//           priority
//           className={styles.bgImage}
//         />
//       </div>

//       {/* Logo + tekst */}
//       <div className={styles.title}>
//         <Image
//           src="/images/logoPionowe.png"
//           alt="Logo Biura Rachunkowego Diana Pamela Zapadka"
//           width={400}
//           height={400}
//           className={styles.responsiveLogo}
//         />
//         <p className={styles.location}>
//           <span className={styles.mainText}>Profesjonalne usługi księgowe</span>
//           <span className={styles.subText}>- z Gdańska dla całej Polski</span>
//         </p>
//       </div>
//     </section>
//   );
// }

import styles from "./ImageSection.module.scss";
import Image from "next/image";

export function ImageSection() {
  return (
    <div className={styles.photo}>
      <div className={styles.title}>
        <Image
          src="/images/logoPionowe.png"
          alt="Logo Biura Rachunkowego Diana Pamela Zapadka"
          width={1200}
          height={800}
          className={styles.responsiveLogo}
        />
        <p className={styles.location}>
          <span className={styles.mainText}>Profesjonalne usługi księgowe</span>
          <span className={styles.subText}>- z Gdańska dla całej Polski</span>
        </p>
      </div>
    </div>
  );
}
