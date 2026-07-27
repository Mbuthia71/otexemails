import { Column, Row, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import {
  EmailLayout,
  PillButton,
  StatCard,
  brand,
  doodle,
  styles,
} from "./_layout";

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
      accent={brand.warn}
      eyebrow="pending approval"
      footerNote="You received this because you are an OtexAds admin with payout approval permissions."
      doodles={
        <>
          {doodle.bell(brand.warn)}
          {doodle.arrowSW}
          {doodle.dot}
          {doodle.cursor}
        </>
      }
      hero={
        <>
          Your turn,{" "}
          <span style={{ fontStyle: "italic", color: brand.warn }}>
            {adminName}.
          </span>
        </>
      }
    >
      <Text style={styles.lede}>
        <strong>{publisherName}</strong> just crossed the {threshold} payout
        threshold. Fraud checks passed, auto-holds are clear — the only thing
        left is a human tap.
      </Text>

      <StatCard
        label="payout amount"
        value={amount}
        accent={brand.warn}
        soft={brand.warnSoft}
      />

      <Row>
        <Column style={{ paddingBottom: 16, width: "50%" }}>
          <Text style={styles.metaLabel}>Publisher</Text>
          <Text style={styles.meta}>{publisherName}</Text>
          <Text style={{ ...styles.meta, color: brand.muted }}>
            {publisherEmail}
          </Text>
        </Column>
        <Column style={{ paddingBottom: 16, width: "50%" }}>
          <Text style={styles.metaLabel}>Requested at</Text>
          <Text style={styles.meta}>{requestedAt}</Text>
        </Column>
      </Row>
      <Row>
        <Column style={{ paddingBottom: 16, width: "50%" }}>
          <Text style={styles.metaLabel}>Method</Text>
          <Text style={styles.meta}>{method}</Text>
        </Column>
        <Column style={{ paddingBottom: 16, width: "50%" }}>
          <Text style={styles.metaLabel}>Destination</Text>
          <Text style={styles.meta}>{destination}</Text>
        </Column>
      </Row>

      <hr style={styles.hr} />

      <div style={{ textAlign: "center" }}>
        <PillButton href={reviewUrl} color={brand.ink}>
          Review payout →
        </PillButton>
      </div>

      <Text
        style={{
          ...styles.p,
          marginTop: 22,
          color: brand.muted,
          fontSize: 13,
          textAlign: "center",
        }}
      >
        Automated screens already ran. This one just needs eyes on it.
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
