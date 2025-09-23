import Image from "next/image";
import styles from "./vlog.module.scss";
import { videos } from "./videos.config";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vlog – Biuro Rachunkowe DPZ",
  description:
    "Porady księgowe i podatkowe od Biura Rachunkowego DPZ. Sprawdź nasz vlog i materiały wideo dla przedsiębiorców.",
};

export default function Vlog() {
  return (
    <div className={styles.blog}>
      <h1 className={styles.pageTitle}>Vlog i materiały wideo</h1>
      <p className={styles.intro}>
        Zobacz nasze najnowsze krótkie materiały wideo z YouTube 👇
      </p>

      <div className={styles.videosGrid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoCard}>
            <Link href={`/vlog/${video.id}`} className={styles.videoLink}>
              <Image
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                width={480}
                height={270}
                className={styles.thumbnail}
              />
              <h3>{video.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
