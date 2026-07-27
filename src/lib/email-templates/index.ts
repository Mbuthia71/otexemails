import { TEMPLATES } from "./registry";

import { template as welcome } from "./welcome";
import { template as orderConfirmation } from "./order-confirmation";
import { template as passwordReset } from "./password-reset";

TEMPLATES["welcome"] = welcome;
TEMPLATES["order-confirmation"] = orderConfirmation;
TEMPLATES["password-reset"] = passwordReset;

export { TEMPLATES };
export type { TemplateName, TemplateEntry } from "./registry";
export { renderTemplate } from "./render.tsx";
