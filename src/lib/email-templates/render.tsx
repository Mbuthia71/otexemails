import { createElement } from "react";
import { render } from "@react-email/render";
import { TEMPLATES, type TemplateName } from "./registry";

export async function renderTemplate(
  name: TemplateName,
  data: Record<string, unknown> = {}
) {
  const entry = TEMPLATES[name];
  if (!entry) {
    throw new Error(`Unknown email template: ${name}`);
  }
  const Component = entry.component;
  return render(createElement(Component, data));
}

export type { TemplateName } from "./registry";
