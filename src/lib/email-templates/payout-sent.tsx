import { Button, Column, Hr, Row, Section, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import { EmailLayout, brand, styles } from "./_layout";

interface PayoutSentProps {
  name?: string;
  amount?: string;
  reference?: string;
  method?: string;
  destination?: string;
  sentAt?: string;
  period?: string;
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
  dashboardUrl = "https://app.otexads.com/payouts",
}: PayoutSentProps) {
  return (
    <EmailLayout
      preview={`Payout of ${amount} sent to ${destination}.`}
      footerNote="You received this because a publisher payout was processed from your OtexAds account."
    >
      <Text style={{ ...styles.eyebrow, color: brand.success }}>Payout sent</Text>
      <Text style={styles.h1}>Your earnings are on the way.</Text>
      <Text style={styles.p}>
        Nice work, {name}. We've sent your OtexAds publisher earnings for{" "}
        {period}. Funds typically arrive within a few minutes for M-Pesa and
        within 1 business day for bank transfers.
      </Text>

      <Section
        style={{
          backgroundColor: "#ecfdf5",
          border: `1px solid #a7f3d0`,
          borderRadius: "10px",
          padding: "20px 22px",
          margin: "24px 0",
        }}
      >
        <Text style={{ ...styles.metaLabel, color: brand.success }}>
          Amount sent
        </Text>
        <Text style={{ ...styles.amount, color: brand.success }}>{amount}</Text>
      </Section>

      <Row>
        <Column style={{ paddingBottom: 14 }}>
          <Text style={styles.metaLabel}>Reference</Text>
          <Text style={styles.meta}>{reference}</Text>
        </Column>
        <Column style={{ paddingBottom: 14 }}>
          <Text style={styles.metaLabel}>Method</Text>
          <Text style={styles.meta}>{method}</Text>
        </Column>
      </Row>
      <Row>
        <Column style={{ paddingBottom: 14 }}>
          <Text style={styles.metaLabel}>Destination</Text>
          <Text style={styles.meta}>{destination}</Text>
        </Column>
        <Column style={{ paddingBottom: 14 }}>
          <Text style={styles.metaLabel}>Sent at</Text>
          <Text style={styles.meta}>{sentAt}</Text>
        </Column>
      </Row>

      <Hr style={styles.hr} />

      <Section>
        <Button href={dashboardUrl} style={styles.button(brand.success)}>
          View payout history
        </Button>
      </Section>
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
    dashboardUrl: "https://app.otexads.com/payouts",
  },
} satisfies TemplateEntry<PayoutSentProps>;
