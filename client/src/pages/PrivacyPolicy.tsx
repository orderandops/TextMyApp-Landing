import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold font-heading text-primary mb-3">{title}</h2>
      <div className="text-foreground/70 text-sm leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Header */}
      <header className="bg-primary text-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
              <div className="flex flex-col items-center leading-none">
                <span className="text-white font-heading font-black text-[8px] tracking-tight">TEXT</span>
                <span className="text-white font-heading font-black text-[8px] tracking-tight">MY APP</span>
              </div>
            </div>
            <span className="font-heading font-bold text-lg text-white">TextMyApp</span>
          </div>
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

        <h1 className="text-4xl font-bold font-heading text-primary mb-2">Privacy Policy</h1>
        <p className="text-foreground/50 text-sm mb-10">Last Updated: March 26, 2026</p>

        <p className="text-foreground/70 text-sm leading-relaxed mb-10">
          TextMyApp is operated by Order and Operations Consulting LLC ("we," "us," or "our"). This Privacy Policy describes how we collect, use, and protect your information when you use our SMS-based job application service.
        </p>

        <Section title="Information We Collect">
          <p>When you use TextMyApp, we collect:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Phone number (required to send and receive text messages)</li>
            <li>Name (as provided by you during the application)</li>
            <li>Email address (as provided by you during the application)</li>
            <li>Job preferences (trade, location, and other application responses)</li>
            <li>Language preference</li>
            <li>Message history and timestamps</li>
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <p>We use your information to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Facilitate job applications between you and employers</li>
            <li>Send you text messages related to your application</li>
            <li>Deliver your application information to the employer associated with your application code</li>
            <li>Respond to your HELP or STOP requests</li>
            <li>Improve our service</li>
          </ul>
        </Section>

        <Section title="SMS/Text Messaging">
          <p>By texting your application code to our number, you consent to receive recurring text messages from TextMyApp related to job applications.</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Message frequency varies (typically 5–10 messages per application)</li>
            <li>Message and data rates may apply</li>
            <li>Reply STOP to cancel and stop receiving messages</li>
            <li>Reply HELP for assistance</li>
            <li>Carriers are not liable for delayed or undelivered messages</li>
          </ul>
          <p>We do not send marketing or promotional text messages. All messages are related to your job application.</p>
        </Section>

        <Section title="Information Sharing">
          <p>We share your application information with:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>The employer associated with your application code (so they can review your application and contact you about job opportunities)</li>
          </ul>
          <p>We do NOT:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Sell your personal information</li>
            <li>Share your phone number with third parties for marketing purposes</li>
            <li>Use your information for purposes unrelated to job applications</li>
          </ul>
        </Section>

        <Section title="Data Retention">
          <p>We retain your application data for up to 12 months to facilitate potential employment opportunities. You may request deletion of your data by contacting us at hello@orderandoperations.com.</p>
        </Section>

        <Section title="Data Security">
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        </Section>

        <Section title="Your Rights">
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Opt out of text messages at any time by replying STOP</li>
            <li>Request access to your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Request correction of inaccurate information</li>
          </ul>
          <p>To exercise these rights, contact us at hello@orderandoperations.com.</p>
        </Section>

        <Section title="Children's Privacy">
          <p>TextMyApp is not intended for use by individuals under 16 years of age. We do not knowingly collect information from children.</p>
        </Section>

        <Section title="Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a new "Last Updated" date.</p>
        </Section>

        <Section title="Contact Us">
          <p>Order and Operations Consulting LLC</p>
          <p>Email: <a href="mailto:hello@orderandoperations.com" className="text-accent hover:underline">hello@orderandoperations.com</a></p>
          <p>Website: <a href="https://textmyapp.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://textmyapp.com</a></p>
        </Section>

        <div className="flex gap-6 pt-6 border-t border-slate-200 text-sm">
          <Link href="/apply" className="text-foreground/50 hover:text-accent transition-colors">How to Apply</Link>
          <Link href="/terms-conditions" className="text-foreground/50 hover:text-accent transition-colors">Terms & Conditions</Link>
        </div>

      </main>
    </div>
  );
}
