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

interface PayoutSentProps {
  name?: string;
  amount?: string;
  reference?: string;
  method?: string;
  destination?: string;
  sentAt?: string;
  period?: string;
  impressions?: string;
  dashboardUrl?: string;
}

export default function PayoutSentEmail({
  name = "there",
  amount = "KSh 3,250.00",
  reference = "PO-000000",
  method = "M-Pesa",
  destination = "+254 7•• ••• 421",
  sentAt = "14 Feb 2026, 09:15 EAT",
  period = "Jan 15 – Feb 14, 2026",
  impressions = "184,220",
  dashboardUrl = "https://app.otexads.com/payouts",
}: PayoutSentProps) {
  return (
    <EmailLayout
      preview={`Payout of ${amount} sent to ${destination}.`}
      heading="Payout Sent"
      accent={brand.success}
      footerNote="You received this because a publisher payout was processed from your OtexAds account."
    >
      <Text style={styles.greet}>Hi {name},</Text>

      <Text style={styles.p}>
        Your OtexAds publisher earnings for <strong>{period}</strong> have been
        sent. M-Pesa transfers usually land in a few minutes; bank transfers
        clear within one business day.
      </Text>

      <StatCard
        label="Amount sent"
        value={amount}
        accent={brand.success}
      />

      <DetailTable>
        <DetailRow label="Reference" value={reference} />
        <DetailRow label="Method" value={method} />
        <DetailRow label="Destination" value={destination} />
        <DetailRow label="Earning period" value={period} />
        <DetailRow label="Impressions served" value={impressions} />
        <DetailRow label="Sent at" value={sentAt} />
      </DetailTable>

      <Text style={styles.p}>
        You can download the payout statement anytime from your{" "}
        <Link href={dashboardUrl} style={styles.link}>
          payouts page
        </Link>
        . If the money hasn't arrived within the expected window, reply to this
        email and we'll trace it for you.
      </Text>

      <div style={{ textAlign: "center", margin: "28px 0 8px" }}>
        <PillButton href={dashboardUrl} color={brand.ink}>
          View payout history
        </PillButton>
      </div>
    </EmailLayout>
  );
}

export const template = {
  component: PayoutSentEmail,
  subject: "Payout sent — your OtexAds earnings are on the way",
  displayName: "Payout Sent",
  previewData: {
    name: "Brian",
    amount: "KSh 4,780.00",
    reference: "PO-2026-000184",
    method: "M-Pesa",
    destination: "+254 7•• ••• 421",
    sentAt: "14 Feb 2026, 09:15 EAT",
    period: "Jan 15 – Feb 14, 2026",
    impressions: "231,540",
    dashboardUrl: "https://app.otexads.com/payouts",
  },
} satisfies TemplateEntry<PayoutSentProps>;
