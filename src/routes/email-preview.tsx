import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { renderEmail } from "@/lib/email-templates/email.functions";
import type { TemplateName } from "@/lib/email-templates/registry";

export const Route = createFileRoute("/email-preview")({
  component: EmailPreview,
  head: () => ({
    meta: [
      { title: "Email Preview — Mossling" },
      { name: "description", content: "Preview rendered email templates" },
      { property: "og:title", content: "Email Preview — Mossling" },
      { property: "og:description", content: "Preview rendered email templates" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const templates: { name: TemplateName; label: string }[] = [
  { name: "welcome", label: "Welcome" },
  { name: "order-confirmation", label: "Order Confirmation" },
  { name: "password-reset", label: "Password Reset" },
];

function EmailPreview() {
  const [html, setHtml] = useState<Record<TemplateName, string>>({
    welcome: "",
    "order-confirmation": "",
    "password-reset": "",
  });

  const load = async (name: TemplateName) => {
    const { html: rendered } = await renderEmail({
      data: { template: name, data: {} },
    });
    setHtml((prev) => ({ ...prev, [name]: rendered }));
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="font-display text-4xl mb-2">Email Preview</h1>
      <p className="text-ink/70 mb-8 max-w-xl">
        Click a template to render it. The public render endpoint is{" "}
        <code className="bg-cream px-1.5 py-0.5 rounded-lg text-sm font-mono">
          POST /api/public/email/render
        </code>
        .
      </p>

      <div className="grid gap-10">
        {templates.map((t) => (
          <section key={t.name} className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{t.label}</h2>
              <button
                onClick={() => load(t.name)}
                className="text-sm font-bold uppercase tracking-wide text-sage hover:text-sage-dark transition-colors"
              >
                Render {t.label}
              </button>
            </div>
            {html[t.name] ? (
              <iframe
                srcDoc={html[t.name]}
                className="w-full h-[520px] border-2 border-border rounded-2xl bg-white"
                title={t.label}
              />
            ) : (
              <div className="w-full h-[520px] border-2 border-dashed border-border rounded-2xl flex items-center justify-center text-ink/50">
                Click “Render {t.label}” to preview
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
