import Image from "next/image";

type MediaFrameProps = {
  /** A path from `src/lib/assets.ts`. `null` means the asset has not been supplied yet. */
  src: string | null;
  alt: string;
  width: number;
  height: number;
  kind?: "image" | "video";
  /** Poster frame for videos. Only read when `kind` is "video". */
  poster?: string | null;
  /** Drawn in place of the asset while `src` is `null`. */
  fallback: React.ReactNode;
  className?: string;
};

/**
 * 素材の有無を吸収する唯一の場所。
 * ここだけが `assets.*` の null を見て CSS モックと実素材を切り替えるので、
 * 素材が届いたときに触るのは src/lib/assets.ts だけで済む。
 */
export default function MediaFrame({
  src,
  alt,
  width,
  height,
  kind = "image",
  poster,
  fallback,
  className = "",
}: MediaFrameProps) {
  if (!src) {
    return <div className={className}>{fallback}</div>;
  }

  if (kind === "video") {
    return (
      <video
        className={`w-full rounded-xl border border-gray-200 shadow-2xl ${className}`}
        width={width}
        height={height}
        poster={poster ?? undefined}
        aria-label={alt}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`w-full rounded-xl border border-gray-200 shadow-2xl ${className}`}
    />
  );
}
