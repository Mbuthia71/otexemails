import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { renderEmail } from "@/lib/email-templates/email.functions";
import { TEMPLATES, type TemplateName } from "@/lib/email-templates/registry";

export const Route = createFileRoute("/email-preview")({
  component: EmailPreview,
  head: () => ({
    meta: [
      { title: "OtexAds — Email Template Studio" },
      { name: "description", content: "Preview OtexAds transactional email templates." },
      { property: "og:title", content: "OtexAds — Email Template Studio" },
      { property: "og:description", content: "Preview OtexAds transactional email templates." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const templateList = (Object.keys(TEMPLATES) as TemplateName[]).map((name) => ({
  name,
  label: TEMPLATES[name].displayName ?? name,
  subject: TEMPLATES[name].subject,
}));

function EmailPreview() {
  const [active, setActive] = useState<TemplateName>("welcome");
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    renderEmail({ data: { template: active, data: {} } })
      .then((res) => {
        if (!cancelled) setHtml(res.html);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [active]);

  const activeMeta = TEMPLATES[active];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 p-6">
        <aside className="space-y-1">
          <div className="mb-4">
            <h1 className="text-lg font-bold tracking-tight">otexads</h1>
            <p className="text-xs text-zinc-500 mt-0.5">Email template studio</p>
          </div>
          {templateList.map((t) => {
            const isActive = active === t.name;
            return (
              <button
                key={t.name}
                onClick={() => setActive(t.name)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-zinc-900 text-white"
                    : "hover:bg-zinc-200/60 text-zinc-700"
                }`}
              >
                <div className="font-medium">{t.label}</div>
                <div
                  className={`text-xs mt-0.5 truncate ${
                    isActive ? "text-zinc-300" : "text-zinc-500"
                  }`}
                >
                  {t.name}
                </div>
              </button>
            );
          })}
          <div className="pt-6 mt-6 border-t border-zinc-200 text-xs text-zinc-500 space-y-2">
            <div className="font-semibold text-zinc-700">Render endpoint</div>
            <code className="block bg-white border border-zinc-200 rounded px-2 py-1.5 font-mono text-[11px] leading-tight break-all">
              POST /api/public/email/render
            </code>
            <div>Body: {"{ template, data }"} → HTML</div>
          </div>
        </aside>

        <main className="space-y-4">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-zinc-500">
                Subject
              </div>
              <h2 className="text-xl font-semibold mt-0.5">{activeMeta.subject}</h2>
            </div>
            {loading ? (
              <span className="text-xs text-zinc-500">Rendering…</span>
            ) : null}
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
            {html ? (
              <iframe
                srcDoc={html}
                className="w-full h-[820px] bg-white"
                title={active}
              />
            ) : (
              <div className="w-full h-[820px] flex items-center justify-center text-zinc-400 text-sm">
                Loading preview…
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
