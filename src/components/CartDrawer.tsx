import { useCart } from "@/lib/cart";
import { Link } from "@tanstack/react-router";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, subtotal, count } = useCart();
  return (
    <>
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[440px] p-4 transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="fuzz-texture fluff felt-cream stitched rounded-[2rem] h-full flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="fuzz-texture fluff-terra felt-terra rounded-full w-10 h-10 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-cream" strokeWidth={2.5} />
              </div>
              <h2 className="font-display text-3xl">Your Basket</h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="fuzz-texture fluff felt-cream rounded-full w-10 h-10 flex items-center justify-center puff-press"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-2 space-y-3">
            {items.length === 0 && (
              <div className="text-center py-16 opacity-70">
                <p className="font-display text-2xl mb-2">Your basket is quiet.</p>
                <p className="text-sm">Add a little wool to warm it up.</p>
              </div>
            )}
            {items.map((it) => (
              <div key={it.id} className="fuzz-texture fluff felt-cream rounded-[1.5rem] p-3 flex items-center gap-3">
                <div className="rounded-[1rem] overflow-hidden w-16 h-16 shrink-0 fuzz-texture">
                  <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display text-lg stitched leading-tight truncate">{it.title}</p>
                  <p className="font-extrabold text-sm">${it.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQty(it.id, it.qty - 1)}
                    className="fuzz-texture fluff felt-cream rounded-full w-8 h-8 flex items-center justify-center puff-press"
                    aria-label="Decrease"
                  >
                    <Minus className="w-3 h-3" strokeWidth={3} />
                  </button>
                  <span className="font-extrabold w-5 text-center">{it.qty}</span>
                  <button
                    onClick={() => setQty(it.id, it.qty + 1)}
                    className="fuzz-texture fluff-sage felt-sage rounded-full w-8 h-8 flex items-center justify-center puff-press"
                    aria-label="Increase"
                  >
                    <Plus className="w-3 h-3 text-cream" strokeWidth={3} />
                  </button>
                </div>
                <button
                  onClick={() => remove(it.id)}
                  className="opacity-40 hover:opacity-100 transition-opacity"
                  aria-label="Remove"
                >
                  <X className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>
            ))}
          </div>

          <div className="p-6 pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-widest opacity-70">
                Subtotal · {count} {count === 1 ? "piece" : "pieces"}
              </span>
              <span className="font-display text-3xl stitched">${subtotal.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              onClick={() => setOpen(false)}
              aria-disabled={items.length === 0}
              className={`fuzz-texture fluff-terra felt-terra stitched-cream rounded-full w-full py-4 text-sm font-bold tracking-widest uppercase inline-flex items-center justify-center puff-press ${
                items.length === 0 ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              Checkout →
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
