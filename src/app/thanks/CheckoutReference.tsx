"use client";

import { useSearchParams } from "next/navigation";

/**
 * Polar redirects to /thanks?checkout_id={CHECKOUT_ID}.
 * The reference is shown so a customer can quote it in a support email.
 *
 * Must stay wrapped in <Suspense> by its caller: with `output: "export"`,
 * a static page calling useSearchParams fails the build without one.
 */
export default function CheckoutReference() {
  const checkoutId = useSearchParams().get("checkout_id");

  if (!checkoutId) return null;

  return (
    <p className="mt-6 font-mono text-xs text-gray-400">
      Order reference: {checkoutId}
    </p>
  );
}
