import { createFileRoute } from "@tanstack/react-router";
import {
  Plane, ArrowUpDown, Wifi, Bluetooth, Bell, Timer, Moon, Volume2,
  Flashlight, Camera, Calculator, Flower2, ShoppingBag, Heart, Search,
  Sparkles, Sun, Instagram,
} from "lucide-react";
import heroTote from "@/assets/hero-tote.jpg";
import productPouch from "@/assets/product-pouch.jpg";
import productCoasters from "@/assets/product-coasters.jpg";
import productOrnament from "@/assets/product-ornament.jpg";
import productJournal from "@/assets/product-journal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mossling — Fluffy Felt Goods, Stitched By Hand" },
      { name: "description", content: "A cozy craft shop of hand-felted, hand-embroidered treasures. Wildflower totes, cottage ornaments, moon coasters — all soft, all fuzzy." },
      { property: "og:title", content: "Mossling — Fluffy Felt Goods" },
      { property: "og:description", content: "Hand-felted, hand-embroidered cozy goods with wildflower embroidery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Nunito:wght@600;700;800&display=swap" },
    ],
  }),
  component: Index,
});

/* ---------- fuzzy primitives ---------- */

type Surface = "cream" | "sage" | "terra" | "ink";
const surfaceClass: Record<Surface, string> = {
  cream: "felt-cream text-ink",
  sage: "felt-sage text-cream",
  terra: "felt-terra text-cream",
  ink: "felt-ink text-cream",
};
const stitchClass: Record<Surface, string> = {
  cream: "stitched",
  sage: "stitched-cream",
  terra: "stitched-cream",
  ink: "stitched-cream",
};

function Puff({
  children, surface = "cream", className = "", shape = "circle",
}: { children?: React.ReactNode; surface?: Surface; className?: string; shape?: "circle" | "pill" | "square" }) {
  const shapes = { circle: "rounded-full aspect-square", pill: "rounded-full", square: "rounded-[1.75rem] aspect-square" };
  return (
    <div className={`fuzz-texture fluff ${surfaceClass[surface]} ${shapes[shape]} ${stitchClass[surface]} flex items-center justify-center p-4 transition-transform duration-300 hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}

function FuzzyButton({
  children, surface = "sage", className = "", as: As = "button", ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { surface?: Surface; as?: React.ElementType }) {
  return (
    <As
      className={`fuzz-texture ${surface === "terra" ? "fluff-terra" : surface === "sage" ? "fluff-sage" : "fluff"} ${surfaceClass[surface]} ${stitchClass[surface]} rounded-full px-7 py-4 text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer inline-flex items-center gap-2 ${className}`}
      {...rest}
    >
      {children}
    </As>
  );
}

function StatusChip({ icon: Icon, label, surface = "cream" }: { icon: React.ElementType; label: string; surface?: Surface }) {
  return (
    <div className={`fuzz-texture fluff ${surfaceClass[surface]} ${stitchClass[surface]} rounded-full pl-2 pr-5 py-2 flex items-center gap-3`}>
      <div className={`fuzz-texture ${surface === "cream" ? "felt-terra fluff-terra" : "felt-cream fluff"} rounded-full p-2.5`}>
        <Icon className="w-4 h-4" strokeWidth={2.5} />
      </div>
      <span className="text-xs font-extrabold uppercase tracking-widest">{label}</span>
    </div>
  );
}

/* ---------- page ---------- */

function Index() {
  return (
    <div className="page-bg min-h-screen">
      {/* NAV — a control-center strip */}
      <header className="max-w-6xl mx-auto px-5 pt-6">
        <div className="fuzz-texture fluff felt-cream stitched rounded-full px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 pl-2">
            <div className="fuzz-texture fluff-sage felt-sage rounded-full w-10 h-10 flex items-center justify-center">
              <Flower2 className="w-5 h-5 text-cream" strokeWidth={2.5} />
            </div>
            <span className="font-display text-2xl tracking-tight">Mossling</span>
          </div>
          <nav className="hidden md:flex items-center gap-1 text-xs font-extrabold uppercase tracking-widest">
            {["Shop", "Journal", "Our Story", "Contact"].map((l) => (
              <a key={l} href="#" className="px-4 py-2 rounded-full hover:bg-terra/10 transition-colors">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Puff surface="cream" className="w-10 h-10 p-0"><Search className="w-4 h-4" strokeWidth={2.5} /></Puff>
            <Puff surface="terra" className="w-10 h-10 p-0"><ShoppingBag className="w-4 h-4" strokeWidth={2.5} /></Puff>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-8 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <div>
          <div className="inline-flex mb-6">
            <StatusChip icon={Sparkles} label="Winter Collection · 2026" />
          </div>
          <h1 className="font-display text-6xl md:text-7xl leading-[0.95] stitched mb-6">
            Softer than<br />
            <span className="italic text-terra-dark">a snowfall.</span><br />
            Warmer than<br />
            <span className="italic text-sage-dark">a hug.</span>
          </h1>
          <p className="text-lg max-w-md mb-8 text-ink/80">
            Each Mossling is felted, stitched, and coaxed into being by hand — one wildflower, one moonrise, one tiny cabin at a time.
          </p>
          <div className="flex flex-wrap gap-3">
            <FuzzyButton surface="terra">Shop the Collection →</FuzzyButton>
            <FuzzyButton surface="cream">Read our story</FuzzyButton>
          </div>
        </div>

        {/* Hero tile grid — mimics the control-center panels */}
        <div className="grid grid-cols-4 grid-rows-4 gap-4 aspect-square max-w-lg mx-auto">
          {/* Big product tile */}
          <div className="col-span-2 row-span-2 fuzz-texture fluff felt-cream rounded-[2rem] overflow-hidden p-3">
            <img src={heroTote} alt="Felted wildflower tote" className="w-full h-full object-cover rounded-[1.5rem]" width={640} height={640} />
          </div>
          {/* Quad control puff */}
          <div className="col-span-2 row-span-2 fuzz-texture fluff felt-cream rounded-[2rem] p-4 grid grid-cols-2 gap-3">
            <Puff surface="sage" className="p-0"><Plane className="w-6 h-6" strokeWidth={2.5} /></Puff>
            <Puff surface="terra" className="p-0"><ArrowUpDown className="w-6 h-6" strokeWidth={2.5} /></Puff>
            <Puff surface="terra" className="p-0"><Wifi className="w-6 h-6" strokeWidth={2.5} /></Puff>
            <Puff surface="sage" className="p-0"><Bluetooth className="w-6 h-6" strokeWidth={2.5} /></Puff>
          </div>
          {/* pill "Do Not Disturb" */}
          <div className="col-span-2 fuzz-texture fluff-sage felt-sage stitched-cream rounded-full px-5 flex items-center gap-3">
            <div className="fuzz-texture fluff felt-cream rounded-full p-2"><Moon className="w-4 h-4 text-ink" strokeWidth={2.5} /></div>
            <span className="text-xs font-extrabold uppercase tracking-widest leading-tight">Slow Mode<br/><span className="opacity-80">On</span></span>
          </div>
          {/* brightness pill */}
          <div className="fuzz-texture fluff felt-cream rounded-full flex flex-col overflow-hidden">
            <div className="flex-1 flex items-center justify-center"><Sun className="w-5 h-5" strokeWidth={2.5}/></div>
            <div className="flex-1 fuzz-texture felt-terra"></div>
          </div>
          {/* volume pill */}
          <div className="fuzz-texture fluff-sage felt-sage rounded-full flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-cream" strokeWidth={2.5} />
          </div>
          {/* small circles */}
          <Puff surface="terra" className="p-0"><Flashlight className="w-5 h-5" strokeWidth={2.5} /></Puff>
          <Puff surface="cream" className="p-0"><Timer className="w-5 h-5" strokeWidth={2.5} /></Puff>
          <Puff surface="sage" className="p-0"><Calculator className="w-5 h-5" strokeWidth={2.5} /></Puff>
          <Puff surface="cream" className="p-0"><Camera className="w-5 h-5" strokeWidth={2.5} /></Puff>
        </div>
      </section>

      {/* CATEGORY CHIPS */}
      <section className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "All", s: "sage" as Surface },
            { label: "Totes & Pouches", s: "cream" as Surface },
            { label: "Home", s: "cream" as Surface },
            { label: "Ornaments", s: "cream" as Surface },
            { label: "Stationery", s: "cream" as Surface },
            { label: "Made-to-Order", s: "terra" as Surface },
          ].map((c) => (
            <FuzzyButton key={c.label} surface={c.s}>{c.label}</FuzzyButton>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-5 py-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-5xl stitched">The Nest</h2>
          <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Featured · 4 pieces</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: productPouch, title: "Wildflower Pouch", price: "$48", tag: "New", surface: "cream" as Surface },
            { img: productCoasters, title: "Moonrise Coasters", price: "$36", tag: "Set of 4", surface: "cream" as Surface },
            { img: productOrnament, title: "Cottage Ornament", price: "$52", tag: "Limited", surface: "cream" as Surface },
            { img: productJournal, title: "Field Journal", price: "$64", tag: "Restocked", surface: "cream" as Surface },
          ].map((p) => (
            <article key={p.title} className="fuzz-texture fluff felt-cream rounded-[2rem] p-4 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1">
              <div className="rounded-[1.5rem] overflow-hidden aspect-square fuzz-texture">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" width={512} height={512} loading="lazy" />
              </div>
              <div className="flex items-center justify-between px-1">
                <div className="fuzz-texture fluff-terra felt-terra stitched-cream rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest">{p.tag}</div>
                <Puff surface="cream" className="w-9 h-9 p-0"><Heart className="w-4 h-4" strokeWidth={2.5} /></Puff>
              </div>
              <div className="px-1">
                <h3 className="font-display text-2xl stitched leading-tight">{p.title}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-extrabold text-lg">{p.price}</span>
                  <FuzzyButton surface="sage" className="px-5 py-2.5 text-xs">Add</FuzzyButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STORY BAND */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="fuzz-texture fluff-sage felt-sage stitched-cream rounded-[2.5rem] p-10 md:p-16 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] opacity-80 mb-4">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">
              Every Mossling begins as a handful of wool<br/>and a very slow afternoon.
            </h2>
            <p className="opacity-90 max-w-xl">
              We work from a small studio at the edge of a mossy wood. No machines, no rush — just needles, patience, and the occasional cup of chamomile.
            </p>
          </div>
          <div className="flex gap-4">
            <Puff surface="cream" className="w-24 h-24"><Bell className="w-8 h-8" strokeWidth={2.5} /></Puff>
            <Puff surface="terra" className="w-24 h-24"><Flower2 className="w-8 h-8" strokeWidth={2.5} /></Puff>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-3xl mx-auto px-5 py-16 text-center">
        <h2 className="font-display text-4xl stitched mb-3">Cozy letters, once a month.</h2>
        <p className="text-ink/70 mb-8">New releases, studio scraps, and one warm recipe.</p>
        <form className="fuzz-texture fluff felt-cream rounded-full p-2 flex items-center gap-2">
          <input
            type="email"
            placeholder="you@warmhouse.co"
            className="flex-1 bg-transparent px-5 py-3 outline-none text-ink placeholder:text-ink/40 font-bold"
          />
          <FuzzyButton surface="terra">Subscribe</FuzzyButton>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-5 pb-10">
        <div className="fuzz-texture fluff felt-ink stitched-cream rounded-[2.5rem] p-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="fuzz-texture fluff-sage felt-sage rounded-full w-10 h-10 flex items-center justify-center">
                <Flower2 className="w-5 h-5" strokeWidth={2.5}/>
              </div>
              <span className="font-display text-2xl">Mossling</span>
            </div>
            <p className="opacity-70 text-sm">Hand-felted goods from a small studio at the edge of the woods.</p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest opacity-60 mb-3">Wander</p>
            <ul className="space-y-2 text-sm">
              {["Shop all", "Made to order", "Care guide", "Gift cards"].map((l) => <li key={l}><a href="#" className="hover:text-terra">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest opacity-60 mb-3">Find us</p>
            <Puff surface="terra" className="w-12 h-12 p-0 inline-flex"><Instagram className="w-5 h-5" strokeWidth={2.5} /></Puff>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">© 2026 Mossling Studio · Stitched slowly in the northern woods.</p>
      </footer>
    </div>
  );
}
