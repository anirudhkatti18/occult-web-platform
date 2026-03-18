import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-slate-100 flex flex-col font-sans">
      <div className="bg-noise"></div>


      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-6 relative z-10 flex-1 flex flex-col">

        {/* Brutalist Hero Section */}
        <section className="flex flex-col justify-center pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-32 lg:pb-32 text-left">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-white/10 mb-10 self-start bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-none bg-primary animate-pulse"></span>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400">Engineered Growth Firm</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tighter text-white mb-12 max-w-6xl">
            We Don't Just Advise. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-300 to-primary/80">We Engineer Growth.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-16 font-light">
            Visibility without infrastructure is a liability. Occult bridges the gap between massive market attention and hardcore backend operations. No standard agency fluff—just deployable growth architectures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto text-center text-xs md:text-sm bg-primary hover:bg-white hover:text-black text-black font-bold py-5 px-12 rounded-none transition-all duration-300 uppercase tracking-widest shadow-[0_0_40px_rgba(0,229,255,0.2)] hover:shadow-none">
              Initialize Strategy
            </Link>
            <Link href="/services" className="w-full sm:w-auto text-center text-xs md:text-sm bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl hover:bg-white/10 text-white font-bold py-5 px-12 rounded-none transition-all duration-300 uppercase tracking-widest">
              Explore Our Models
            </Link>
          </div>
        </section>

        {/* Powered By Industry Leaders */}
        <section className="py-10 border-y border-white/10 relative mb-16 lg:mb-24">
          <p className="text-center font-semibold text-xs text-gray-500 uppercase tracking-widest mb-8">POWERED BY INDUSTRY LEADERS</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {[
              { src: "/logos/google-ar21.svg", alt: "Google" },
              { src: "/logos/aistudio-text.svg", alt: "Google AI Studio", className: "brightness-0 invert opacity-90" },
              { src: "/logos/claude-color.svg", alt: "Claude AI Icon" },
              { src: "/logos/claude-text.svg", alt: "Claude AI Text", className: "brightness-0 invert opacity-90" },
              { src: "/logos/Meta_Platforms_Inc._logo.svg", alt: "Meta" },
              { src: "/logos/amazon-prime-icon.svg", alt: "Amazon Prime" },
              { src: "/logos/canva-icon.svg", alt: "Canva" }
            ].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={50}
                className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 hover:scale-105 ${logo.className || 'opacity-80 hover:opacity-100'}`}
              />
            ))}

          </div>
        </section>

        {/* Strategic DNA */}
        <section className="py-24 mb-16 lg:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Engineered from the Ground Up.
              </h2>
            </div>
            <div>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our foundation isn't built on standard advertising. It is rooted in advanced R&D, open-source intelligence (OSINT), and high-stakes cultural execution. We don't guess. We apply rigorous, systems-level engineering to business growth—building the engines that allow your enterprise to scale without fracturing.
              </p>
            </div>
          </div>
        </section>

        {/* Asymmetrical Capabilities Content Block */}
        <section className="pb-16">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase break-words hyphens-auto">Framework</h2>
            <div className="h-1 w-24 bg-primary rounded-none"></div>
            <p className="text-slate-400 max-w-lg mt-8 text-lg font-light leading-relaxed">
              We deploy full-spectrum, structural strategies that scale enterprises synchronously on all technological fronts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4">

            {/* Block 1: Commanding Visibility (8 columns) */}
            <Link href="/services" className="md:col-span-8 bg-white/5 border border-white/[0.08] backdrop-blur-xl rounded-none relative overflow-hidden p-6 md:p-10 lg:p-12 flex flex-col h-full min-h-[400px] transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-[linear-gradient(to_top,rgba(14,165,233,0.4)_0%,rgba(255,255,255,0.05)_80%)] hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] group">

              <div className="mb-8 relative z-10 border border-white/20 p-4 inline-flex items-center justify-center self-start bg-white/5 backdrop-blur-sm group-hover:border-primary/50 transition-colors duration-500">
                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors text-3xl">visibility</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight relative z-10">Commanding<br />Visibility</h3>
              <p className="text-slate-400 text-lg leading-relaxed flex-1 max-w-xl relative z-10 font-light">
                Attention is raw material. We execute massive, multi-platform promotional strategies. From engineering pan-India theatrical rollouts to precision digital targeting, we capture cultural attention and drive high-intent traffic at scale.
              </p>
              <div className="mt-12 flex items-center gap-4 text-white group-hover:text-primary text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 relative z-10 cursor-pointer w-fit">
                Initialize Sequence <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </Link>

            {/* Block 2: Intelligent Automation (4 columns) */}
            <Link href="/services" className="md:col-span-4 bg-white/5 border border-white/[0.08] backdrop-blur-xl rounded-none relative overflow-hidden p-6 md:p-10 lg:p-12 flex flex-col h-full min-h-[400px] transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-[linear-gradient(to_top,rgba(14,165,233,0.4)_0%,rgba(255,255,255,0.05)_80%)] hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] group">
              <div className="mb-8 relative z-10 border border-white/20 p-4 inline-flex items-center justify-center self-start bg-white/5 backdrop-blur-sm group-hover:border-primary/50 transition-colors duration-500">
                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors text-3xl">memory</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight relative z-10">Intelligent<br />Automation</h3>
              <p className="text-slate-400 text-base leading-relaxed flex-1 relative z-10 font-light">
                Traffic is useless if your backend crashes. We hardcode bespoke AI systems using tools like n8n and Google Cloud Workflows. Our custom agents engage, qualify, and route leads the second they enter the ecosystem—without human delay.
              </p>
              <div className="mt-12 flex items-center gap-4 text-white group-hover:text-primary text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 relative z-10 cursor-pointer w-fit">
                Deploy <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </Link>

            {/* Block 3: Engineered Intelligence (12 columns) */}
            <Link href="/services" className="md:col-span-12 bg-white/5 border border-white/[0.08] backdrop-blur-xl rounded-none relative overflow-hidden p-6 md:p-10 lg:p-12 flex flex-col md:flex-row items-start md:items-center gap-12 mt-4 transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-[linear-gradient(to_top,rgba(14,165,233,0.4)_0%,rgba(255,255,255,0.05)_80%)] hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] group">
              <div className="flex-1 relative z-10">
                <div className="mb-8 border border-white/20 p-4 inline-flex items-center justify-center self-start bg-white/5 backdrop-blur-sm group-hover:border-primary/50 transition-colors duration-500">
                  <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors text-3xl">psychology</span>
                </div>
                <h3 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">Engineered Intelligence</h3>
                <div className="h-px w-full bg-white/10 my-8"></div>
                <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-3xl font-light">
                  We digitize legacy workflows and construct proprietary data pipelines. We turn raw market data into actionable intelligence, providing the structural leverage required for actual enterprise scale.
                </p>
              </div>

              <div className="relative z-10 md:text-right shrink-0 mt-8 md:mt-0">
                <div className="flex items-center md:justify-end gap-4 text-white group-hover:text-primary text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 cursor-pointer">
                  Analyze Infrastructure <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>

          </div>
        </section>
      </main>

    </div>
  );
}
