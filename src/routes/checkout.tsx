import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { FuzzyButton } from "@/components/fuzzy";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Mossling" },
      { name: "description", content: "Wrap up your cozy order. Quiet, gentle checkout for hand-felted goods." },
      { property: "og:title", content: "Checkout — Mossling" },
      { property: "og:description", content: "A quiet, gentle checkout for cozy hand-felted goods." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { items, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);
  const shipping = subtotal > 0 ? 6 : 0;
  const total = subtotal + shipping;

  if (placed) {
    return (
      <div className="page-bg min-h-screen">
        <SiteHeader />
        <section className="max-w-xl mx-auto px-5 py-24 text-center">
          <div className="fuzz-texture fluff-sage felt-sage stitched-cream rounded-[2.5rem] p-10">
            <div className="fuzz-texture fluff felt-cream rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
              <Check className="w-10 h-10 text-ink" strokeWidth={3} />
            </div>
            <h1 className="font-display text-5xl mb-3">Sent with a warm hug.</h1>
            <p className="opacity-90 mb-8">
              Your order is nestled in a wool basket and heading your way soon. We'll write when it leaves the studio.
            </p>
            <Link
              to="/"
              className="fuzz-texture fluff felt-cream stitched rounded-full inline-flex items-center gap-2 px-7 py-4 text-sm font-bold tracking-wide uppercase puff-press"
            >
              Back to the shop
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-bg min-h-screen">
      <SiteHeader />

      <section className="max-w-6xl mx-auto px-5 pt-12 pb-6">
        <h1 className="font-display text-6xl stitched mb-2">Checkout</h1>
        <p className="text-ink/70">A quiet moment before we start stitching.</p>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-20 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (items.length === 0) return;
            setPlaced(true);
            clear();
          }}
          className="fuzz-texture fluff felt-cream stitched rounded-[2rem] p-8 space-y-6"
        >
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest opacity-70 mb-4">Contact</p>
            <FelttField label="Email" name="email" type="email" placeholder="you@warmhouse.co" required />
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest opacity-70 mb-4">Shipping</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <FelttField label="First name" name="firstName" required />
              <FelttField label="Last name" name="lastName" required />
              <div className="sm:col-span-2">
                <FelttField label="Address" name="address" required />
              </div>
              <FelttField label="City" name="city" required />
              <FelttField label="Postal code" name="zip" required />
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest opacity-70 mb-4">A note (optional)</p>
            <FelttField label="A little message" name="note" as="textarea" placeholder="Wrap gently, please." />
          </div>

          <FuzzyButton surface="terra" className="w-full justify-center py-5" type="submit">
            <Sparkles className="w-4 h-4" strokeWidth={3} />
            Place cozy order · ${total.toFixed(2)}
          </FuzzyButton>
        </form>

        {/* Order summary */}
        <aside className="fuzz-texture fluff-sage felt-sage stitched-cream rounded-[2rem] p-6 space-y-4 lg:sticky lg:top-6">
          <h2 className="font-display text-3xl">Your basket</h2>
          {items.length === 0 && (
            <p className="opacity-90">Nothing here yet. <Link to="/" className="underline">Wander back</Link>.</p>
          )}
          <div className="space-y-3">
            {items.map((it) => (
              <div key={it.id} className="fuzz-texture fluff felt-cream text-ink stitched rounded-[1.25rem] p-3 flex items-center gap-3">
                <div className="rounded-[0.9rem] overflow-hidden w-14 h-14 shrink-0 fuzz-texture">
                  <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display text-base leading-tight truncate">{it.title}</p>
                  <p className="text-xs font-extrabold opacity-70">Qty {it.qty}</p>
                </div>
                <span className="font-extrabold">${(it.qty * it.price).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="fuzz-texture fluff felt-cream text-ink stitched rounded-[1.25rem] p-4 space-y-2">
            <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
            <Row label="Shipping" value={`$${shipping.toFixed(2)}`} />
            <div className="border-t border-ink/10 my-2" />
            <Row label="Total" value={`$${total.toFixed(2)}`} big />
          </div>
        </aside>
      </section>
    </div>
  );
}

function Row({ label, value, big }: { label: string; value: string; big?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={`${big ? "font-display text-xl" : "text-xs font-extrabold uppercase tracking-widest opacity-70"}`}>{label}</span>
      <span className={`${big ? "font-display text-2xl stitched" : "font-extrabold"}`}>{value}</span>
    </div>
  );
}

function FelttField({
  label, name, type = "text", placeholder, required, as,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; as?: "textarea" }) {
  const shared = "w-full bg-transparent px-5 py-3 outline-none text-ink placeholder:text-ink/40 font-bold";
  return (
    <label className="block">
      <span className="text-xs font-extrabold uppercase tracking-widest opacity-70 mb-1.5 block">{label}</span>
      <div className="fuzz-texture fluff felt-cream rounded-[1.25rem] focus-within:fluff-sage transition-shadow duration-300">
        {as === "textarea" ? (
          <textarea name={name} placeholder={placeholder} rows={3} className={shared} />
        ) : (
          <input name={name} type={type} placeholder={placeholder} required={required} className={shared} />
        )}
      </div>
    </label>
  );
}
