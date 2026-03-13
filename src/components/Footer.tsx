import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-12 px-6 mt-auto">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link href="/">
          <Image 
            src="/occult-web-platform/logos/occult-logo.svg" 
            alt="Occult Logo" 
            width={150} height={50}
            className="h-8 md:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" 
          />
        </Link>
        
        <p className="font-black uppercase tracking-widest text-xs md:text-sm text-zinc-400">
          © {new Date().getFullYear()} Occult. Engineered Growth.
        </p>
      </div>
    </footer>
  );
}
