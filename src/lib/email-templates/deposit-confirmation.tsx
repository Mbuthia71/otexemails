import { Link, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import {
  DetailRow,
  DetailTable,
  EmailLayout,
  PillButton,
  StatCard,
  brand,
  styles,
} from "./_layout";

interface DepositConfirmationProps {
  name?: string;
  amount?: string;
  currency?: string;
  reference?: string;
  method?: string;
  paidAt?: string;
  newBalance?: string;
  dashboardUrl?: string;
}

export default function DepositConfirmationEmail({
  name = "there",
  amount = "KSh 10,000.00",
  currency = "KES",
  reference = "PSK-000000",
  method = "Paystack",
  paidAt = "12 Feb 2026, 14:32 EAT",
  newBalance = "KSh 24,500.00",
  dashboardUrl = "https://app.otexads.com/wallet",
}: DepositConfirmationProps) {
  return (
    <EmailLayout
      preview={`Deposit of ${amount} confirmed — ref ${reference}.`}
      heading="Deposit Received"
      accent={brand.accent}
      footerNote="You received this because a deposit was made to your OtexAds advertiser wallet."
    >
      <Text style={styles.greet}>Hi {name},</Text>

      <Text style={styles.p}>
        We've received your payment via {method} and topped up your OtexAds
        advertiser wallet. Your campaigns are ready to run.
      </Text>

      <StatCard label="Amount deposited" value={amount} accent={brand.accent} />

      <DetailTable>
        <DetailRow label="Reference" value={reference} />
        <DetailRow label="Method" value={method} />
        <DetailRow label="Currency" value={currency} />
        <DetailRow label="Paid at" value={paidAt} />
        <DetailRow
          label="New wallet balance"
          value={<strong>{newBalance}</strong>}
        />
      </DetailTable>

      <Text style={styles.p}>
        Keep this email as your receipt. You can also download a PDF invoice
        from the{" "}
        <Link href={dashboardUrl} style={styles.link}>
          wallet page
        </Link>
        .
      </Text>

      <div style={{ textAlign: "center", margin: "28px 0 8px" }}>
        <PillButton href={dashboardUrl} color={brand.ink}>
          Open wallet
        </PillButton>
      </div>
    </EmailLayout>
  );
}

export const template = {
  component: DepositConfirmationEmail,
  subject: "Deposit received — OtexAds wallet topped up",
  displayName: "Deposit Confirmation",
  previewData: {
    name: "Aisha",
    amount: "KSh 15,000.00",
    currency: "KES",
    reference: "PSK-9F2A81C4",
    method: "Paystack (Card)",
    paidAt: "12 Feb 2026, 14:32 EAT",
    newBalance: "KSh 42,150.00",
    dashboardUrl: "https://app.otexads.com/wallet",
  },
} satisfies TemplateEntry<DepositConfirmationProps>;
