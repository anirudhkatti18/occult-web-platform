import React from 'react';

export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col font-sans">
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tighter text-white max-w-5xl uppercase">
          Marketing Creates the Demand. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-300 to-primary/80">Engineering Captures It.</span>
        </h1>
      </section>

      {/* The DNA Section */}
      <section className="mb-24">
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-none p-6 md:p-10 lg:p-12 mb-12">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            Occult was built on a singular premise: visibility without infrastructure is a liability. Our foundation isn't just in traditional advertising. By merging deep expertise in advanced R&D, open-source intelligence, and high-stakes cultural marketing—including executing massive pan-India theatrical rollouts—we bring a rigorous, systems-level approach to business growth. We don't just run campaigns; we build the data pipelines, the AI agents, and the automated workflows that allow your operations to scale alongside your traffic.
          </p>
        </div>
      </section>

      {/* Core Tenets */}
      <section className="pb-32">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase">Core Tenets</h2>
          <div className="h-1 w-24 bg-primary rounded-none"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4">
          
          {/* Tenet 1 (Wide Block - span 8 columns) */}
          <div className="md:col-span-8 bg-white/5 border border-white/[0.08] backdrop-blur-xl rounded-none relative overflow-hidden group p-6 md:p-10 lg:p-12 flex flex-col h-full min-h-[350px] transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-white/10 hover:border-blue-500/50">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight relative z-10">
              Visibility Without<br />Infrastructure is Waste.
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed flex-1 max-w-xl relative z-10 font-light">
              Generating leads is only half the equation. We build the backend systems to process, qualify, and convert them instantly.
            </p>
          </div>

          {/* Tenet 2 (Standard Block - span 4 columns) */}
          <div className="md:col-span-4 bg-white/5 border border-white/[0.08] backdrop-blur-xl rounded-none relative overflow-hidden group p-6 md:p-10 lg:p-12 flex flex-col h-full min-h-[350px] transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-white/10 hover:border-blue-500/50">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight relative z-10">
              Automation is<br />the New Scale.
            </h3>
            <p className="text-slate-400 text-base leading-relaxed flex-1 relative z-10 font-light">
              We engineer custom AI solutions to handle repetitive operational load, allowing your business to expand without inflating headcount.
            </p>
          </div>

          {/* Tenet 3 (Full Width Block - span 12 columns) */}
          <div className="md:col-span-12 bg-white/5 border border-white/[0.08] backdrop-blur-xl rounded-none relative overflow-hidden group p-6 md:p-10 lg:p-12 flex flex-col md:flex-row items-start md:items-center gap-12 mt-4 transition-all duration-700 ease-in-out hover:-translate-y-2 hover:bg-white/10 hover:border-blue-500/50">
            <div className="flex-1 relative z-10">
              <h3 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">Data Over Intuition.</h3>
              <div className="h-px w-full bg-white/10 my-8"></div>
              <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-3xl font-light">
                We replace guesswork with engineered intelligence, utilizing robust analytics and custom architectures to drive strategic decisions.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
