import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { renderTemplate } from "./render";

const inputSchema = z.object({
  template: z.enum(["welcome", "order-confirmation", "password-reset"]),
  data: z.record(z.unknown()).default({}),
});

export const renderEmail = createServerFn({ method: "POST" })
  .validator((data) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const html = await renderTemplate(data.template, data.data);
    return { html };
  });
