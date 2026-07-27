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
      accent={brand.accent}
      eyebrow="deposit confirmed"
      footerNote="You received this because a deposit was made to your OtexAds advertiser wallet."
      doodles={
        <>
          {doodle.coin(brand.accent)}
          {doodle.arrowSW}
          {doodle.spark}
          {doodle.dot}
        </>
      }
      hero={
        <>
          Wallet, <span style={{ fontStyle: "italic" }}>topped up.</span>
        </>
      }
    >
      <Text style={styles.lede}>
        Hey {name} — we caught your {method} payment and dropped it straight
        into your advertiser wallet. Your campaigns are ready to roll.
      </Text>

      <StatCard
        label="amount deposited"
        value={amount}
        accent={brand.accent}
        soft={brand.accentSoft}
      />

      <Row style={{ margin: "8px 0" }}>
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
          <Text style={styles.metaLabel}>Paid at</Text>
          <Text style={styles.meta}>{paidAt}</Text>
        </Column>
        <Column style={{ paddingBottom: 16, width: "50%" }}>
          <Text style={styles.metaLabel}>Currency</Text>
          <Text style={styles.meta}>{currency}</Text>
        </Column>
      </Row>

      <hr style={styles.hr} />

      <Row>
        <Column style={{ width: "60%" }}>
          <Text style={styles.metaLabel}>New wallet balance</Text>
          <Text style={{ ...styles.amount, fontSize: 26 }}>{newBalance}</Text>
        </Column>
        <Column align="right" style={{ width: "40%" }}>
          <PillButton href={dashboardUrl} color={brand.accent}>
            Open wallet
          </PillButton>
        </Column>
      </Row>
    </EmailLayout>
  );
}

export const template = {
  component: DepositConfirmationEmail,
  subject: "Deposit confirmed — OtexAds wallet topped up",
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
