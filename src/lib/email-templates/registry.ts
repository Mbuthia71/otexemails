import type { ComponentType } from "react";

import { template as welcome } from "./welcome";
import { template as verifyEmail } from "./verify-email";
import { template as passwordReset } from "./password-reset";
import { template as depositConfirmation } from "./deposit-confirmation";
import { template as lowBalance } from "./low-balance";
import { template as payoutSent } from "./payout-sent";
import { template as payoutPendingApproval } from "./payout-pending-approval";

export interface TemplateEntry<P = Record<string, unknown>> {
  component: ComponentType<P>;
  subject: string;
  displayName?: string;
  previewData?: P;
}

export type TemplateName =
  | "welcome"
  | "verify-email"
  | "password-reset"
  | "deposit-confirmation"
  | "low-balance"
  | "payout-sent"
  | "payout-pending-approval";

export const TEMPLATES: Record<TemplateName, TemplateEntry> = {
  welcome,
  "verify-email": verifyEmail,
  "password-reset": passwordReset,
  "deposit-confirmation": depositConfirmation,
  "low-balance": lowBalance,
  "payout-sent": payoutSent,
  "payout-pending-approval": payoutPendingApproval,
};
