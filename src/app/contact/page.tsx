import React from 'react';

export default function Contact() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col font-sans mb-32">
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-white max-w-5xl uppercase mb-8">
          System Intake.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
          Submit your operational bottlenecks and growth targets. We will engineer the solution.
        </p>
      </section>

      {/* The Intake Layout (2-Column Grid) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
        
        {/* Column 1: Direct Comm & Location */}
        <div>
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 mb-8">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Direct Transmission</h2>
            <a 
              href="mailto:operations@occult.marketing" 
              className="font-mono text-xl md:text-2xl text-white hover:text-primary transition-colors"
            >
              operations@occult.marketing
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Global Headquarters</h2>
            <p className="font-mono text-xl md:text-2xl text-white">
              Bengaluru, India
            </p>
          </div>
        </div>

        {/* Column 2: The Terminal Form */}
        <div>
          <form className="flex flex-col gap-10">
            <div className="flex flex-col">
              <label htmlFor="commander" className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Commander / Name</label>
              <input 
                type="text" 
                id="commander"
                className="bg-white/5 border-b border-white/20 focus:border-blue-500 border-x-0 border-t-0 p-4 font-mono text-white text-lg rounded-none focus:outline-none transition-colors"
                placeholder="Enter Name..."
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="enterprise" className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Enterprise / Company</label>
              <input 
                type="text" 
                id="enterprise"
                className="bg-white/5 border-b border-white/20 focus:border-blue-500 border-x-0 border-t-0 p-4 font-mono text-white text-lg rounded-none focus:outline-none transition-colors"
                placeholder="Enter Company Name..."
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="objectives" className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">System Objectives / Operational Bottlenecks</label>
              <textarea 
                id="objectives"
                rows={5}
                className="bg-white/5 border-b border-white/20 focus:border-blue-500 border-x-0 border-t-0 p-4 font-mono text-white text-lg rounded-none focus:outline-none transition-colors resize-y"
                placeholder="Detail current operational bottlenecks or desired scalability parameters..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 uppercase tracking-widest transition-all duration-300 w-full rounded-none mt-4 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-none"
            >
              INITIATE SEQUENCE -&gt;
            </button>
          </form>
        </div>

      </section>

    </div>
  );
}
