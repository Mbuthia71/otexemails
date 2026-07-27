import { Button, Column, Hr, Row, Section, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import { EmailLayout, brand, styles } from "./_layout";

interface PayoutPendingApprovalProps {
  adminName?: string;
  publisherName?: string;
  publisherEmail?: string;
  amount?: string;
  threshold?: string;
  method?: string;
  destination?: string;
  requestedAt?: string;
  reviewUrl?: string;
}

export default function PayoutPendingApprovalEmail({
  adminName = "Admin",
  publisherName = "Brian Otieno",
  publisherEmail = "brian@example.com",
  amount = "KSh 3,250.00",
  threshold = "KSh 3,000.00",
  method = "M-Pesa",
  destination = "+254 7•• ••• 421",
  requestedAt = "14 Feb 2026, 08:42 EAT",
  reviewUrl = "https://admin.otexads.com/payouts/pending",
}: PayoutPendingApprovalProps) {
  return (
    <EmailLayout
      preview={`Payout of ${amount} awaiting your approval for ${publisherName}.`}
      footerNote="You received this because you are an OtexAds admin with payout approval permissions."
    >
      <Text style={{ ...styles.eyebrow, color: brand.warn }}>Pending approval</Text>
      <Text style={styles.h1}>Publisher payout awaiting review.</Text>
      <Text style={styles.p}>
        Hi {adminName}, <strong>{publisherName}</strong> has crossed the{" "}
        {threshold} payout threshold and their earnings are ready for approval.
        Please review and approve or hold this payout.
      </Text>

      <Section
        style={{
          backgroundColor: "#fef3c7",
          border: `1px solid #fcd34d`,
          borderRadius: "10px",
          padding: "20px 22px",
          margin: "24px 0",
        }}
      >
        <Text style={{ ...styles.metaLabel, color: brand.warn }}>
          Payout amount
        </Text>
        <Text style={{ ...styles.amount, color: brand.warn }}>{amount}</Text>
      </Section>

      <Row>
        <Column style={{ paddingBottom: 14 }}>
          <Text style={styles.metaLabel}>Publisher</Text>
          <Text style={styles.meta}>{publisherName}</Text>
          <Text style={{ ...styles.meta, color: brand.muted }}>{publisherEmail}</Text>
        </Column>
        <Column style={{ paddingBottom: 14 }}>
          <Text style={styles.metaLabel}>Requested at</Text>
          <Text style={styles.meta}>{requestedAt}</Text>
        </Column>
      </Row>
      <Row>
        <Column style={{ paddingBottom: 14 }}>
          <Text style={styles.metaLabel}>Method</Text>
          <Text style={styles.meta}>{method}</Text>
        </Column>
        <Column style={{ paddingBottom: 14 }}>
          <Text style={styles.metaLabel}>Destination</Text>
          <Text style={styles.meta}>{destination}</Text>
        </Column>
      </Row>

      <Hr style={styles.hr} />

      <Section>
        <Button href={reviewUrl} style={styles.button()}>
          Review payout
        </Button>
      </Section>

      <Text style={{ ...styles.p, marginTop: 20, color: brand.muted, fontSize: 13 }}>
        Auto-hold rules and fraud checks have already run — this payout passed
        all automated screens and is waiting only on human approval.
      </Text>
    </EmailLayout>
  );
}

export const template = {
  component: PayoutPendingApprovalEmail,
  subject: "Payout awaiting approval — action required",
  displayName: "Payout Pending Approval (Admin)",
  previewData: {
    adminName: "Sam",
    publisherName: "Brian Otieno",
    publisherEmail: "brian@example.com",
    amount: "KSh 3,250.00",
    threshold: "KSh 3,000.00",
    method: "M-Pesa",
    destination: "+254 7•• ••• 421",
    requestedAt: "14 Feb 2026, 08:42 EAT",
    reviewUrl: "https://admin.otexads.com/payouts/pending",
  },
} satisfies TemplateEntry<PayoutPendingApprovalProps>;
