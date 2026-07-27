import { Button, Column, Hr, Row, Section, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import { EmailLayout, brand, styles } from "./_layout";

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
      footerNote="You received this because a deposit was made to your OtexAds advertiser wallet."
    >
      <Text style={styles.eyebrow}>Deposit confirmed</Text>
      <Text style={styles.h1}>Your wallet has been topped up.</Text>
      <Text style={styles.p}>
        Hi {name}, we've received your payment via {method} and credited your
        OtexAds advertiser wallet. You're ready to run campaigns.
      </Text>

      <Section
        style={{
          backgroundColor: brand.accentSoft,
          borderRadius: "10px",
          padding: "20px 22px",
          margin: "24px 0",
        }}
      >
        <Text style={{ ...styles.metaLabel, color: brand.accent }}>
          Amount deposited
        </Text>
        <Text style={styles.amount}>{amount}</Text>
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
          <Text style={styles.metaLabel}>Paid at</Text>
          <Text style={styles.meta}>{paidAt}</Text>
        </Column>
        <Column style={{ paddingBottom: 14 }}>
          <Text style={styles.metaLabel}>Currency</Text>
          <Text style={styles.meta}>{currency}</Text>
        </Column>
      </Row>

      <Hr style={styles.hr} />

      <Row>
        <Column>
          <Text style={styles.metaLabel}>New wallet balance</Text>
          <Text style={{ ...styles.amount, fontSize: 22 }}>{newBalance}</Text>
        </Column>
        <Column align="right">
          <Button href={dashboardUrl} style={styles.button()}>
            Open wallet
          </Button>
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
