import type { ComponentType } from "react";

import { template as welcome } from "./welcome";
import { template as orderConfirmation } from "./order-confirmation";
import { template as passwordReset } from "./password-reset";

export interface TemplateEntry<P = Record<string, unknown>> {
  component: ComponentType<P>;
  subject: string;
  displayName?: string;
  previewData?: P;
}

export type TemplateName = "welcome" | "order-confirmation" | "password-reset";

export const TEMPLATES: Record<TemplateName, TemplateEntry> = {
  welcome,
  "order-confirmation": orderConfirmation,
  "password-reset": passwordReset,
};
