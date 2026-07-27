import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Email Template Studio" },
      { name: "description", content: "React Email templates + render endpoint for backend integration." },
      { property: "og:title", content: "Email Template Studio" },
      { property: "og:description", content: "React Email templates + render endpoint for backend integration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Email Template Studio</h1>
      <p className="mt-4 text-base opacity-80">
        Author React Email templates here, preview them in the browser, and let your backend
        fetch rendered HTML from a single public endpoint.
      </p>

      <div className="mt-8 space-y-3">
        <Link
          to="/email-preview"
          className="inline-block rounded-lg border border-current px-4 py-2 text-sm font-medium hover:opacity-70"
        >
          Open preview →
        </Link>
      </div>

      <section className="mt-12 space-y-3 text-sm">
        <h2 className="text-lg font-semibold">Render endpoint</h2>
        <pre className="rounded-lg bg-black/5 p-4 overflow-x-auto text-xs">
{`POST /api/public/email/render
Content-Type: application/json

{ "template": "welcome", "data": { "name": "Ada" } }

→ 200 { "html": "<!doctype html>..." }`}
        </pre>
      </section>

      <section className="mt-8 space-y-2 text-sm">
        <h2 className="text-lg font-semibold">Templates</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><code>welcome</code></li>
          <li><code>order-confirmation</code></li>
          <li><code>password-reset</code></li>
        </ul>
        <p className="opacity-70">
          Add new templates in <code>src/lib/email-templates/</code> and register them in
          <code> registry.ts</code>.
        </p>
      </section>
    </main>
  );
}
