import React from 'react';

export default function Home() {
  return (
    <div className="noise-bg bg-[#000000] text-slate-100 min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center py-6 px-6 relative z-10">
        <div className="flex items-center gap-2">
          <img src="/logos/occult-logo.svg" alt="Occult Logo" className="h-8 md:h-10 w-auto object-contain" />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </nav>
        {/* Mobile Menu Button Placeholder */}
        <button className="md:hidden material-symbols-outlined text-slate-100 text-2xl">menu</button>
      </header>
      
      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-6 relative z-10 flex-1 flex flex-col">
        
        {/* Massive Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-24 md:py-32 lg:py-40">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-card mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary">Engineered Growth Firm</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-white mb-8 max-w-5xl mx-auto">
            We Don't Just Advise. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-white">We Engineer Growth.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Occult is an engineered growth firm bridging the gap between massive market visibility and intelligent backend operations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-primary hover:bg-white hover:text-black text-black font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(0,229,255,0.4)]">
              Initialize Strategy
            </button>
            <button className="glass-card hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300">
              Explore Our Models
            </button>
          </div>
        </section>

        {/* Logo Ticker */}
        <section className="py-12 border-y border-white/5 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <div className="flex items-center justify-center gap-12 md:gap-24 opacity-50 saturate-0 hover:saturate-100 transition-all duration-500">
            {/* Using uploaded Occult Logo SVG */}
            <img src="/logos/occult-logo.svg" alt="Client Logo 1" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/logos/occult-logo.svg" alt="Client Logo 2" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/logos/occult-logo.svg" alt="Client Logo 3" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/logos/occult-logo.svg" alt="Client Logo 4" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/logos/occult-logo.svg" alt="Client Logo 5" className="h-8 md:h-12 w-auto object-contain hidden md:block" />
          </div>
        </section>

        {/* Capabilities Grid (The 3 Pillars) */}
        <section className="py-24 md:py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">Core Capabilities</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            <p className="text-slate-400 max-w-md text-sm md:text-base">
              We deploy full-spectrum, integrated strategies that scale businesses synchronously on all fronts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-card p-10 rounded-2xl group hover:border-primary/50 hover:bg-white/10 transition-all duration-500 flex flex-col h-full">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Commanding Visibility</h3>
              <p className="text-slate-400 leading-relaxed flex-1">
                We engineer high-converting campaigns that drive massive, targeted traffic. From precision social media execution to large-scale promotional rollouts, we capture the market's attention.
              </p>
              <div className="mt-8 flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                Execute <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-10 rounded-2xl group hover:border-primary/50 hover:bg-white/10 transition-all duration-500 flex flex-col h-full">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-primary text-3xl">memory</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent Automation</h3>
              <p className="text-slate-400 leading-relaxed flex-1">
                Traffic is a liability if your backend can't process it. We build bespoke AI systems that instantly qualify inquiries, route leads, and handle repetitive operational tasks.
              </p>
              <div className="mt-8 flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                Automate <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-10 rounded-2xl group hover:border-primary/50 hover:bg-white/10 transition-all duration-500 flex flex-col h-full">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Engineered Intelligence</h3>
              <p className="text-slate-400 leading-relaxed flex-1">
                We don't guess; we build. Our in-house development team constructs custom data pipelines and robust backend architectures to turn your raw data into strategic leverage.
              </p>
              <div className="mt-8 flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                Analyze <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Placeholder */}
      <footer className="border-t border-white/5 py-12 text-center text-slate-500 text-sm mt-auto z-10 relative">
        <p>&copy; {new Date().getFullYear()} Occult. All rights reserved.</p>
      </footer>
    </div>
  );
}
