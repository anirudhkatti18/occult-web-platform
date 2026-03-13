import React from 'react';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col font-sans mb-32">
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-white max-w-5xl uppercase mb-8">
          Deployable Architectures.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
          We don't sell hours. We engineer, deploy, and scale comprehensive growth systems.
        </p>
      </section>

      {/* The Services Stack (Alternating Grid) */}
      <div className="flex flex-col gap-24 md:gap-32">

        {/* Section A: Commanding Visibility */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="lg:col-span-5 order-1 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">Commanding Visibility</h2>
            <div className="h-1 w-16 bg-primary rounded-none mb-6"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Attention is the raw material of growth. We orchestrate large-scale visibility, moving beyond standard ad buying to execute massive, multi-platform promotional strategies that capture cultural attention and drive high-intent traffic.
            </p>
          </div>
          <div className="lg:col-span-7 order-2 lg:order-2">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-none p-8 md:p-12 transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-white/10 hover:border-blue-500/50">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">The Arsenal</h3>
              <ul className="space-y-6 text-slate-300 font-mono text-sm md:text-base">
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">▹</span>
                  High-Volume Display & Search Strategies
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">▹</span>
                  Strategic Platform Partnerships
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">▹</span>
                  Large-Scale Promotional Rollouts
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section B: Intelligent Automation */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="lg:col-span-5 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">Intelligent Automation</h2>
            <div className="h-1 w-16 bg-primary rounded-none mb-6"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Traffic without processing is a bottleneck. We engineer bespoke AI systems designed to handle the load. From the moment a lead enters the ecosystem, our automated workflows take over—engaging, qualifying, and routing without human delay.
            </p>
          </div>
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-none p-8 md:p-12 transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-white/10 hover:border-blue-500/50">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">The Arsenal</h3>
              <ul className="space-y-6 text-slate-300 font-mono text-sm md:text-base">
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">▹</span>
                  Custom AI-Driven WhatsApp Sales Agents
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">▹</span>
                  Automated Lead Qualification Pipelines
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">▹</span>
                  Advanced Webhook & API Trigger Integrations
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section C: Engineered Intelligence */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
           <div className="lg:col-span-5 order-1 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">Engineered Intelligence</h2>
            <div className="h-1 w-16 bg-primary rounded-none mb-6"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              We build the foundational infrastructure that standard marketing agencies cannot touch. Our in-house developers digitize legacy workflows and construct the operational pipelines necessary for actual scale.
            </p>
          </div>
          <div className="lg:col-span-7 order-2 lg:order-2">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-none p-8 md:p-12 transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-white/10 hover:border-blue-500/50">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">The Arsenal</h3>
              <ul className="space-y-6 text-slate-300 font-mono text-sm md:text-base">
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">▹</span>
                  Legacy Workflow Digitization
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">▹</span>
                  Custom CRM & Database Syncing
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">▹</span>
                  Proprietary Backend Architectures
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      {/* Call to Action (The Kicker) */}
      <section className="mt-32 border border-white/10 bg-black/40 p-12 md:p-24 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter relative z-10">
          Stop Buying Advice.<br />
          <span className="text-slate-400">Build the Engine.</span>
        </h2>
        
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center bg-primary/10 border border-primary hover:bg-primary hover:text-black text-primary font-mono font-bold py-5 px-10 transition-all duration-300 uppercase tracking-widest text-sm md:text-base relative z-10 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
        >
          &gt; INITIALIZE DEPLOYMENT <span className="ml-3 font-sans animate-pulse">_</span>
        </Link>
      </section>

    </div>
  );
}
