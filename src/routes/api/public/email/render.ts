import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { renderTemplate, type TemplateName } from "@/lib/email-templates/render";

const bodySchema = z.object({
  template: z.enum(["welcome", "order-confirmation", "password-reset"]),
  data: z.record(z.unknown()).default({}),
});

export const Route = createFileRoute("/api/public/email/render")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const json = await request.json();
        const parsed = bodySchema.safeParse(json);
        if (!parsed.success) {
          return Response.json(
            { error: "Invalid request body", issues: parsed.error.issues },
            { status: 400 }
          );
        }
        const html = await renderTemplate(
          parsed.data.template as TemplateName,
          parsed.data.data
        );
        return new Response(html, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      },
    },
  },
});
