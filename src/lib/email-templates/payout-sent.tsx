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
      accent={brand.success}
      eyebrow="payout sent"
      footerNote="You received this because a publisher payout was processed from your OtexAds account."
      doodles={
        <>
          {doodle.checkCircle(brand.success)}
          {doodle.arrowRight}
          {doodle.spark}
          {doodle.wave}
        </>
      }
      hero={
        <>
          Money is on its{" "}
          <span style={{ fontStyle: "italic", color: brand.success }}>
            way.
          </span>
        </>
      }
    >
      <Text style={styles.lede}>
        Nice work, {name}. Your OtexAds earnings for {period} are out the door.
        M-Pesa usually lands in minutes; bank transfers within one business day.
      </Text>

      <StatCard
        label="amount sent"
        value={amount}
        accent={brand.success}
        soft={brand.successSoft}
      />

      <Row>
        <Column style={{ paddingBottom: 16, width: "50%" }}>
          <Text style={styles.metaLabel}>Reference</Text>
          <Text style={styles.meta}>{reference}</Text>
        </Column>
        <Column style={{ paddingBottom: 16, width: "50%" }}>
          <Text style={styles.metaLabel}>Method</Text>
          <Text style={styles.meta}>{method}</Text>
        </Column>
      </Row>
      <Row>
        <Column style={{ paddingBottom: 16, width: "50%" }}>
          <Text style={styles.metaLabel}>Destination</Text>
          <Text style={styles.meta}>{destination}</Text>
        </Column>
        <Column style={{ paddingBottom: 16, width: "50%" }}>
          <Text style={styles.metaLabel}>Sent at</Text>
          <Text style={styles.meta}>{sentAt}</Text>
        </Column>
      </Row>

      <hr style={styles.hr} />

      <div style={{ textAlign: "center" }}>
        <PillButton href={dashboardUrl} color={brand.success}>
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
    dashboardUrl: "https://app.otexads.com/payouts",
  },
} satisfies TemplateEntry<PayoutSentProps>;
