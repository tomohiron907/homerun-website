import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";
import { site, legal, endpoints } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `How ${site.name} handles your data. Short version: it does not collect any.`,
  alternates: { canonical: `${site.url}/privacy/` },
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lead={`${site.name} has no analytics, no telemetry and no crash reporting. This page exists to say exactly what the app does talk to, and why.`}
    >
      <Section heading="Who we are">
        <p>
          {site.name} is developed and supported by {legal.company} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;). Purchases are not made from us directly: {legal.merchantOfRecord} acts
          as the Merchant of Record and is the seller of record for every order.
          See{" "}
          <a href="/terms/">Terms of Service</a> for what that means for your
          purchase.
        </p>
      </Section>

      <Section heading="What the app collects">
        <p>
          Nothing. {site.name} does not send us your file names, folder contents,
          search queries, keystrokes or usage statistics. It contains no
          analytics SDK and no crash reporter. The files you browse never leave
          your Mac.
        </p>
      </Section>

      <Section heading="What the app connects to">
        <p>
          There are exactly two outbound connections, both of which you can
          verify with a network monitor:
        </p>
        <ul>
          <li>
            <strong>Licence activation</strong> — when you enter a licence key,
            the key and a device label (your Mac&rsquo;s computer name) are sent to{" "}
            <code>{endpoints.licence}</code> so Polar can activate and later
            revalidate it. The result is stored in your macOS Keychain and never
            transmitted anywhere else.
          </li>
          <li>
            <strong>Update check</strong> — the app requests{" "}
            <code>{endpoints.updates}</code> to see whether a newer version
            exists. This is a plain file download. Like any web request it leaves
            your IP address and user agent in our hosting provider&rsquo;s standard
            server logs; we do not tie those logs to a licence or a person.
          </li>
        </ul>
        <p>
          During the {site.trialDays}-day trial the app makes no licence request
          at all, because there is no key to check.
        </p>
      </Section>

      <Section heading="Payments">
        <p>
          Checkout, payment details, tax and invoicing are handled entirely by
          Polar. We never see or store your card number. From Polar we receive
          the order record and the email address you bought with, which we use
          only to answer support requests and to send you a licence key. Polar
          processes that data under its own privacy policy at{" "}
          <a href="https://polar.sh/legal/privacy">polar.sh/legal/privacy</a>.
        </p>
      </Section>

      <Section heading="This website">
        <p>
          This site is a set of static files. It sets no cookies, embeds no
          analytics script, and loads no third-party fonts or trackers. Our
          hosting provider keeps ordinary access logs (IP address, user agent,
          requested path) for security and abuse prevention.
        </p>
      </Section>

      <Section heading="Data retention and your rights">
        <p>
          The only personal data we hold is the order and support correspondence
          described above. You can ask us to tell you what we hold, to correct
          it, or to delete it — email{" "}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> and we
          will respond within 30 days. Deleting your order record may make it
          impossible for us to honour a refund or reissue a lost key, so we will
          say so before acting.
        </p>
      </Section>

      <Section heading="Changes to this policy">
        <p>
          If we change what the app connects to, we will update this page and
          move the effective date at the top before shipping the release that
          makes the change.
        </p>
      </Section>

      <Section heading="Contact">
        <p>
          {legal.company} —{" "}
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
        </p>
      </Section>
    </LegalPage>
  );
}
