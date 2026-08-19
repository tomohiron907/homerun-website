import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-100 py-16">
      <div className="mx-auto flex max-w-5xl flex-wrap items-start justify-between gap-8 px-6">
        <div>
          <p className="text-lg font-bold tracking-tight text-gray-900">
            {site.name}
          </p>
          <p className="mt-2 text-sm text-gray-400">
            A keyboard-first file browser for macOS.
          </p>
          <p className="mt-6 text-sm text-gray-400">
            © 2026 {site.vendor}. All rights reserved.
          </p>
        </div>

        <ul className="space-y-2 text-sm">
          <li>
            <a
              href={site.vendorUrl}
              className="text-gray-500 transition-colors hover:text-gray-900"
            >
              {site.vendor}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.supportEmail}`}
              className="text-gray-500 transition-colors hover:text-gray-900"
            >
              Support
            </a>
          </li>
          <li>
            <a
              href={site.customerPortalUrl}
              className="text-gray-500 transition-colors hover:text-gray-900"
            >
              Manage your licence
            </a>
          </li>
          <li>
            <a
              href="/privacy/"
              className="text-gray-500 transition-colors hover:text-gray-900"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="/terms/"
              className="text-gray-500 transition-colors hover:text-gray-900"
            >
              Terms
            </a>
          </li>
          <li>
            {/* Statutory Japanese disclosure — labelled in Japanese on purpose,
                since anyone who needs it is looking for this exact string.
                (探している人はこの文字列で探すので日本語のまま置く) */}
            <a
              href="/legal/tokushoho/"
              lang="ja"
              className="text-gray-500 transition-colors hover:text-gray-900"
            >
              特定商取引法に基づく表記
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
