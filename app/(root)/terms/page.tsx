import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Terms & Conditions
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
              These Terms and Conditions govern your use of the Student Choice
              Education website and services. By accessing or using our website,
              you agree to be legally bound by these terms. If you do not agree
              with any part of these terms, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              2. Nature of Services
            </h2>
            <p className="mt-3">
              Student Choice Education provides advisory and support services
              for international students looking to study abroad. Our services
              include:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>University and course selection guidance.</li>
              <li>Application document review and submission.</li>
              <li>Scholarship eligibility assessment.</li>
              <li>Student visa guidance and pre-departure support.</li>
            </ul>
            <p className="mt-3 font-medium text-slate-900">
              Important Disclaimer:
            </p>
            <p className="mt-1">
              While we use our expertise to maximise your chances of success,{" "}
              <strong>we cannot guarantee admission</strong> to any specific
              institution or the issuance of a visa. Final decisions regarding
              admissions and visas lie solely with the respective universities
              and government immigration authorities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              3. User Obligations
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>
                You confirm that all documents and information provided to us
                are authentic, accurate, and up to date.
              </li>
              <li>
                You agree not to use our services for any fraudulent or illegal
                purpose.
              </li>
              <li>
                You are responsible for meeting all deadlines set by
                universities or immigration authorities.
              </li>
            </ul>
            <p className="mt-2">
              Student Choice Education reserves the right to terminate services
              immediately if misleading or forged documents are submitted.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              4. Intellectual Property
            </h2>
            <p className="mt-3">
              All content on this website, including text, graphics, logos, and
              software, is the property of Student Choice Education or its
              licensors and is protected by copyright laws. You may not
              reproduce, distribute, or exploit any content without our prior
              written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              5. Third-Party Links
            </h2>
            <p className="mt-3">
              Our website may contain links to third-party websites (e.g.,
              university portals, IELTS providers). We have no control over
              these sites and accept no responsibility for their content or
              privacy practices. Accessing third-party sites is done at your own
              risk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              6. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by law, Student Choice Education
              shall not be liable for any indirect, incidental, or consequential
              damages arising from:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>The refusal of a university offer or student visa.</li>
              <li>
                Delays caused by third parties (e.g., embassies or exam boards).
              </li>
              <li>Errors or interruptions in the operation of this website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              7. Amendments
            </h2>
            <p className="mt-3">
              We reserve the right to modify these Terms and Conditions at any
              time. Changes will be effective immediately upon posting to the
              website. Your continued use of the site constitutes acceptance of
              the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              8. Governing Law
            </h2>
            <p className="mt-3">
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of <strong>England and Wales</strong>.
              Any disputes arising under these terms shall be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              9. Contact Us
            </h2>
            <p className="mt-3">
              If you have any questions about these Terms, please contact us via
              our{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-slate-900 underline underline-offset-2 hover:text-blue-600"
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
