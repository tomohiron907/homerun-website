import { site } from "@/lib/site";
import BuyButton from "./BuyButton";

const links = [
  { href: "#features", label: "Features" },
  { href: "#actions", label: "Actions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-baseline gap-3">
          <a href="#top" className="text-lg font-bold tracking-tight text-gray-900">
            {site.name}
          </a>
          <a
            href={site.vendorUrl}
            className="hidden text-xs text-gray-400 transition-colors hover:text-gray-900 sm:inline"
          >
            by {site.vendor}
          </a>
        </div>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <BuyButton medium="nav" size="sm" />
        </div>
      </nav>
    </header>
  );
}
