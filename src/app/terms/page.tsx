import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";
import { site, legal } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms of Service — ${site.name}`,
  description: `The licence agreement and terms of sale for ${site.name}.`,
  alternates: { canonical: `${site.url}/terms/` },
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      lead={`These terms cover your licence to use ${site.name} and your purchase of it. Buying or using the app means you accept them.`}
    >
      <Section heading="1. Parties">
        <p>
          {site.name} is developed and supported by {legal.company}.{" "}
          {legal.merchantOfRecord} acts as the Merchant of Record: it is the
          seller for every order, issues your receipt, and is responsible for
          sales tax and VAT. Your payment contract is with the Merchant of
          Record; your licence to use the software is with {legal.company} on the
          terms below.
        </p>
      </Section>

      <Section heading="2. Trial">
        <p>
          {site.name} runs with full functionality for {site.trialDays} days
          without a licence key. Nothing is disabled and no payment details are
          required. When the trial ends the app stops opening until a key is
          entered; your files and your configuration are untouched.
        </p>
      </Section>

      <Section heading="3. Licence">
        <p>
          On purchase you receive a perpetual, non-exclusive, non-transferable
          licence to use {site.name} for personal or commercial purposes on up to{" "}
          {site.activationLimit} Macs that you own or control. You may move an
          activation between your own machines. A licence key is personal to the
          purchaser and may not be shared, resold or published.
        </p>
      </Section>

      <Section heading="4. Updates">
        <p>
          All updates to {site.name} are included in the purchase price at no
          extra cost. If we ever introduce a paid upgrade, we will announce it
          before releasing it, and the version you already own will keep working
          and keep receiving security fixes.
        </p>
      </Section>

      <Section heading="5. What you may not do">
        <ul>
          <li>
            Redistribute, resell, rent or sublicense the application or a licence
            key.
          </li>
          <li>
            Circumvent, remove or tamper with the licensing or update mechanism.
          </li>
          <li>
            Reverse engineer, decompile or disassemble the application, except to
            the extent that applicable law expressly permits it despite this
            restriction.
          </li>
        </ul>
        <p>
          We may deactivate a licence key that is being distributed publicly or
          used beyond the activation limit through deliberate circumvention. We
          will contact you first unless doing so is impossible.
        </p>
      </Section>

      <Section heading="6. Ownership">
        <p>
          {site.name} is licensed, not sold. {legal.company} retains all
          intellectual property rights in the application. Nothing in these terms
          transfers ownership of the software or of the {site.name} name or logo.
        </p>
      </Section>

      <Section heading="7. Refunds">
        <p>
          The {site.trialDays}-day trial exists so that you can decide before
          paying. If the app nevertheless does not work for you, email{" "}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> within
          14 days of purchase and we will arrange a refund through the Merchant
          of Record. Statutory rights that apply where you live are not affected
          by this paragraph.
        </p>
      </Section>

      <Section heading="8. Support">
        <p>
          Support is provided by email at{" "}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. We aim
          to reply within a few business days. Support covers the current release
          of {site.name} on a supported version of macOS ({site.minMacOS} or
          later).
        </p>
      </Section>

      <Section heading="9. Disclaimer of warranty">
        <p>
          {site.name} is provided &ldquo;as is&rdquo;. To the maximum extent permitted by
          law, {legal.company} disclaims all warranties, express or implied,
          including fitness for a particular purpose and non-infringement. You
          are responsible for maintaining backups of your data. {site.name} can
          move, copy and delete files at your instruction; use it accordingly.
        </p>
      </Section>

      <Section heading="10. Limitation of liability">
        <p>
          To the maximum extent permitted by law, the total liability of{" "}
          {legal.company} arising out of or relating to {site.name} is limited to
          the amount you paid for your licence. We are not liable for indirect,
          incidental or consequential damages, including lost data, lost profits
          or business interruption. Nothing here limits liability that cannot be
          limited by law, including liability for intentional misconduct or gross
          negligence.
        </p>
      </Section>

      <Section heading="11. Termination">
        <p>
          Your licence ends if you materially breach these terms. On termination
          you must stop using {site.name} and remove it from your machines.
          Sections 6, 9, 10 and 12 survive termination.
        </p>
      </Section>

      <Section heading="12. Governing law">
        <p>
          These terms are governed by the laws of Japan. Any dispute that cannot
          be resolved by agreement will be submitted to the exclusive
          jurisdiction of the Japanese court having jurisdiction over the
          registered office of {legal.company}. Consumers keep the protection of
          any mandatory law of their country of residence.
        </p>
      </Section>

      <Section heading="13. Changes">
        <p>
          We may update these terms for future purchases. The version in force
          when you bought your licence continues to apply to that licence. The
          effective date at the top of this page shows when the current version
          took effect.
        </p>
      </Section>

      <Section heading="14. Contact">
        <p>
          {legal.company} —{" "}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
          <br />
          Statutory disclosure for customers in Japan:{" "}
          <a href="/legal/tokushoho/">特定商取引法に基づく表記</a>
        </p>
      </Section>
    </LegalPage>
  );
}
