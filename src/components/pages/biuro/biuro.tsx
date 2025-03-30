import { description } from "../../../data/biuro";
import style from "./biuro.module.scss";

// export const Biuro = () => {
//   return (
//     <div className={style.biuro}>
//       <div className={style.section}>
//         <div className={style.description}>
//           <div className={style.title}>
//             <h2>Nasze Biuro</h2>
//           </div>
//           <div>{description.section1.text1}</div>
//           <div>{description.section1.text2}</div>
//           <div>{description.section1.text3}</div>
//           <div>{description.section1.text4}</div>
//         </div>
//         <div className={style.photo}>
//           <img
//             src="/photos/entrance.jpg"
//             alt="entrance"
//             className={style.image}
//           />
//         </div>
//       </div>
//       <div className={style.section}>
//         <div className={style.photo}>
//           <img
//             src="/photos/abstract.jpg"
//             alt="entrance"
//             className={style.image}
//           />
//         </div>
//         <div className={style.description}>
//           <div>
//             <span style={{ fontWeight: 700 }}></span>
//             <h2>{description.section2.text1}</h2>
//           </div>
//           <div>{description.section2.text2}</div>
//           <div>{description.section2.text3}</div>
//           <div>{description.section2.text4}</div>
//         </div>
//       </div>
//     </div>
//   );
// };
export const Biuro = () => {
  return (
    <div className={style.biuro}>
      {/* Sekcja 1 */}
      <div className={style.section}>
        <div className={style.photo}>
          <img
            src="/photos/entrance.jpg"
            alt="Wejście do biura" // Lepszy alt tekst
            loading="lazy" // Lazy loading
          />
        </div>
        <div className={style.description}>
          <h2>Nasze Biuro</h2>
          <p>{description.section1.text1}</p>{" "}
          {/* Użyj <p> dla lepszej semantyki */}
          <p>{description.section1.text2}</p>
          {/* ... */}
        </div>
      </div>

      {/* Sekcja 2 */}
      <div className={style.section}>
        <div className={style.photo}>
          <img src="/photos/abstract.jpg" alt="Wnętrze biura" loading="lazy" />
        </div>
        <div className={style.description}>
          <h2>{description.section2.text1}</h2>
          <p>{description.section2.text2}</p>
          {/* ... */}
        </div>
      </div>
    </div>
  );
};
