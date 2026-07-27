import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OtexAds — Email Template Studio" },
      { name: "description", content: "React Email templates for OtexAds transactional flows, rendered on demand via a single HTTP endpoint." },
      { property: "og:title", content: "OtexAds — Email Template Studio" },
      { property: "og:description", content: "React Email templates for OtexAds transactional flows, rendered on demand via a single HTTP endpoint." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

const templates = [
  ["welcome", "New user onboarding (advertiser or publisher)"],
  ["verify-email", "Confirm email address"],
  ["password-reset", "Reset password link"],
  ["deposit-confirmation", "Advertiser wallet top-up (Paystack)"],
  ["low-balance", "Advertiser low-balance warning"],
  ["payout-sent", "Publisher payout dispatched"],
  ["payout-pending-approval", "Admin — payout awaiting approval"],
] as const;

function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-sm font-bold tracking-tight">otexads</div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          Email template studio
        </h1>
        <p className="mt-4 text-base text-zinc-600 leading-relaxed">
          React Email templates for OtexAds transactional flows. Preview them
          in the browser and fetch rendered HTML from a single HTTP endpoint —
          your Go backend owns triggers, the Resend key, and delivery.
        </p>

        <div className="mt-8">
          <Link
            to="/email-preview"
            className="inline-block rounded-lg bg-zinc-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Open preview →
          </Link>
        </div>

        <section className="mt-12 space-y-3 text-sm">
          <h2 className="text-lg font-semibold">Render endpoint</h2>
          <pre className="rounded-lg bg-white border border-zinc-200 p-4 overflow-x-auto text-xs leading-relaxed">
{`POST /api/public/email/render
Content-Type: application/json

{ "template": "deposit-confirmation",
  "data": { "name": "Aisha", "amount": "KSh 15,000.00", ... } }

→ 200 text/html
<!doctype html>...`}
          </pre>
        </section>

        <section className="mt-8 space-y-2 text-sm">
          <h2 className="text-lg font-semibold">Templates</h2>
          <ul className="divide-y divide-zinc-200 border border-zinc-200 rounded-lg bg-white">
            {templates.map(([name, desc]) => (
              <li key={name} className="px-4 py-3 flex items-baseline gap-4">
                <code className="font-mono text-xs bg-zinc-100 rounded px-1.5 py-0.5 shrink-0">
                  {name}
                </code>
                <span className="text-zinc-600 text-sm">{desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-zinc-500 pt-2">
            Add new templates in <code className="text-xs bg-zinc-100 px-1 py-0.5 rounded">src/lib/email-templates/</code> and register them in <code className="text-xs bg-zinc-100 px-1 py-0.5 rounded">registry.ts</code>.
          </p>
        </section>
      </div>
    </main>
  );
}
