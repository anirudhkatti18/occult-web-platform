import React from 'react';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 md:px-6 relative z-10 flex flex-col font-sans mb-32">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tighter text-white max-w-5xl uppercase mb-8">
          Deployable Architectures.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
          We don't sell hours. We engineer, deploy, and scale comprehensive growth systems.
        </p>
      </section>

      {/* The Services Stack (Alternating Grid) */}
      <div className="flex flex-col gap-24 md:gap-32">

        {/* Section A: Marketing & Growth */}
        <section id="marketing-growth" className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="lg:col-span-5 order-1 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">Marketing & Growth</h2>
            <div className="h-1 w-16 bg-primary rounded-none mb-6"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Attention is the raw material of scale. We orchestrate massive visibility, moving beyond standard ad buying to execute multi-platform promotional strategies, performance marketing, and conversion optimization that drive high-intent traffic.
            </p>
          </div>
          <div className="lg:col-span-7 order-2 lg:order-2">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-none p-6 md:p-10 lg:p-12 transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-white/10 hover:border-blue-500/50">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">The Arsenal</h3>
              <ul className="text-xs md:text-sm text-gray-300 font-mono space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Performance Marketing & CRO Strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Large-Scale Promotional Rollouts & Influencer Ops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Precision Lead Generation Campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Marketing Automation & Funnel Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section B: Business & Brand Consulting */}
        <section id="business-consulting" className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="lg:col-span-5 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">Business & Brand Consulting</h2>
            <div className="h-1 w-16 bg-primary rounded-none mb-6"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Growth requires structural integrity. We engineer comprehensive go-to-market strategies, business growth models, and brand architectures backed by rigorous market research and open-source intelligence.
            </p>
          </div>
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-none p-6 md:p-10 lg:p-12 transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-white/10 hover:border-blue-500/50">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">The Arsenal</h3>
              <ul className="text-xs md:text-sm text-gray-300 font-mono space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Go-To-Market & Revenue Scaling Strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Market Research & Competitive OSINT</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Brand Architecture & Product Positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Customer Experience & Sales Funnel Strategy</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section C: AI Solutions & Automation */}
        <section id="ai-automation" className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
           <div className="lg:col-span-5 order-1 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">AI Solutions & Automation</h2>
            <div className="h-1 w-16 bg-primary rounded-none mb-6"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Traffic without processing is a bottleneck. We hardcode bespoke AI systems and operational workflows. From the moment a lead enters the ecosystem, our automated agents engage, qualify, and route without human delay.
            </p>
          </div>
          <div className="lg:col-span-7 order-2 lg:order-2">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-none p-6 md:p-10 lg:p-12 transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-white/10 hover:border-blue-500/50">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">The Arsenal</h3>
              <ul className="text-xs md:text-sm text-gray-300 font-mono space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Custom AI-Driven WhatsApp & Web Agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Automated Lead Qualification & CRM Pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Advanced Webhook & n8n Workflow Integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>AI Inventory & Backend Management Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section D: Data & Analytics */}
        <section id="data-analytics" className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="lg:col-span-5 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">Data & Analytics</h2>
            <div className="h-1 w-16 bg-primary rounded-none mb-6"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              We replace intuition with engineered intelligence. Our in-house developers construct the data pipelines, business intelligence dashboards, and predictive analytics required for strategic enterprise decisions.
            </p>
          </div>
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-none p-6 md:p-10 lg:p-12 transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-white/10 hover:border-blue-500/50">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">The Arsenal</h3>
              <ul className="text-xs md:text-sm text-gray-300 font-mono space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Business Intelligence Dashboards & Reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Predictive Analytics & Customer Data Analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>Proprietary Data Integration & Management Systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">›</span>
                  <span>AI-Powered Data Processing & Strategic Insights</span>
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
          className="w-full sm:w-auto text-center text-xs md:text-sm inline-flex items-center justify-center bg-primary/10 border border-primary hover:bg-primary hover:text-black text-primary font-mono font-bold py-5 px-10 transition-all duration-300 uppercase tracking-widest relative z-10 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
        >
          &gt; INITIATE SEQUENCE <span className="ml-3 font-sans animate-pulse">_</span>
        </Link>
      </section>

    </div>
  );
}
