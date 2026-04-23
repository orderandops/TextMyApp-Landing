import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Smartphone,
  Clock,
  Database,
  Users,
  Globe2,
  Zap,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  Shield,
  BadgeCheck,
  CreditCard,
  LogIn,
  Rocket,
  PlayCircle
} from "lucide-react";
import heroWorkerImage from "@/assets/images/hero-worker.png";
import logoImage from "@/assets/images/textmyapp-logo.png";

const SIGNUP_URL = "https://app.textmyapp.com/trial";
const LOGIN_URL = "https://app.textmyapp.com/login";

function Logo() {
  return (
    <img src={logoImage} alt="TextMyApp" className="h-[150px] w-auto" />
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">

      {/* ── Header ── */}
      <header className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Logo />

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors">How It Works</button>
            <button onClick={() => scrollToSection("benefits")} className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors">Benefits</button>
            <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors">Pricing</button>
            <a href={LOGIN_URL} className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors flex items-center gap-1.5" data-testid="link-login">
              <LogIn className="w-4 h-4" />
              Login
            </a>
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold px-5 shadow" asChild data-testid="button-nav-cta">
              <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                <Rocket className="w-4 h-4 mr-2" />
                Start Free Trial
              </a>
            </Button>
          </nav>

          <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="button-mobile-menu">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection("how-it-works")} className="text-left text-foreground/80 font-medium py-2 border-b border-slate-100">How It Works</button>
            <button onClick={() => scrollToSection("benefits")} className="text-left text-foreground/80 font-medium py-2 border-b border-slate-100">Benefits</button>
            <button onClick={() => scrollToSection("pricing")} className="text-left text-foreground/80 font-medium py-2 border-b border-slate-100">Pricing</button>
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

      {/* ── Hero ── */}
      <section className="pt-[200px] pb-20 md:pt-[220px] md:pb-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left: copy */}
            <div className="max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                Built for Construction, Landscaping, Trades & Manufacturing
              </div>

              <h1 className="text-5xl md:text-6xl font-bold font-heading text-primary leading-[1.1] mb-6 tracking-tight">
                Hire faster.<br />
                <span className="text-accent">Just text.</span>
              </h1>

              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                The only text-to-apply that actually completes the application — <strong className="text-foreground">no links, no forms, no drop-off.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-base h-13 px-8 font-bold shadow-lg shadow-accent/20" asChild data-testid="button-hero-primary">
                  <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Free 14-Day Trial
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 text-base h-13 px-8 font-medium" onClick={() => (window as any).Supademo?.open('cmobjoexe0068zp0jx8npv94d')} data-testid="button-hero-demo">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Try the Interactive Demo
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-5 mt-10 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <BadgeCheck className="w-4 h-4 text-accent" />
                  TCPA-Compliant
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <CreditCard className="w-4 h-4 text-accent" />
                  No credit card needed
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Zap className="w-4 h-4 text-accent" />
                  No app required
                </div>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="relative animate-in fade-in slide-in-from-right-6 duration-700 delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 max-w-lg mx-auto">
                <img
                  src={heroWorkerImage}
                  alt="Construction worker texting on a smartphone at a job site"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Hiring is broken for blue-collar workers.</h2>
            <p className="text-lg text-foreground/60">Traditional application processes lose great candidates before they even start.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Smartphone className="w-7 h-7 text-accent" />, title: "Massive Drop-off", desc: "Workers won't complete clunky online job applications or long web forms." },
              { icon: <Clock className="w-7 h-7 text-accent" />, title: "QR Code Friction", desc: "QR codes pointing to forms see 80%+ abandonment before completion." },
              { icon: <Globe2 className="w-7 h-7 text-accent" />, title: "Language Barriers", desc: "Non-English speakers face insurmountable hurdles on English-only platforms." },
              { icon: <Zap className="w-7 h-7 text-accent" />, title: "Costly Delays", desc: "Every unfilled position costs $300–$500+ per day in lost productivity." }
            ].map((item, i) => (
              <Card key={i} className="border border-slate-200 shadow-sm hover:shadow-md hover:border-accent/30 transition-all bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-heading text-primary">{item.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
                How It Works
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 leading-tight">
                Complete applications via natural SMS conversation.
              </h2>
              <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
                Workers text a job code to your number and complete the entire application through an AI-powered text chat — in English, Spanish, or other languages. No app to download.
              </p>
              <div className="space-y-8">
                {[
                  { step: "1", title: "Your Number & Keyword Are Auto-Provisioned", desc: "TextMyApp instantly assigns you a phone number and a unique keyword for each application. Put them on job sites, flyers, trucks — workers text in from wherever they are." },
                  { step: "2", title: "Workers Text to Apply", desc: "They text your keyword and immediately start a guided application via SMS in their preferred language — no app, no link, no form." },
                  { step: "3", title: "Applications Land Where You Need Them", desc: "Export to Microsoft Excel, Google Sheets, your ATS, or another internal workflow. No manual data entry." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl font-heading shadow-md shadow-accent/20">
                      {item.step}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-bold font-heading text-primary mb-1">{item.title}</h3>
                      <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative mx-auto w-full max-w-[300px] lg:max-w-sm">
              <div className="relative z-10 bg-slate-900 rounded-[3rem] p-3.5 shadow-2xl border-4 border-slate-800 h-[580px] flex flex-col">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-3xl w-36 mx-auto z-20" />
                <div className="bg-white flex-1 rounded-[2.3rem] overflow-hidden flex flex-col">
                  <div className="bg-slate-100 px-4 pt-8 pb-3 border-b flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-xs">AC</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary">Apex Construction</p>
                      <p className="text-xs text-foreground/40">(888) 808-3231</p>
                    </div>
                  </div>
                  <div className="flex-1 p-3 bg-slate-50 space-y-3 flex flex-col overflow-hidden">
                    <div className="self-end bg-[#3B7DE9] text-white rounded-2xl rounded-tr-sm px-3.5 py-2 text-sm shadow-sm max-w-[78%]">
                      WELDER123
                    </div>
                    <div className="self-start bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-xs shadow-sm max-w-[85%]">
                      Hi! Thanks for your interest in the Welder position at Apex Construction. Do you prefer English or Spanish?
                      <p className="text-[10px] text-foreground/40 mt-1">Reply EN or ES</p>
                    </div>
                    <div className="self-end bg-[#3B7DE9] text-white rounded-2xl rounded-tr-sm px-3.5 py-2 text-sm shadow-sm max-w-[78%]">
                      ES
                    </div>
                    <div className="self-start bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-xs shadow-sm max-w-[85%]">
                      ¡Perfecto! ¿Cuál es su nombre completo?
                    </div>
                    <div className="self-end bg-[#3B7DE9] text-white rounded-2xl rounded-tr-sm px-3.5 py-2 text-sm shadow-sm max-w-[78%]">
                      Juan Rodriguez
                    </div>
                    <div className="self-start bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-xs shadow-sm max-w-[85%]">
                      Gracias Juan. ¿Cuántos años de experiencia tiene como soldador?
                    </div>
                    <div className="self-end bg-[#3B7DE9] text-white rounded-2xl rounded-tr-sm px-3.5 py-2 text-sm shadow-sm max-w-[78%]">
                      8 años
                    </div>
                    <div className="self-start bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-xs shadow-sm max-w-[85%]">
                      ¡Excelente! ✅ Su solicitud ha sido enviada a Apex Construction.
                    </div>
                  </div>
                  <div className="p-3 bg-slate-100 border-t flex items-center gap-2">
                    <div className="flex-1 bg-white border border-slate-200 rounded-full h-8 px-3 text-xs flex items-center text-slate-400">
                      Text Message
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-accent/10 blur-[80px] rounded-full z-0 scale-75" />
            </div>

          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section id="benefits" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Why top contractors and manufacturers choose us</h2>
            <p className="text-lg text-foreground/60">Eliminate hiring friction and fill positions with qualified workers faster.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Users className="w-6 h-6" />, title: "Capture More Candidates", desc: "Reach the 80% of workers who abandon traditional online forms before finishing." },
              { icon: <Globe2 className="w-6 h-6" />, title: "Remove Language Barriers", desc: "Our AI handles English and Spanish (with more languages coming soon!), opening up a massive untapped talent pool." },
              { icon: <Clock className="w-6 h-6" />, title: "Fill Roles Faster", desc: "Candidates complete applications in minutes from their job site, not days later from a computer." },
              { icon: <Database className="w-6 h-6" />, title: "Flexible Export & Integration", desc: "ATS integration capable — plus export to Microsoft Excel, Google Sheets, or your own internal workflow. No new software to learn." }
            ].map((benefit, i) => (
              <div key={i} className="flex gap-5 bg-white p-7 rounded-2xl border border-slate-200 hover:border-accent/40 hover:shadow-md transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-primary mb-1.5">{benefit.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-3">Native Integrations</h2>
            <p className="text-foreground/60">Connect TextMyApp directly to the tools your team already uses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Google Drive",
                desc: "Send completed applications directly to Google Sheets or Google Drive folders. Share with your team instantly.",
                logo: (
                  <svg className="w-10 h-10" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                    <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
                    <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                    <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                    <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
                    <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 27h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
                  </svg>
                )
              },
              {
                name: "Microsoft 365",
                desc: "Sync applications to Microsoft Excel or Teams channels. Works natively with your existing Microsoft environment.",
                logo: (
                  <svg className="w-10 h-10" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#f3f3f3" d="M0 0h23v23H0z"/>
                    <path fill="#f35325" d="M1 1h10v10H1z"/>
                    <path fill="#81bc06" d="M12 1h10v10H12z"/>
                    <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                    <path fill="#ffba08" d="M12 12h10v10H12z"/>
                  </svg>
                )
              },
              {
                name: "BambooHR",
                desc: "Push applicant data directly into BambooHR so your HR team can manage candidates without any extra steps.",

                logo: (
                  <div className="w-10 h-10 rounded-lg bg-[#73c41d] flex items-center justify-center">
                    <span className="text-white font-black text-sm font-heading">B</span>
                  </div>
                )
              }
            ].map((integration, i) => (
              <div key={i} className="relative flex flex-col gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-accent/30 hover:shadow-md transition-all">

                <div className="flex items-center gap-4">
                  {integration.logo}
                  <h3 className="text-lg font-bold font-heading text-primary">{integration.name}</h3>
                </div>
                <p className="text-foreground/60 text-sm leading-relaxed">{integration.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            {[
              { icon: <CheckCircle2 className="w-9 h-9 text-accent" />, title: "Built for the Trades", desc: "Specifically designed for construction, landscaping, manufacturing, HVAC, plumbing, and electrical hiring." },
              { icon: <Shield className="w-9 h-9 text-accent" />, title: "TCPA-Compliant", desc: "Carrier-registered messaging ensures your messages get delivered securely and legally." },
              { icon: <CreditCard className="w-9 h-9 text-accent" />, title: "No Credit Card Needed", desc: "Start your free 14-day trial instantly — no credit card required, cancel anytime." }
            ].map((item, i) => (
              <div key={i} className="p-6 flex flex-col items-center gap-3">
                {item.icon}
                <h3 className="text-lg font-bold font-heading">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm mb-4 uppercase tracking-wider">
              Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-2">Simple, Transparent Pricing</h2>
            <p className="text-lg text-foreground/60 mt-2">Save 20% with annual billing. Start free — no credit card needed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">

            {/* Starter */}
            <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-heading text-primary mb-2">Starter</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-bold text-accent">$79</span>
                  <span className="text-foreground/50 text-lg">/mo</span>
                </div>
                <p className="text-sm text-accent font-semibold mb-7">or $63/mo billed annually</p>
                <ul className="space-y-3 mb-8">
                  {["50 applications/month", "1 job", "1 team seat"].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/5 font-semibold" data-testid="button-pricing-starter" asChild>
                  <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">Start Free 14-Day Trial</a>
                </Button>
                <p className="text-center text-xs text-foreground/40 mt-3">No credit card needed</p>
              </CardContent>
            </Card>

            {/* Growth — Most Popular */}
            <Card className="border-2 border-accent shadow-xl relative z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white font-bold text-xs uppercase tracking-wider py-1.5 px-5 rounded-full shadow">
                Most Popular
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-heading text-primary mb-2">Growth</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-bold text-accent">$149</span>
                  <span className="text-foreground/50 text-lg">/mo</span>
                </div>
                <p className="text-sm text-accent font-semibold mb-7">or $119/mo billed annually</p>
                <ul className="space-y-3 mb-8">
                  {["150 applications/month", "3 jobs", "2 team seats"].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold shadow" data-testid="button-pricing-growth" asChild>
                  <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">Start Free 14-Day Trial</a>
                </Button>
                <p className="text-center text-xs text-foreground/40 mt-3">No credit card needed</p>
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-heading text-primary mb-2">Pro</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-bold text-accent">$299</span>
                  <span className="text-foreground/50 text-lg">/mo</span>
                </div>
                <p className="text-sm text-accent font-semibold mb-7">or $239/mo billed annually</p>
                <ul className="space-y-3 mb-8">
                  {["500 applications/month", "5 jobs", "5 team seats"].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/5 font-semibold" data-testid="button-pricing-pro" asChild>
                  <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">Start Free 14-Day Trial</a>
                </Button>
                <p className="text-center text-xs text-foreground/40 mt-3">No credit card needed</p>
              </CardContent>
            </Card>

          </div>

          <div className="max-w-5xl mx-auto mt-6 px-2">
            <p className="text-sm text-foreground/50">
              <strong className="text-foreground/70">Add-ons:</strong> Extra job or extra seat — $19/mo each &nbsp;·&nbsp; 50 extra applications/month — $49/mo
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="signup-section" className="py-24 bg-primary scroll-mt-20">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-5">Stop losing candidates to clunky forms.</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-4">
            Start your free 14-day trial today and fill your open roles faster.
          </p>
          <p className="text-white/50 text-sm mb-10">No credit card needed. Cancel anytime.</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg h-14 px-10 font-bold shadow-xl" asChild data-testid="button-bottom-cta">
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
            <span>&copy; 2026 Order and Operations Consulting. All rights reserved.</span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <a href="mailto:support@textmyapp.com" className="hover:text-accent transition-colors">support@textmyapp.com</a>
              <Link href="/apply" className="hover:text-accent transition-colors">How to Apply</Link>
              <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
