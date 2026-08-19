import { site } from "@/lib/site";

type DownloadButtonProps = {
  size?: "sm" | "md" | "lg";
  label?: string;
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function DownloadButton({
  size = "md",
  label,
}: DownloadButtonProps) {
  return (
    <a
      href={site.downloadUrl}
      className={`inline-flex items-center justify-center rounded-full border border-gray-900 font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white ${sizes[size]}`}
    >
      {label ?? `Download free trial`}
    </a>
  );
}
