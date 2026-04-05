import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/images/textmyapp-logo.png";

export default function Apply() {
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

        <h1 className="text-4xl font-bold font-heading text-primary mb-2">How to Apply for Jobs with TextMyApp</h1>
        <p className="text-foreground/60 mb-10">Applying for a job has never been easier — no apps, no forms, just text.</p>

        {/* Steps */}
        <div className="space-y-6 mb-12">
          {[
            { step: "1", title: "Get your application code from an employer", desc: "You'll find it on job postings, flyers, or the employer's website." },
            { step: "2", title: "Text your code to (888) 808-3231", desc: "Send your application code as a text message to our number." },
            { step: "3", title: "Answer a few simple questions via text", desc: "Our AI will guide you through the application in your preferred language — no app download required." },
            { step: "4", title: "Your application is sent directly to the employer", desc: "That's it! The employer receives your completed application automatically." }
          ].map((item) => (
            <div key={item.step} className="flex gap-5 p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg font-heading shadow shadow-accent/20">
                {item.step}
              </div>
              <div className="pt-1">
                <h3 className="text-base font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Example */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-bold font-heading text-primary">Example</h2>
          </div>
          <p className="text-foreground/70 text-sm leading-relaxed">
            If your code is <strong className="text-primary">APP001</strong>, text <strong className="text-accent">"APP001"</strong> to <strong className="text-primary">(888) 808-3231</strong>
          </p>
        </div>

        {/* SMS Consent */}
        <div className="border border-slate-200 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold font-heading text-primary mb-4">SMS Consent & Disclosures</h2>
          <p className="text-foreground/70 text-sm leading-relaxed mb-4">
            By texting your application code to our number, you consent to receive recurring text messages about job opportunities from TextMyApp.
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Message frequency varies based on your application (typically 5–10 messages).",
              "Message and data rates may apply.",
              "Reply STOP at any time to opt out.",
              "Reply HELP for assistance.",
              "Carrier support is not available for this service."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/70">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Questions */}
        <div className="text-center">
          <p className="text-foreground/60 text-sm mb-3">Questions?</p>
          <a href="mailto:hello@orderandoperations.com" className="text-accent font-semibold hover:underline">
            hello@orderandoperations.com
          </a>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <Link href="/privacy-policy" className="text-foreground/50 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="text-foreground/50 hover:text-accent transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </main>
    </div>
  );
}
