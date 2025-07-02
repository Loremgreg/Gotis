import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: June 2, 2025

Thank you for visiting Gotis (“we,” “us,” or “our”). This Privacy Policy explains how we collect, use, and protect your personal and non‑personal information when you use our website located at https://gotis.cc (the “Website”) and the services of our AI Automation Agency (the “Services”).

1. Information We Collect

1.1 Personal Data  
• Name – to personalise communication.  
• Email address – to send confirmations, updates, and support messages.  
• Payment information – to process purchases securely. Payment data is handled by trusted third‑party processors and is not stored on our servers.

1.2 Non‑Personal Data  
We use web cookies and similar technologies to gather non‑personal data such as IP address, browser type, device information, and usage patterns for analytics and to improve user experience.

2. Purpose of Data Collection  
We process your data to:  
• fulfil orders and provide the Services;  
• offer customer support;  
• improve the Website and Services.

3. Data Sharing  
We do not sell, trade, or rent your personal data. We may share data only with service providers who process information on our behalf (e.g., payment processors, hosting) and who are bound by confidentiality obligations, or where required by law.

4. Children's Privacy  
The Services are not directed to children under 13. We do not knowingly collect data from children. If you believe a child has provided us with personal information, please contact us and we will delete it.

5. Data Security  
We implement reasonable technical and organisational safeguards (e.g., TLS encryption, access controls) to protect your information from loss, misuse, or unauthorised access.

6. Data Retention  
We retain personal data only as long as necessary to fulfil the purposes above or to comply with legal obligations.

7. Your Rights  
Subject to applicable law, you may request access to, correction or deletion of your personal data, object to or restrict processing, and request data portability. Contact us at gotis@gmail.com; we will respond within 30 days.

8. Updates to This Privacy Policy  
We may update this Privacy Policy from time to time. Users will be notified of significant changes via email. Unless otherwise stated, changes take effect 14 days after notification.

9. Governing Law  
This Policy is governed by the laws of Germany. Disputes shall be subject to the exclusive jurisdiction of the courts of Berlin, unless otherwise required by mandatory law.

Contact  
If you have questions about this Privacy Policy, email us at gotis@gmail.com.

By using Gotis, you consent to the terms of this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
