import { Link } from "@tanstack/react-router";
import { Flower2, Search, ShoppingBag } from "lucide-react";
import { Puff } from "./fuzzy";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const { count, setOpen } = useCart();
  return (
    <header className="max-w-6xl mx-auto px-5 pt-6">
      <div className="fuzz-texture fluff felt-cream stitched rounded-full px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 pl-2 puff-press rounded-full">
          <div className="fuzz-texture fluff-sage felt-sage rounded-full w-10 h-10 flex items-center justify-center">
            <Flower2 className="w-5 h-5 text-cream" strokeWidth={2.5} />
          </div>
          <span className="font-display text-2xl tracking-tight">Mossling</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-xs font-extrabold uppercase tracking-widest">
          <Link to="/" className="px-4 py-2 rounded-full hover:bg-terra/10 transition-colors">Shop</Link>
          <Link to="/gallery" className="px-4 py-2 rounded-full hover:bg-terra/10 transition-colors">Gallery</Link>
          <a href="#" className="px-4 py-2 rounded-full hover:bg-terra/10 transition-colors">Journal</a>
          <a href="#" className="px-4 py-2 rounded-full hover:bg-terra/10 transition-colors">Our Story</a>
        </nav>
        <div className="flex items-center gap-2">
          <Puff surface="cream" className="w-10 h-10 p-0"><Search className="w-4 h-4" strokeWidth={2.5} /></Puff>
          <button
            aria-label="Open basket"
            onClick={() => setOpen(true)}
            className="relative"
          >
            <Puff surface="terra" className="w-10 h-10 p-0"><ShoppingBag className="w-4 h-4" strokeWidth={2.5} /></Puff>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 fuzz-texture fluff felt-cream stitched rounded-full min-w-6 h-6 px-1.5 text-[11px] font-extrabold flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
