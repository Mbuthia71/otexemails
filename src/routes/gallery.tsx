import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Filter } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { FuzzyButton, Puff, type Surface } from "@/components/fuzzy";
import { useCart } from "@/lib/cart";
import productPouch from "@/assets/product-pouch.jpg";
import productCoasters from "@/assets/product-coasters.jpg";
import productOrnament from "@/assets/product-ornament.jpg";
import productJournal from "@/assets/product-journal.jpg";
import heroTote from "@/assets/hero-tote.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mossling Felt Studio" },
      { name: "description", content: "Wander the full nest — every fuzzy felted piece we've stitched, in every color of the mossy wood." },
      { property: "og:title", content: "Gallery — Mossling Felt Studio" },
      { property: "og:description", content: "Every fuzzy felted piece from the Mossling studio, in one soft place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

type Product = {
  id: string;
  title: string;
  price: number;
  img: string;
  tag: string;
  surface: Surface;
  cat: "totes" | "home" | "ornaments" | "stationery";
  span?: "wide" | "tall" | "big";
};

const catalog: Product[] = [
  { id: "tote-wildflower", title: "Wildflower Tote", price: 88, img: heroTote, tag: "Signature", surface: "cream", cat: "totes", span: "big" },
  { id: "pouch-wildflower", title: "Wildflower Pouch", price: 48, img: productPouch, tag: "New", surface: "cream", cat: "totes" },
  { id: "coasters-moonrise", title: "Moonrise Coasters", price: 36, img: productCoasters, tag: "Set of 4", surface: "sage", cat: "home", span: "wide" },
  { id: "ornament-cottage", title: "Cottage Ornament", price: 52, img: productOrnament, tag: "Limited", surface: "terra", cat: "ornaments" },
  { id: "journal-field", title: "Field Journal", price: 64, img: productJournal, tag: "Restocked", surface: "cream", cat: "stationery", span: "tall" },
  { id: "pouch-mossy", title: "Mossy Pouch", price: 44, img: productPouch, tag: "Small batch", surface: "sage", cat: "totes" },
  { id: "coasters-hearth", title: "Hearth Coasters", price: 38, img: productCoasters, tag: "Set of 4", surface: "cream", cat: "home" },
  { id: "ornament-fawn", title: "Little Fawn", price: 46, img: productOrnament, tag: "New", surface: "cream", cat: "ornaments" },
  { id: "journal-embers", title: "Embers Journal", price: 68, img: productJournal, tag: "Limited", surface: "terra", cat: "stationery" },
  { id: "tote-hearth", title: "Hearth Tote", price: 92, img: heroTote, tag: "Signature", surface: "sage", cat: "totes" },
  { id: "ornament-owl", title: "Nightowl Ornament", price: 54, img: productOrnament, tag: "New", surface: "ink", cat: "ornaments" },
  { id: "coasters-fern", title: "Fern Coasters", price: 34, img: productCoasters, tag: "Set of 2", surface: "sage", cat: "home" },
];

const filters: { label: string; value: Product["cat"] | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Totes & Pouches", value: "totes" },
  { label: "Home", value: "home" },
  { label: "Ornaments", value: "ornaments" },
  { label: "Stationery", value: "stationery" },
];

function Gallery() {
  const [cat, setCat] = useState<Product["cat"] | "all">("all");
  const { add } = useCart();
  const items = catalog.filter((p) => cat === "all" || p.cat === cat);

  const spanClass = (s?: Product["span"]) =>
    s === "big" ? "sm:col-span-2 sm:row-span-2" :
    s === "wide" ? "sm:col-span-2" :
    s === "tall" ? "sm:row-span-2" : "";

  return (
    <div className="page-bg min-h-screen">
      <SiteHeader />

      <section className="max-w-6xl mx-auto px-5 pt-12 pb-6 text-center">
        <div className="inline-flex fuzz-texture fluff felt-cream rounded-full px-4 py-2 stitched mb-6">
          <span className="text-xs font-extrabold uppercase tracking-widest flex items-center gap-2">
            <Filter className="w-3 h-3" strokeWidth={3} /> The full nest · {catalog.length} pieces
          </span>
        </div>
        <h1 className="font-display text-6xl md:text-7xl stitched leading-[0.95] mb-4">
          Every <span className="italic text-terra-dark">tiny</span><br />
          fuzzy thing.
        </h1>
        <p className="text-lg text-ink/80 max-w-lg mx-auto">
          Wander the whole studio. Everything is felted, stitched, and softened by hand.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-6">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <FuzzyButton
              key={f.value}
              surface={cat === f.value ? "terra" : "cream"}
              onClick={() => setCat(f.value)}
            >
              {f.label}
            </FuzzyButton>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(0,1fr)] gap-5">
          {items.map((p) => (
            <article
              key={p.id}
              className={`fuzz-texture ${p.surface === "sage" ? "fluff-sage" : p.surface === "terra" ? "fluff-terra" : p.surface === "ink" ? "fluff-ink" : "fluff"} ${p.surface === "cream" ? "felt-cream text-ink" : p.surface === "sage" ? "felt-sage text-cream" : p.surface === "terra" ? "felt-terra text-cream" : "felt-ink text-cream"} rounded-[2rem] p-4 flex flex-col gap-4 puff-press ${spanClass(p.span)}`}
            >
              <div className="rounded-[1.5rem] overflow-hidden aspect-square fuzz-texture flex-1 min-h-0">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex items-center justify-between px-1">
                <div className={`fuzz-texture ${p.surface === "cream" ? "fluff-terra felt-terra stitched-cream" : "fluff felt-cream stitched"} rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest`}>
                  {p.tag}
                </div>
                <Puff surface={p.surface === "cream" ? "cream" : "cream"} className="w-9 h-9 p-0">
                  <Heart className="w-4 h-4" strokeWidth={2.5} />
                </Puff>
              </div>
              <div className="px-1">
                <h3 className={`font-display text-2xl ${p.surface === "cream" ? "stitched" : "stitched-cream"} leading-tight`}>{p.title}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-extrabold text-lg">${p.price}</span>
                  <FuzzyButton
                    surface={p.surface === "cream" ? "sage" : "cream"}
                    className="px-5 py-2.5 text-xs"
                    onClick={() => add({ id: p.id, title: p.title, price: p.price, img: p.img })}
                  >
                    Add
                  </FuzzyButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 py-16 text-center">
        <Link
          to="/"
          className="fuzz-texture fluff felt-cream stitched rounded-full inline-flex items-center gap-2 px-7 py-4 text-sm font-bold tracking-wide uppercase puff-press"
        >
          ← Back to the shop
        </Link>
      </section>
    </div>
  );
}
