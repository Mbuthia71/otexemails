import { Button, Section, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import { EmailLayout, brand, styles } from "./_layout";

interface LowBalanceProps {
  name?: string;
  currentBalance?: string;
  threshold?: string;
  estimatedRunout?: string;
  topUpUrl?: string;
}

export default function LowBalanceEmail({
  name = "there",
  currentBalance = "KSh 480.00",
  threshold = "KSh 1,000.00",
  estimatedRunout = "less than 24 hours",
  topUpUrl = "https://app.otexads.com/wallet/topup",
}: LowBalanceProps) {
  return (
    <EmailLayout
      preview={`Low balance: ${currentBalance} left in your OtexAds wallet.`}
      footerNote="You received this alert because your wallet fell below your low-balance threshold."
    >
      <Text style={{ ...styles.eyebrow, color: brand.warn }}>Low balance alert</Text>
      <Text style={styles.h1}>Your wallet is running low.</Text>
      <Text style={styles.p}>
        Hi {name}, your OtexAds advertiser wallet has dropped below your{" "}
        <strong>{threshold}</strong> threshold. At the current spend rate, your
        active campaigns will pause in <strong>{estimatedRunout}</strong> if you
        don't top up.
      </Text>

      <Section
        style={{
          backgroundColor: "#fff7ed",
          border: `1px solid #fed7aa`,
          borderRadius: "10px",
          padding: "20px 22px",
          margin: "24px 0",
        }}
      >
        <Text style={{ ...styles.metaLabel, color: brand.warn }}>
          Current balance
        </Text>
        <Text style={{ ...styles.amount, color: brand.warn }}>{currentBalance}</Text>
      </Section>

      <Section style={{ margin: "24px 0 8px" }}>
        <Button href={topUpUrl} style={styles.button(brand.warn)}>
          Top up wallet
        </Button>
      </Section>

      <Text style={{ ...styles.p, marginTop: 20, color: brand.muted, fontSize: 13 }}>
        Deposits via Paystack (card, M-Pesa, bank transfer) are credited
        instantly and your campaigns resume automatically.
      </Text>
    </EmailLayout>
  );
}

export const template = {
  component: LowBalanceEmail,
  subject: "Low balance — top up to keep campaigns running",
  displayName: "Low Balance Alert",
  previewData: {
    name: "Aisha",
    currentBalance: "KSh 480.00",
    threshold: "KSh 1,000.00",
    estimatedRunout: "less than 18 hours",
    topUpUrl: "https://app.otexads.com/wallet/topup",
  },
} satisfies TemplateEntry<LowBalanceProps>;
