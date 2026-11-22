import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { site } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Privacy Policy | 24digital',
  description: 'Privacy Policy for 24digital. Information on how we collect, use, and protect your personal data in compliance with Indian regulations.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page">
      <Header />
      <main className="wrap legal-page">
        <p className="eyebrow">Legal &amp; Compliance</p>
        <h1>Privacy Policy</h1>
        <p style={{ color: 'var(--muted)', fontSize: 14 }}>Last updated: November 2026</p>

        <div className="legal-notice">
          <strong>Notice:</strong> This is a starter privacy policy draft tailored for 24digital's operations in India. It references the Digital Personal Data Protection Act, 2023 (DPDP Act) and Information Technology Act, 2000. It must be formally reviewed and approved by qualified legal counsel prior to formal reliance.
        </div>

        <h2>1. Overview</h2>
        <p>
          24digital ("we", "our", or "us"), based in Mumbai, Maharashtra, India, respects your privacy and is committed to protecting the personal data of visitors to our website (<strong>https://24digital.store</strong>), clients, and partners. This policy outlines how we collect, store, and process personal data in accordance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the <strong>Information Technology Act, 2000</strong>.
        </p>

        <h2>2. Data We Collect</h2>
        <p>We only collect personal information that you voluntarily provide to us when submitting an inquiry or contacting our team:</p>
        <ul>
          <li><strong>Contact Information:</strong> Full name, corporate email address, and telephone/WhatsApp number.</li>
          <li><strong>Project Scope:</strong> Details about your required services, budget parameters, and business background.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, device identifiers, and anonymized analytics data captured through privacy-preserving tags (only upon your explicit consent).</li>
        </ul>

        <h2>3. Purpose and Legal Grounds for Processing</h2>
        <p>We process your data exclusively for legitimate commercial purposes:</p>
        <ul>
          <li>To prepare project proposals, service quotes, and architecture consultations.</li>
          <li>To communicate project milestones via email, telephone, or WhatsApp.</li>
          <li>To fulfill statutory compliance, taxation, and billing obligations under Indian law.</li>
        </ul>

        <h2>4. DLT &amp; Commercial Communication Compliance</h2>
        <p>
          When you submit an inquiry requesting telephone or WhatsApp follow-up, you consent to our team contacting you regarding your project brief. We do not engage in unsolicited promotional robocalling. Commercial SMS and email communications adhere strictly to Telecom Regulatory Authority of India (TRAI) DLT requirements.
        </p>

        <h2>5. Data Retention &amp; Security</h2>
        <p>
          We employ industry-standard encryption, SSL transmission, and hardened server infrastructure. We retain client inquiries for as long as necessary to facilitate ongoing business relationships or as required by applicable Indian tax and corporate laws.
        </p>

        <h2>6. Your Rights under the DPDP Act 2023</h2>
        <p>As a data principal under Indian law, you have the right to:</p>
        <ul>
          <li>Request a summary of personal data held about you.</li>
          <li>Request correction or updating of inaccurate data.</li>
          <li>Request erasure of your contact records from our sales databases.</li>
          <li>Nominate a representative in case of incapacity.</li>
        </ul>

        <h2>7. Contact &amp; Grievance Redressal</h2>
        <p>
          For privacy inquiries, data deletion requests, or grievance redressal, please reach out to our team at:
        </p>
        <p>
          <strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a><br />
          <strong>Address:</strong> 24digital, Mumbai, Maharashtra, India<br />
          <strong>Phone:</strong> {site.primaryPhone}
        </p>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
