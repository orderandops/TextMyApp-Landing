import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, 
  Smartphone, 
  Clock, 
  Database, 
  Users, 
  Globe2, 
  Zap, 
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

// Using the generated image
import heroWorkerImage from "@/assets/images/hero-worker.png";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <MessageSquare className="text-white w-5 h-5" />
            </div>
            <span className={`font-heading font-bold text-xl tracking-tight ${isScrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
              TextMyApp
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('how-it-works')} className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-foreground/80' : 'text-white/90'}`}>How It Works</button>
            <button onClick={() => scrollToSection('benefits')} className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-foreground/80' : 'text-white/90'}`}>Benefits</button>
            <button onClick={() => scrollToSection('pricing')} className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-foreground/80' : 'text-white/90'}`}>Pricing</button>
            
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6" 
              onClick={() => scrollToSection('signup-section')}
              data-testid="button-nav-cta"
            >
              Sign-up Now
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-foreground' : 'text-primary'} />
            ) : (
              <Menu className={isScrolled ? 'text-foreground' : 'text-primary'} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('how-it-works')} className="text-left text-foreground/80 font-medium py-2">How It Works</button>
            <button onClick={() => scrollToSection('benefits')} className="text-left text-foreground/80 font-medium py-2">Benefits</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left text-foreground/80 font-medium py-2">Pricing</button>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full font-semibold mt-2"
              onClick={() => scrollToSection('signup-section')}
            >
              Sign-up Now
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex-1 flex items-center">
        {/* Background elements */}
        <div className="absolute inset-0 bg-primary z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-slate-900 opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text */}
            <div className="text-white max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
                Built for Construction, Trades & Manufacturing
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] mb-6 tracking-tight">
                Hire faster.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-300">Just text.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-xl">
                The only text-to-apply that actually completes the application—<span className="font-semibold text-white">no links, no forms, no drop-off.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-14 px-8 font-semibold shadow-lg shadow-accent/20" 
                  onClick={() => scrollToSection('signup-section')}
                  data-testid="button-hero-primary"
                >
                  Sign-up Now
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white text-lg h-14 px-8 font-medium backdrop-blur-sm"
                  onClick={() => scrollToSection('how-it-works')}
                  data-testid="button-hero-secondary"
                >
                  See How It Works
                </Button>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-white/60">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-300 border-2 border-primary flex items-center justify-center text-xs font-bold text-slate-700">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p>Join 500+ companies already signing up</p>
              </div>
            </div>
            
            {/* Hero Image / Illustration */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200 lg:ml-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform md:rotate-2 hover:rotate-0 transition-transform duration-500 max-w-lg mx-auto">
                <img 
                  src={heroWorkerImage} 
                  alt="Construction worker texting on a smartphone at a job site" 
                  className="w-full h-auto object-cover object-center aspect-[4/3] sm:aspect-video"
                />
                
                {/* Overlay UI element */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-border animate-in slide-in-from-bottom-10 fade-in duration-700 delay-500 max-w-xs z-20">
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full mt-1">
                      <MessageSquare className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Incoming Application</p>
                      <p className="text-sm font-semibold text-foreground">Juan just completed the WELDER application via text.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-secondary/30 blur-[100px] rounded-full z-[-1]"></div>
              <div className="absolute top-1/4 right-1/4 w-full h-full max-w-xs bg-accent/20 blur-[80px] rounded-full z-[-1]"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Hiring is harder than ever.</h2>
            <p className="text-lg text-muted-foreground">Traditional application processes are broken for blue-collar, trades, and manufacturing workers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Smartphone className="w-8 h-8 text-destructive" />,
                title: "Massive Drop-off",
                desc: "Workers won't complete clunky online job applications or long web forms."
              },
              {
                icon: <Clock className="w-8 h-8 text-destructive" />,
                title: "QR Code Friction",
                desc: "Paper apps and 'call to apply' flyers lead nowhere, while QR codes that point to forms see 80% abandonment."
              },
              {
                icon: <Globe2 className="w-8 h-8 text-destructive" />,
                title: "Language Barriers",
                desc: "Non-English speakers face insurmountable hurdles on standard English-only job boards."
              },
              {
                icon: <Zap className="w-8 h-8 text-destructive" />,
                title: "Expensive Delays",
                desc: "Every unfilled position costs you $300-$500+ per day in project delays and lost productivity."
              }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution (How It Works) */}
      <section id="how-it-works" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6 uppercase tracking-wider">
                The Solution
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
                Complete applications via natural SMS conversation.
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Workers simply text a job code to your dedicated number. They complete the entire application through an AI-powered text chat—in English, Spanish, or other languages. No app to download.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Create a Job Code",
                    desc: "Set up a unique keyword for each role (e.g., text LABOR123 to 555-123-4567). Put it on signs, trucks, and flyers."
                  },
                  {
                    step: "2",
                    title: "Workers Text to Apply",
                    desc: "They text your code and immediately start a guided application via SMS in their preferred language."
                  },
                  {
                    step: "3",
                    title: "Applications Land in Your ATS",
                    desc: "Candidate info, experience, and answers sync automatically. No manual data entry required."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl font-heading shadow-md shadow-primary/20">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Phone Mockup Illustration */}
            <div className="relative mx-auto w-full max-w-[320px] lg:max-w-md">
              {/* Phone Frame */}
              <div className="relative z-10 bg-slate-900 rounded-[3rem] p-4 shadow-2xl border-4 border-slate-800 h-[600px] flex flex-col">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-3xl w-40 mx-auto"></div>
                
                {/* Screen */}
                <div className="bg-white flex-1 rounded-[2rem] overflow-hidden flex flex-col relative">
                  {/* Header */}
                  <div className="bg-slate-100 px-4 pt-8 pb-3 border-b flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                        <span className="font-bold text-xs">AC</span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold">Apex Construction</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Area */}
                  <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4 flex flex-col">
                    <div className="self-end bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 text-sm shadow-sm max-w-[80%]">
                      WELDER123
                    </div>
                    
                    <div className="self-start bg-white border rounded-2xl rounded-tl-sm px-4 py-3 text-sm shadow-sm max-w-[85%]">
                      <p>Hi! Thanks for your interest in the Welder position at Apex Construction. Do you prefer to continue in English or Spanish?</p>
                      <p className="text-xs text-muted-foreground mt-1">Reply EN for English or ES for Spanish</p>
                    </div>
                    
                    <div className="self-end bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 text-sm shadow-sm max-w-[80%]">
                      ES
                    </div>
                    
                    <div className="self-start bg-white border rounded-2xl rounded-tl-sm px-4 py-3 text-sm shadow-sm max-w-[85%]">
                      <p>¡Perfecto! ¿Cuál es su nombre completo?</p>
                    </div>
                    
                    <div className="self-end bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 text-sm shadow-sm max-w-[80%]">
                      Juan Rodriguez
                    </div>
                    
                    <div className="self-start bg-white border rounded-2xl rounded-tl-sm px-4 py-3 text-sm shadow-sm max-w-[85%]">
                      <p>Gracias Juan. ¿Cuántos años de experiencia tiene como soldador?</p>
                    </div>
                  </div>
                  
                  {/* Input Area */}
                  <div className="p-3 bg-slate-100 border-t flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-400">+</div>
                    <div className="flex-1 bg-white border rounded-full h-8 px-3 text-xs flex items-center text-slate-400">
                      Text Message
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[80px] rounded-full z-0"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Why top contractors and manufacturers choose us</h2>
            <p className="text-lg text-muted-foreground">Eliminate hiring friction and fill positions with qualified workers faster.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Capture More Candidates",
                desc: "Reach the 80% of workers who abandon traditional online forms before finishing."
              },
              {
                icon: <Globe2 className="w-6 h-6" />,
                title: "Remove Language Barriers",
                desc: "Our AI naturally handles English and Spanish (with more languages coming soon!), opening up a massive untapped talent pool."
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Fill Roles Faster",
                desc: "Candidates complete applications in minutes from their job site, not days later from a computer."
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Works With Your ATS",
                desc: "Integrates seamlessly with your existing applicant tracking system. No new software to learn."
              }
            ].map((benefit, i) => (
              <div key={i} className="flex gap-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Trust */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">Built for the Trades</h3>
              <p className="text-white/80">Specifically designed for construction, manufacturing, HVAC, plumbing, and electrical hiring.</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">TCPA-Compliant</h3>
              <p className="text-white/80">Carrier-registered messaging ensures your messages get delivered securely.</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">30-Day Guarantee</h3>
              <p className="text-white/80">Try risk-free. If you don't hire faster, get your money back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-amber-700 font-bold text-sm mb-4">
              Sign Up Pricing — 25% Off
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-muted-foreground">Monthly billing. Cancel anytime. 30-day money-back guarantee.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {/* Starter Tier */}
            <Card className="border-slate-200 shadow-sm mt-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-heading mb-2">Starter</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">$59</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground line-through mb-6">Normally $79/mo</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>2 job codes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>50 applications / month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>1 ATS integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full" 
                  data-testid="button-pricing-starter"
                  onClick={() => scrollToSection('signup-section')}
                >
                  Sign-up Now
                </Button>
              </CardContent>
            </Card>

            {/* Pro Tier */}
            <Card className="border-primary shadow-xl relative z-10 scale-105 bg-slate-900 text-white">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-full">
                Most Popular
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-heading mb-2">Pro</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">$112</span>
                  <span className="text-white/70">/mo</span>
                </div>
                <p className="text-sm text-white/50 line-through mb-6">Normally $149/mo</p>
                
                <ul className="space-y-4 mb-8 text-white/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>5 job codes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>150 applications / month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>2 ATS integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-semibold text-white">Multilingual (English/Spanish+)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>Priority support</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold" 
                  data-testid="button-pricing-pro"
                  onClick={() => scrollToSection('signup-section')}
                >
                  Sign-up Now
                </Button>
              </CardContent>
            </Card>

            {/* Business Tier */}
            <Card className="border-slate-200 shadow-sm mt-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-heading mb-2">Business</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">$224</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground line-through mb-6">Normally $299/mo</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>Unlimited job codes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>Unlimited applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>All ATS integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>Multilingual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>Phone support & custom onboarding</span>
                  </li>
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full" 
                  data-testid="button-pricing-business"
                  onClick={() => scrollToSection('signup-section')}
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA / Signup Section inline instead of popup */}
      <section id="signup-section" className="py-24 bg-gradient-to-br from-primary to-slate-900 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Stop losing candidates to clunky forms.</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Sign up today to get 25% off pricing and start filling your open roles faster.
          </p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-left">
            <h3 className="text-2xl font-bold font-heading text-foreground mb-6 text-center">Sign-up Now</h3>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <MessageSquare className="text-white w-3 h-3" />
                </div>
                <span className="font-heading font-bold text-lg text-white">TextMyApp</span>
              </div>
              <p className="text-sm max-w-xs mb-4">
                The only text-to-apply that actually completes the application—no links, no forms, no drop-off.
              </p>
              <p className="text-sm">A product by <strong className="text-slate-300">Order and Operations Consulting</strong></p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@orderandoperations.com" className="hover:text-white transition-colors">hello@orderandoperations.com</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 Order and Operations Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}