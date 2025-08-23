import styles from "./Logo.module.scss";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <Link href="/">
        <div className={styles.logo}>
          <Image
            src={"/images/logoShort.png"}
            alt="Wejście do biura"
            loading="lazy"
            width={100}
            height={50}
          />
        </div>
      </Link>
    </div>
  );
}
