import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { renderTemplate } from "./render";

const templateNames = [
  "welcome",
  "verify-email",
  "password-reset",
  "deposit-confirmation",
  "low-balance",
  "payout-sent",
  "payout-pending-approval",
] as const;

const inputSchema = z.object({
  template: z.enum(templateNames),
  data: z.record(z.unknown()).default({}),
});

export const renderEmail = createServerFn({ method: "POST" })
  .validator((data) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const html = await renderTemplate(data.template, data.data);
    return { html };
  });
