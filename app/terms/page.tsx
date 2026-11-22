import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import { site } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Terms of Service | 24digital',
  description: 'Terms of service and commercial conditions for digital agency engagements with 24digital.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="page">
      <Header />
      <main className="wrap legal-page">
        <p className="eyebrow">Terms &amp; Conditions</p>
        <h1>Terms of Service</h1>
        <p style={{ color: 'var(--muted)', fontSize: 14 }}>Last updated: November 2026</p>

        <div className="legal-notice">
          <strong>Notice:</strong> This is a starter agreement outlining typical service terms for 24digital engagements in India. Specific project statements of work (SOW) and service level agreements (SLA) supersede these general website terms. Subject to formal legal review.
        </div>

        <h2>1. Scope of Services</h2>
        <p>
          24digital ("Agency") provides digital solutions including website and application development, cloud hosting, bulk SMS, email marketing, brand strategy, on-ground campus and corporate activations, and performance marketing.
        </p>

        <h2>2. Quotes &amp; Proposals</h2>
        <p>
          Information and pricing stated on our website or provided via preliminary WhatsApp consultations are non-binding estimates until confirmed in a formalized Statement of Work (SOW) or commercial invoice.
        </p>

        <h2>3. Intellectual Property Rights</h2>
        <p>
          Upon receipt of full payment under an agreed SOW, all final client deliverables—including custom website source code, design vectors, and logos—are transferred to the client, subject to third-party open-source licenses and commercial font agreements.
        </p>

        <h2>4. Hosting, Server &amp; SLA Guidelines</h2>
        <p>
          While 24digital provisions enterprise-grade cloud servers and dedicated VPS configurations targeting 99.9% uptime, we are not liable for upstream network blackouts, force majeure events, or registrar-level domain suspensions. Clients are responsible for maintaining registrar renewals and account ownership credentials.
        </p>

        <h2>5. DLT, TRAI &amp; Ad Compliance</h2>
        <p>
          Clients utilizing our Bulk SMS or Performance Marketing services warrant that their business entities and message content comply with Telecom Commercial Communications Customer Preference Regulations (TCCCPR), Meta Advertising Standards, and Google Ads Policies.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by Indian law, 24digital's total aggregate liability arising out of any engagement shall not exceed the total fees paid by the client for the specific deliverable giving rise to the claim.
        </p>

        <h2>7. Governing Law &amp; Jurisdiction</h2>
        <p>
          These terms and all related commercial agreements shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.
        </p>

        <h2>8. Contact</h2>
        <p>
          For contract inquiries or commercial clarifications:<br />
          <strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a><br />
          <strong>Phone:</strong> {site.primaryPhone}
        </p>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
