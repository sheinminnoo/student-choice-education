import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Last updated: 1 December 2025
          </p>
        </div>

        <div className="space-y-12 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              1. Introduction
            </h2>
            <p className="mt-3">
              Student Choice Education (&quot;we&quot;, &quot;our&quot;,
              &quot;us&quot;) is committed to protecting your personal data and
              respecting your privacy. This policy explains how we collect, use,
              store, and protect your information when you use our website and
              services.
            </p>
            <p className="mt-2">
              This privacy policy complies with the United Kingdom General Data
              Protection Regulation (UK GDPR), the European Union GDPR, and
              applicable international privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              2. Information We Collect
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone or WhatsApp number</li>
              <li>City, country, and postal code</li>
              <li>Current school or university</li>
              <li>Motivation and application information</li>
              <li>Uploaded documents such as CVs</li>
              <li>
                Technical data such as IP address, browser, and device type
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              3. How We Use Your Information
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>To process your enquiries and applications</li>
              <li>To contact you regarding our services or programmes</li>
              <li>To match students with suitable education partners</li>
              <li>To improve website performance and security</li>
              <li>To comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              4. Legal Basis for Processing
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Your explicit consent</li>
              <li>Contractual necessity</li>
              <li>Legal obligations</li>
              <li>Legitimate business interests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              5. Data Storage and Security
            </h2>
            <p className="mt-3">
              Your data is securely stored using protected cloud services,
              including Google services and internal systems. We apply:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Encrypted data transmission where possible</li>
              <li>Restricted internal access to personal data</li>
              <li>Secure authentication systems</li>
              <li>Regular monitoring for security issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              6. Document and CV Uploads
            </h2>
            <p className="mt-3">
              Uploaded documents such as CVs are securely stored and only
              accessed by authorised staff for application processing. Files are
              not shared with third parties without your consent unless required
              by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              7. Cookies and Tracking
            </h2>
            <p className="mt-3">
              We use essential cookies for website functionality and may use
              analytics tools to understand how our website is used. You can
              disable cookies through your browser settings, but this may affect
              website performance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              8. International Data Transfers
            </h2>
            <p className="mt-3">
              Your data may be processed outside the United Kingdom and European
              Economic Area. When this happens, appropriate safeguards are used
              to keep your data protected.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              9. Your Rights
            </h2>
            <p className="mt-3">
              Under data protection law, you may have the right to:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Restrict or object to certain types of processing</li>
              <li>Request a copy of your data in a portable format</li>
              <li>Withdraw your consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us using the
              details on our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              10. Data Retention
            </h2>
            <p className="mt-3">
              We keep your personal data only for as long as necessary for the
              purposes described in this policy or as required by law. CVs and
              application data are reviewed and securely removed when no longer
              needed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              11. Third-Party Sharing
            </h2>
            <p className="mt-3">
              We do not sell your personal data. Your information may be shared
              with trusted education partners or service providers strictly for
              application processing, advisory services, and legal compliance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              12. Children’s Privacy
            </h2>
            <p className="mt-3">
              Our services are intended for users aged 16 and above. We do not
              knowingly collect personal data from children without verified
              parental consent. If you believe a child has provided us with
              personal data, please contact us and we will take appropriate
              steps.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              13. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with a new &quot;Last updated&quot;
              date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              14. Contact Us
            </h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy or how we
              handle your data, please contact us using the contact details on
              our{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-slate-900 underline-offset-2 hover:underline"
              >
                contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
