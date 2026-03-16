import React from 'react';

export default function Contact() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col font-sans mb-32">
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tighter text-white max-w-5xl uppercase mb-8">
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
          <div className="bg-white/5 border border-white/10 p-6 md:p-10 lg:p-12 mb-8">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Direct Transmission</h2>
            <a 
              href="mailto:team@occult.marketing" 
              className="font-mono text-xl md:text-2xl text-white hover:text-primary transition-colors break-all"
            >
              team@occult.marketing
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 md:p-10 lg:p-12 mb-8">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Global Headquarters</h2>
            <p className="font-mono text-lg md:text-xl text-white max-w-sm">
              #366, Pattabhiram Nagar, Jayanagar 4 T Block, Bengaluru, Karnataka
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 md:p-10 lg:p-12">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Direct Lines</h2>
            <p className="font-mono text-xl md:text-2xl text-white">
              +91 78928 50037
              <br />
              <span className="text-gray-500">/</span> +91 87623 16560
            </p>
          </div>
        </div>

        {/* Column 2: The Terminal Form */}
        <div>
          <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
            <input type="hidden" name="access_key" value="fd50abac-a978-482b-9810-166af8e2ceb0" />
            <input type="hidden" name="subject" value="New System Intake - Occult Web Platform" />
            <input type="hidden" name="redirect" value="https://anirudhkatti18.github.io/occult-web-platform/contact" />

            <div className="flex flex-col">
              <label htmlFor="commander" className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Commander / Name</label>
              <input 
                type="text" 
                id="commander"
                name="commander_name"
                className="bg-white/5 border-b border-white/20 focus:border-blue-500 border-x-0 border-t-0 p-4 font-mono text-white text-lg rounded-none focus:outline-none transition-colors"
                placeholder="Enter Name..."
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Direct Comm / Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                className="bg-white/5 border-b border-white/20 focus:border-blue-500 border-x-0 border-t-0 p-4 font-mono text-white text-lg rounded-none focus:outline-none transition-colors"
                placeholder="Enter Email Address..."
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="location" className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Coordinates / Location</label>
              <input 
                type="text" 
                id="location"
                name="location"
                className="bg-white/5 border-b border-white/20 focus:border-blue-500 border-x-0 border-t-0 p-4 font-mono text-white text-lg rounded-none focus:outline-none transition-colors"
                placeholder="Enter Location..."
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="enterprise" className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Enterprise / Company</label>
              <input 
                type="text" 
                id="enterprise"
                name="enterprise"
                className="bg-white/5 border-b border-white/20 focus:border-blue-500 border-x-0 border-t-0 p-4 font-mono text-white text-lg rounded-none focus:outline-none transition-colors"
                placeholder="Enter Company Name..."
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="objectives" className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">System Objectives / Operational Bottlenecks</label>
              <textarea 
                id="objectives"
                name="bottlenecks"
                rows={5}
                className="bg-white/5 border-b border-white/20 focus:border-blue-500 border-x-0 border-t-0 p-4 font-mono text-white text-lg rounded-none focus:outline-none transition-colors resize-y"
                placeholder="Detail current operational bottlenecks or desired scalability parameters..."
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full sm:w-auto text-center text-xs md:text-sm bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 uppercase tracking-widest transition-all duration-300 rounded-none mt-4 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-none"
            >
              INITIATE SEQUENCE -&gt;
            </button>
          </form>
        </div>

      </section>

    </div>
  );
}
