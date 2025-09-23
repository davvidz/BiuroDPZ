import type { Metadata } from "next";
import styles from "../vlog.module.scss";
import { videos } from "../videos.config";

// 🧱 TYLKO statyczne ścieżki — brak fallbacków
export const dynamicParams = false;

// 🔹 Lista stron do wygenerowania (statycznie)
export function generateStaticParams() {
  return videos.map((v) => ({ id: String(v.id) }));
}

// 🔹 SEO metadata dla każdej podstrony
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const video = videos.find((v) => String(v.id) === params.id);

  if (!video) {
    return {
      title: "Film nie znaleziony – Biuro Rachunkowe DPZ",
      description:
        "Nie znaleziono filmu wideo na stronie Biura Rachunkowego DPZ.",
    };
  }

  return {
    title: `${video.title} – Biuro Rachunkowe DPZ`,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      url: `https://www.biurodpz.pl/vlog/${video.id}`,
      images: [
        {
          url: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
          width: 1200,
          height: 630,
          alt: video.title,
        },
      ],
      type: "video.other",
      locale: "pl_PL",
    },
    twitter: {
      card: "summary_large_image",
      title: video.title,
      description: video.description,
      images: [`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`],
    },
  };
}

// 🔹 Sama strona
export default function VideoPage({ params }: { params: { id: string } }) {
  const video = videos.find((v) => String(v.id) === params.id);

  if (!video) {
    return <div className={styles.blog}>Nie znaleziono filmu.</div>;
  }

  return (
    <div className={styles.blog}>
      <h1 className={styles.pageTitle}>{video.title}</h1>
      <p className={styles.intro}>{video.description}</p>
      <div className={styles.videoWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allowFullScreen
        />
      </div>
    </div>
  );
}
