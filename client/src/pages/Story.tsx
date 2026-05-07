import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, LogIn, Menu, X } from "lucide-react";
import logoImage from "@/assets/images/textmyapp-logo.png";

const SIGNUP_URL = "https://app.textmyapp.com/trial";
const LOGIN_URL = "https://app.textmyapp.com/login";
const FOUNDER_PHOTO = "https://blueclaw.tech/assets/DG_Headshot_2026_1778152185382-DkEKXtOq.png";

export default function Story() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">

      {/* ── Header ── */}
      <header className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/">
            <img src={logoImage} alt="TextMyApp" className="h-[60px] w-auto py-2 cursor-pointer" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#how-it-works" className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors">How It Works</Link>
            <Link href="/#benefits" className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors">Benefits</Link>
            <Link href="/story" className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors">Story</Link>
            <Link href="/#pricing" className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors">Pricing</Link>
            <a href={LOGIN_URL} className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors flex items-center gap-1.5">
              <LogIn className="w-4 h-4" />
              Login
            </a>
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold px-5 shadow" asChild>
              <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                <Rocket className="w-4 h-4 mr-2" />
                Start Free Trial
              </a>
            </Button>
          </nav>

          <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-4 flex flex-col gap-3">
            <Link href="/#how-it-works" className="text-left text-foreground/80 font-medium py-2 border-b border-slate-100">How It Works</Link>
            <Link href="/#benefits" className="text-left text-foreground/80 font-medium py-2 border-b border-slate-100">Benefits</Link>
            <Link href="/story" className="text-left text-foreground/80 font-medium py-2 border-b border-slate-100">Story</Link>
            <Link href="/#pricing" className="text-left text-foreground/80 font-medium py-2 border-b border-slate-100">Pricing</Link>
            <a href={LOGIN_URL} className="text-foreground/80 font-medium py-2 border-b border-slate-100 flex items-center gap-2">
              <LogIn className="w-4 h-4" /> Login
            </a>
            <Button className="bg-accent hover:bg-accent/90 text-white w-full font-semibold mt-2" asChild>
              <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                <Rocket className="w-4 h-4 mr-2" />
                Start Free Trial
              </a>
            </Button>
          </div>
        )}
      </header>

      {/* ── Section 1: Hero ── */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col items-center text-center">
          <div className="w-[280px] h-[280px] rounded-xl overflow-hidden border-l-4 border-accent shadow-lg mb-8">
            <img
              src={FOUNDER_PHOTO}
              alt="Darcie Gregoire, Founder of TextMyApp"
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 15%" }}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4 leading-tight">
            Why I built TextMyApp
          </h1>
          <p className="text-lg text-[#4A6274]">
            Darcie Gregoire, SPHR, SHRM-SCP &nbsp;·&nbsp; Founder
          </p>
        </div>
      </section>

      {/* ── Section 2: Full Bio ── */}
      <section className="py-16 bg-[#EDF2F6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-6 text-[#4A6274] text-lg leading-[1.7]">
            <p>
              I spent years as a Department of Labor Wage & Hour investigator reviewing certified payroll for construction projects. Then I ran HR for a construction company — multi-state compliance, hiring pipelines, and the operational chaos of scaling a blue-collar workforce.
            </p>
            <p>
              I watched great candidates disappear into broken application funnels. Workers who'd be perfect for the job — but wouldn't fight through a 12-field web form on a phone in a parking lot. Spanish speakers blocked by English-only portals. QR codes that scanned but never converted.
            </p>
            <p>
              So I built the tool I wished existed when I was sitting on the other side of the desk. TextMyApp is the application flow I would have killed for.
            </p>
            <p>
              If you're hiring in the trades right now, I'd love to hear what's working and what's not — text or email me anytime.
            </p>
          </div>
          <p className="text-right italic text-primary font-medium mt-8 text-lg">— Darcie</p>
        </div>
      </section>

      {/* ── Section 3: What we're building + Contact ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-bold font-heading text-primary mb-4">What we're building</h2>
          <p className="text-[#4A6274] text-lg leading-[1.7] mb-10">
            TextMyApp is the first product from BlueClaw, a venture studio building AI-powered tools for blue-collar industries. Our second product, PayrollProof, helps construction companies generate compliant WH-347 certified payroll reports in minutes. The mission is simple: ship real tools for the people who build the real world.
          </p>

          <h3 className="text-lg font-semibold text-primary mb-4">Get in touch</h3>
          <div className="space-y-2 text-base">
            <div>
              <a href="mailto:darcie@textmyapp.com" className="text-accent font-semibold hover:underline">
                darcie@textmyapp.com
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/darciegregoire/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
                linkedin.com/in/darciegregoire
              </a>
            </div>
            <div>
              <a href="https://blueclaw.tech" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
                blueclaw.tech
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-5">Ready to see it in action?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-4">
            Start your free 14-day trial — no credit card, cancel anytime.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg h-14 px-10 font-bold shadow-xl mt-4" asChild>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
              <Rocket className="w-5 h-5 mr-2" />
              Start Free 14-Day Trial
            </a>
          </Button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-white border-t border-slate-200 py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs text-foreground/50">
            <span>&copy; 2026 BlueClaw LLC. All rights reserved. &nbsp;&middot;&nbsp; TextMyApp is a BlueClaw company.</span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <a href="mailto:support@textmyapp.com" className="hover:text-accent transition-colors">support@textmyapp.com</a>
              <Link href="/apply" className="hover:text-accent transition-colors">How to Apply</Link>
              <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-accent transition-colors">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
