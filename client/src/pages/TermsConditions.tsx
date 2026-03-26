import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/images/textmyapp-logo.png";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold font-heading text-primary mb-3">{title}</h2>
      <div className="text-foreground/70 text-sm leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Header */}
      <header className="bg-primary text-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <img src={logoImage} alt="TextMyApp" className="h-9 w-auto brightness-0 invert" />
          <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white gap-2" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-2xl">

        <h1 className="text-4xl font-bold font-heading text-primary mb-2">Terms and Conditions</h1>
        <p className="text-foreground/50 text-sm mb-10">Last Updated: March 26, 2026</p>

        <p className="text-foreground/70 text-sm leading-relaxed mb-10">
          These Terms and Conditions ("Terms") govern your use of the TextMyApp SMS job application service operated by Order and Operations Consulting LLC ("we," "us," or "our"). By using TextMyApp, you agree to these Terms.
        </p>

        <Section title="Service Description">
          <p>TextMyApp is an SMS-based job application platform. Employers provide unique application codes to job seekers. Job seekers text their code to our phone number to complete a job application via text message. Applications are delivered to the respective employer.</p>
        </Section>

        <Section title="Eligibility">
          <p>You must be at least 16 years old to use TextMyApp. By using our service, you represent that you meet this requirement.</p>
        </Section>

        <Section title="SMS Terms and Consent">
          <p>By texting your application code to our number, you agree to the following:</p>
          <ol className="list-decimal list-inside space-y-2 pl-2">
            <li><strong>Consent to Receive Messages</strong> — You consent to receive recurring text messages from TextMyApp related to your job application.</li>
            <li><strong>Message Frequency</strong> — Message frequency varies based on the application process, typically 5–10 messages per application.</li>
            <li><strong>Message and Data Rates</strong> — Standard message and data rates may apply based on your mobile carrier plan.</li>
            <li><strong>Opt-Out</strong> — You may opt out at any time by replying STOP to any message. You will receive a confirmation message and no further messages will be sent.</li>
            <li><strong>Help</strong> — For assistance, reply HELP to any message or contact hello@orderandoperations.com.</li>
            <li><strong>Carrier Liability</strong> — Carriers are not liable for delayed or undelivered messages.</li>
            <li><strong>No Marketing Messages</strong> — We do not send promotional or marketing messages. All messages are related to your job application.</li>
          </ol>
        </Section>

        <Section title="User Responsibilities">
          <p>You agree to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Provide accurate information during the application process</li>
            <li>Not use the service for any unlawful purpose</li>
            <li>Not impersonate another person</li>
            <li>Not submit fraudulent applications</li>
          </ul>
        </Section>

        <Section title="Employer Relationship">
          <p>TextMyApp facilitates the delivery of your application to employers. We are not the employer and do not make hiring decisions. Any employment relationship is solely between you and the employer.</p>
          <p>We do not guarantee:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>That you will receive a job offer</li>
            <li>That employers will respond to your application</li>
            <li>The accuracy of job listings or employer information</li>
          </ul>
        </Section>

        <Section title="Intellectual Property">
          <p>TextMyApp, including its name, logo, and service design, is the property of Order and Operations Consulting LLC. You may not use our branding without permission.</p>
        </Section>

        <Section title="Disclaimers">
          <p>THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</p>
          <p>We do not warrant that:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>The service will be uninterrupted or error-free</li>
            <li>Messages will be delivered instantly</li>
            <li>Applications will result in employment</li>
          </ul>
        </Section>

        <Section title="Limitation of Liability">
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, ORDER AND OPERATIONS CONSULTING LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF TEXTMYAPP.</p>
        </Section>

        <Section title="Indemnification">
          <p>You agree to indemnify and hold harmless Order and Operations Consulting LLC from any claims, damages, or expenses arising from your use of the service or violation of these Terms.</p>
        </Section>

        <Section title="Modifications">
          <p>We may update these Terms from time to time. Continued use of the service after changes constitutes acceptance of the updated Terms.</p>
        </Section>

        <Section title="Governing Law">
          <p>These Terms are governed by the laws of the State of North Carolina, without regard to conflict of law principles.</p>
        </Section>

        <Section title="Termination">
          <p>We reserve the right to terminate or suspend access to our service at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or employers.</p>
        </Section>

        <Section title="Contact Us">
          <p>Order and Operations Consulting LLC</p>
          <p>Email: <a href="mailto:hello@orderandoperations.com" className="text-accent hover:underline">hello@orderandoperations.com</a></p>
          <p>Website: <a href="https://textmyapp.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://textmyapp.com</a></p>
        </Section>

        <div className="flex gap-6 pt-6 border-t border-slate-200 text-sm">
          <Link href="/apply" className="text-foreground/50 hover:text-accent transition-colors">How to Apply</Link>
          <Link href="/privacy-policy" className="text-foreground/50 hover:text-accent transition-colors">Privacy Policy</Link>
        </div>

      </main>
    </div>
  );
}
