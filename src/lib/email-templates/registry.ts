import type { ComponentType } from "react";

export interface TemplateEntry<P = Record<string, unknown>> {
  component: ComponentType<P>;
  subject: string;
  displayName?: string;
  previewData?: P;
}

export type TemplateName = "welcome" | "order-confirmation" | "password-reset";

export const TEMPLATES: Record<TemplateName, TemplateEntry> = {
  // populated by ./index.ts after all templates are imported
} as unknown as Record<TemplateName, TemplateEntry>;
