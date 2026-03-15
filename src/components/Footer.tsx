import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white/[0.03] backdrop-blur-xl border-t border-white/10 pt-16 pb-8 relative z-10 overflow-hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand & HQ */}
        <div className="flex flex-col">
          <Link href="/">
            <Image 
              src="/occult-web-platform/logos/occult-logo.svg" 
              alt="Occult Logo" 
              width={120} height={40}
              className="opacity-80 hover:opacity-100 transition-opacity" 
            />
          </Link>
          <p className="text-gray-400 text-sm mt-6">
            Engineered Growth Firm. Bridging massive visibility with backend automation.
          </p>
          <p className="font-mono text-xs text-gray-500 mt-4 uppercase tracking-widest">
            GLOBAL HEADQUARTERS: Bengaluru, India
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col">
          <h4 className="text-white font-bold tracking-widest uppercase mb-6">NAVIGATION</h4>
          <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm mb-3 block">Home</Link>
          <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm mb-3 block">About</Link>
          <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors text-sm mb-3 block">Services</Link>
          <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm mb-3 block">Contact</Link>
        </div>

        {/* Column 3: Architectures */}
        <div className="flex flex-col">
          <h4 className="text-white font-bold tracking-widest uppercase mb-6">CAPABILITIES</h4>
          <Link href="/services#marketing-growth" className="text-gray-400 hover:text-blue-400 transition-colors text-sm mb-3 block">Marketing & Growth</Link>
          <Link href="/services#business-consulting" className="text-gray-400 hover:text-blue-400 transition-colors text-sm mb-3 block">Business & Brand Consulting</Link>
          <Link href="/services#ai-automation" className="text-gray-400 hover:text-blue-400 transition-colors text-sm mb-3 block">AI Solutions & Automation</Link>
          <Link href="/services#data-analytics" className="text-gray-400 hover:text-blue-400 transition-colors text-sm mb-3 block">Data & Analytics</Link>
        </div>

        {/* Column 4: Direct Comm */}
        <div className="flex flex-col">
          <h4 className="text-white font-bold tracking-widest uppercase mb-6">TRANSMISSION</h4>
          <a href="mailto:operations@occult.marketing" className="font-mono text-gray-400 hover:text-blue-400 transition-colors text-sm block mb-6">
            operations@occult.marketing
          </a>
          <Link href="/contact" className="text-xs font-bold text-blue-500 hover:text-white transition-colors">
            INITIATE STRATEGY -&gt;
          </Link>
        </div>

      </div>

      {/* Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-xs text-center md:text-left">
          © 2026 Occult. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
