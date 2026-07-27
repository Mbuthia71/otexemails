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

interface PayoutPendingApprovalProps {
  adminName?: string;
  publisherName?: string;
  publisherEmail?: string;
  publisherId?: string;
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
  publisherId = "PUB-00184",
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
      heading="Approval Needed"
      accent={brand.warn}
      footerNote="You received this because you are an OtexAds admin with payout approval permissions."
    >
      <Text style={styles.greet}>Hi {adminName},</Text>

      <Text style={styles.p}>
        <strong>{publisherName}</strong> has crossed the {threshold} payout
        threshold and is requesting a payout. Automated fraud checks and
        auto-holds have all passed — a human approval is the last step.
      </Text>

      <StatCard label="Payout amount" value={amount} accent={brand.warn} />

      <DetailTable>
        <DetailRow label="Publisher" value={publisherName} />
        <DetailRow
          label="Email"
          value={
            <Link href={`mailto:${publisherEmail}`} style={styles.link}>
              {publisherEmail}
            </Link>
          }
        />
        <DetailRow label="Publisher ID" value={publisherId} />
        <DetailRow label="Method" value={method} />
        <DetailRow label="Destination" value={destination} />
        <DetailRow label="Requested at" value={requestedAt} />
      </DetailTable>

      <Text style={styles.p}>
        Review the request in the admin console. If anything looks off, you can
        hold the payout and add a note for the publisher.
      </Text>

      <div style={{ textAlign: "center", margin: "28px 0 8px" }}>
        <PillButton href={reviewUrl} color={brand.ink}>
          Review payout
        </PillButton>
      </div>

      <Text style={{ ...styles.p, color: brand.muted, fontSize: 13 }}>
        Approvals older than 48 hours trigger a reminder to the entire admin
        group.
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
    publisherId: "PUB-00184",
    amount: "KSh 3,250.00",
    threshold: "KSh 3,000.00",
    method: "M-Pesa",
    destination: "+254 7•• ••• 421",
    requestedAt: "14 Feb 2026, 08:42 EAT",
    reviewUrl: "https://admin.otexads.com/payouts/pending",
  },
} satisfies TemplateEntry<PayoutPendingApprovalProps>;
