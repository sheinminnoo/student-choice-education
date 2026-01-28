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
              For the purposes of the Data Protection Act 2018 and the United
              Kingdom General Data Protection Regulation (UK GDPR), Student
              Choice Education is the <strong>Data Controller</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              We collect personal data that you voluntarily provide to us,
              including:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>
                <strong>Identity Data:</strong> Full name, date of birth, and
                gender.
              </li>
              <li>
                <strong>Contact Data:</strong> Email address, phone/WhatsApp
                number, and postal address.
              </li>
              <li>
                <strong>Academic Data:</strong> Current school/university,
                grades, transcripts, and English language test scores.
              </li>
              <li>
                <strong>Application Data:</strong> CVs, personal statements, and
                reference letters uploaded via our forms.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, and
                device information collected via cookies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">
              We process your personal data for the following purposes:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>
                To evaluate your eligibility for university courses and
                scholarships.
              </li>
              <li>
                To submit applications to educational institutions on your
                behalf.
              </li>
              <li>
                To communicate with you regarding visa requirements and
                accommodation options.
              </li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website performance and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              4. Legal Basis for Processing
            </h2>
            <p className="mt-3">
              We rely on the following legal bases to process your data:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>
                <strong>Consent:</strong> When you voluntarily submit forms or
                sign up for newsletters.
              </li>
              <li>
                <strong>Contractual Necessity:</strong> To fulfill our service
                agreement with you (e.g., processing your application).
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To manage our business
                effectively and prevent fraud.
              </li>
              <li>
                <strong>Legal Obligation:</strong> To comply with applicable
                laws (e.g., UK Visas and Immigration requirements).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              5. Data Storage and Security
            </h2>
            <p className="mt-3">
              Your data is stored securely using enterprise-grade cloud services
              (including Google Cloud and secure CRM systems). We implement
              strict security measures, including:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>Encryption of data in transit (SSL/TLS) and at rest.</li>
              <li>
                Strict access controls limiting data access to authorised
                personnel only.
              </li>
              <li>Regular security audits and vulnerability assessments.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              6. International Data Transfers
            </h2>
            <p className="mt-3">
              As an international education consultancy, we may need to transfer
              your data to universities or partners outside the United Kingdom
              and the European Economic Area (EEA).
            </p>
            <p className="mt-2">
              Whenever we transfer your personal data out of the UK or EEA, we
              ensure a similar degree of protection is afforded to it by
              ensuring appropriate safeguards are in place, such as Standard
              Contractual Clauses (SCCs) or adequacy decisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              7. Data Retention
            </h2>
            <p className="mt-3">
              We will only retain your personal data for as long as necessary to
              fulfill the purposes we collected it for, including satisfying any
              legal, accounting, or reporting requirements. Typically, student
              application data is retained for up to 6 years following the end
              of our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              8. Your Legal Rights
            </h2>
            <p className="mt-3">Under the UK GDPR, you have the right to:</p>
            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>
                <strong>Request access</strong> to your personal data.
              </li>
              <li>
                <strong>Request correction</strong> of inaccurate data.
              </li>
              <li>
                <strong>Request erasure</strong> of your personal data
                (&quot;right to be forgotten&quot;).
              </li>
              <li>
                <strong>Object to processing</strong> of your personal data.
              </li>
              <li>
                <strong>Request restriction</strong> of processing.
              </li>
              <li>
                <strong>Withdraw consent</strong> at any time.
              </li>
            </ul>
            <p className="mt-4 font-medium text-slate-900">Right to Complain</p>
            <p className="mt-1">
              You have the right to make a complaint at any time to the
              Information Commissioner&#39;s Office (ICO), the UK supervisory
              authority for data protection issues (www.ico.org.uk). We would,
              however, appreciate the chance to deal with your concerns before
              you approach the ICO, so please contact us in the first instance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              9. Contact Us
            </h2>
            <p className="mt-3">
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:
            </p>
            <div className="mt-4 rounded-lg bg-slate-50 p-4 border border-slate-100">
              <p>
                <strong>Student Choice Education</strong>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@studentchoice.com"
                  className="text-blue-600 hover:underline"
                >
                  info@studentchoice.com
                </a>
              </p>
              <p className="mt-2">
                Or use our secure{" "}
                <Link
                  href="/contact-us"
                  className="font-semibold text-slate-900 underline underline-offset-2 hover:text-blue-600"
                >
                  Contact Form
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
