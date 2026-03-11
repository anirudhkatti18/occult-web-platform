import React from 'react';

export default function Home() {
  return (
    <div className="bg-[#050505] text-slate-100 min-h-screen flex flex-col font-sans">
      <div className="bg-noise"></div>
      
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center py-6 px-6 relative z-10">
        <div className="flex items-center gap-2">
          <img src="/logos/occult-logo.svg" alt="Occult Logo" className="h-8 md:h-10 w-auto object-contain" />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300 uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="hover:text-primary transition-colors">Work</a>
          <a href="#" className="hover:text-primary transition-colors">Services</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        {/* Mobile Menu Button Placeholder */}
        <button className="md:hidden material-symbols-outlined text-slate-100 text-2xl">menu</button>
      </header>
      
      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-6 relative z-10 flex-1 flex flex-col">
        
        {/* Brutalist Hero Section */}
        <section className="flex flex-col justify-center py-32 md:py-48 lg:py-64 text-left">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-white/10 mb-10 self-start bg-black/50">
            <span className="w-2 h-2 rounded-none bg-primary animate-pulse"></span>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400">Engineered Growth Firm</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter text-white mb-12 max-w-6xl">
            We Don't Just Advise. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-300 to-primary/80">We Engineer Growth.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-16 font-light">
            Occult is an engineered growth firm bridging the gap between massive market visibility and intelligent backend operations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-primary hover:bg-white hover:text-black text-black font-bold py-5 px-12 rounded-none transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_0_40px_rgba(0,229,255,0.2)] hover:shadow-none">
              Initialize Strategy
            </button>
            <button className="bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl hover:bg-white/10 text-white font-bold py-5 px-12 rounded-none transition-all duration-300 uppercase tracking-widest text-sm">
              Explore Our Models
            </button>
          </div>
        </section>

        {/* Logo Ticker */}
        <section className="py-20 border-y border-white/10 overflow-hidden relative mb-32 lg:mb-48">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
          
          <div className="flex items-center justify-center gap-16 md:gap-32 opacity-40 hover:opacity-100 saturate-0 hover:saturate-100 transition-all duration-700">
            <img src="/logos/occult-logo.svg" alt="Client Logo 1" className="h-8 md:h-10 w-auto object-contain" />
            <img src="/logos/occult-logo.svg" alt="Client Logo 2" className="h-8 md:h-10 w-auto object-contain" />
            <img src="/logos/occult-logo.svg" alt="Client Logo 3" className="h-8 md:h-10 w-auto object-contain" />
            <img src="/logos/occult-logo.svg" alt="Client Logo 4" className="h-8 md:h-10 w-auto object-contain" />
            <img src="/logos/occult-logo.svg" alt="Client Logo 5" className="h-8 md:h-10 w-auto object-contain hidden md:block" />
          </div>
        </section>

        {/* Asymmetrical Capabilities Content Block */}
        <section className="pb-32">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase">Framework</h2>
            <div className="h-1 w-24 bg-primary rounded-none"></div>
            <p className="text-slate-400 max-w-lg mt-8 text-lg font-light leading-relaxed">
              We deploy full-spectrum, structural strategies that scale enterprises synchronously on all technological fronts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4">
            
            {/* Block 1: Commanding Visibility (8 columns) */}
            <div className="md:col-span-8 bg-white/5 border border-white/[0.08] backdrop-blur-xl rounded-none relative overflow-hidden group hover:bg-white/10 transition-all duration-700 p-12 md:p-16 flex flex-col h-full min-h-[400px] hover:border-primary/50">
              
              <div className="mb-8 relative z-10 border border-white/20 p-4 inline-flex items-center justify-center self-start bg-black/40 group-hover:border-primary/50 transition-colors duration-500">
                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors text-3xl">visibility</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight relative z-10">Commanding<br/>Visibility</h3>
              <p className="text-slate-400 text-lg leading-relaxed flex-1 max-w-xl relative z-10 font-light">
                We engineer high-converting campaigns that drive massive, targeted traffic. From precision social media execution to large-scale promotional rollouts, we capture the market's attention with calculated authority.
              </p>
              <div className="mt-12 flex items-center gap-4 text-white group-hover:text-primary text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 relative z-10 cursor-pointer w-fit">
                Initialize Sequence <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>

            {/* Block 2: Intelligent Automation (4 columns) */}
            <div className="md:col-span-4 bg-white/5 border border-white/[0.08] backdrop-blur-xl rounded-none relative overflow-hidden group hover:bg-white/10 transition-all duration-700 p-10 md:p-12 flex flex-col h-full min-h-[400px] hover:border-primary/50">
              <div className="mb-8 relative z-10 border border-white/20 p-4 inline-flex items-center justify-center self-start bg-black/40 group-hover:border-primary/50 transition-colors duration-500">
                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors text-3xl">memory</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight relative z-10">Intelligent<br/>Automation</h3>
              <p className="text-slate-400 text-base leading-relaxed flex-1 relative z-10 font-light">
                Traffic is a liability if your backend can't process it. We build bespoke AI systems that instantly qualify inquiries, route leads, and execute logic automatically.
              </p>
              <div className="mt-12 flex items-center gap-4 text-white group-hover:text-primary text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 relative z-10 cursor-pointer w-fit">
                Deploy <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>

            {/* Block 3: Engineered Intelligence (12 columns) */}
            <div className="md:col-span-12 bg-white/5 border border-white/[0.08] backdrop-blur-xl rounded-none relative overflow-hidden group hover:bg-white/10 transition-all duration-700 hover:border-primary/50 p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center gap-12 mt-4">
              <div className="flex-1 relative z-10">
                <div className="mb-8 border border-white/20 p-4 inline-flex items-center justify-center self-start bg-black/40 group-hover:border-primary/50 transition-colors duration-500">
                  <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors text-3xl">psychology</span>
                </div>
                <h3 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">Engineered Intelligence</h3>
                <div className="h-px w-full bg-white/10 my-8"></div>
                <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-3xl font-light">
                  We don't guess; we build. Our in-house development team constructs custom data pipelines and robust backend architectures to turn your raw data into strategic leverage at scale.
                </p>
              </div>

              <div className="relative z-10 md:text-right shrink-0 mt-8 md:mt-0">
                 <div className="flex items-center md:justify-end gap-4 text-white group-hover:text-primary text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 cursor-pointer">
                  Analyze Infrastructure <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-white/10 py-16 px-6 mt-auto z-10 relative">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">
          <div className="flex items-center gap-4">
             <img src="/logos/occult-logo.svg" alt="Occult" className="h-4 w-auto object-contain opacity-50 grayscale" />
          </div>
          <p>&copy; {new Date().getFullYear()} OCCULT. STRUCTURAL LEVERAGE.</p>
        </div>
      </footer>
    </div>
  );
}
