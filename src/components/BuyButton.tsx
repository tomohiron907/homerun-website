import { buyUrl, site } from "@/lib/site";

type BuyButtonProps = {
  /** UTM medium — must be unique per placement, attribution is not retroactive. */
  medium: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  label?: string;
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function BuyButton({
  medium,
  size = "md",
  variant = "solid",
  label,
}: BuyButtonProps) {
  const variants = {
    solid:
      "bg-gray-900 text-white border border-gray-900 hover:bg-white hover:text-gray-900",
    outline:
      "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
  };

  return (
    <a
      href={buyUrl(medium)}
      className={`inline-flex items-center justify-center rounded-full font-medium transition-colors ${sizes[size]} ${variants[variant]}`}
    >
      {label ?? `Buy — ${site.price.display}`}
    </a>
  );
}
