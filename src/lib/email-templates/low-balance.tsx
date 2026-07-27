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

interface LowBalanceProps {
  name?: string;
  currentBalance?: string;
  threshold?: string;
  dailySpend?: string;
  estimatedRunout?: string;
  activeCampaigns?: number;
  topUpUrl?: string;
}

export default function LowBalanceEmail({
  name = "there",
  currentBalance = "KSh 480.00",
  threshold = "KSh 1,000.00",
  dailySpend = "KSh 620.00 / day",
  estimatedRunout = "less than 24 hours",
  activeCampaigns = 3,
  topUpUrl = "https://app.otexads.com/wallet/topup",
}: LowBalanceProps) {
  return (
    <EmailLayout
      preview={`Low balance: ${currentBalance} left in your OtexAds wallet.`}
      heading="Low Balance"
      accent={brand.warn}
      footerNote="You received this because your wallet fell below your low-balance threshold."
    >
      <Text style={styles.greet}>Hi {name},</Text>

      <Text style={styles.p}>
        Your advertiser wallet has dropped below your alert threshold of{" "}
        <strong>{threshold}</strong>. At your current spend rate, active
        campaigns will pause in <strong>{estimatedRunout}</strong> unless you
        top up.
      </Text>

      <StatCard
        label="Current balance"
        value={currentBalance}
        accent={brand.warn}
      />

      <DetailTable>
        <DetailRow label="Alert threshold" value={threshold} />
        <DetailRow label="Avg. daily spend" value={dailySpend} />
        <DetailRow label="Active campaigns" value={String(activeCampaigns)} />
        <DetailRow label="Estimated runout" value={estimatedRunout} />
      </DetailTable>

      <Text style={styles.p}>
        Top up via Paystack — card, M-Pesa, or bank transfer. Funds credit
        instantly and paused campaigns resume automatically.
      </Text>

      <div style={{ textAlign: "center", margin: "28px 0 8px" }}>
        <PillButton href={topUpUrl} color={brand.ink}>
          Top up wallet
        </PillButton>
      </div>

      <Text style={{ ...styles.p, color: brand.muted, fontSize: 13 }}>
        Want to change the threshold? Update it in{" "}
        <Link
          href="https://app.otexads.com/settings/billing"
          style={styles.link}
        >
          Billing settings
        </Link>
        .
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
    dailySpend: "KSh 620.00 / day",
    estimatedRunout: "less than 18 hours",
    activeCampaigns: 3,
    topUpUrl: "https://app.otexads.com/wallet/topup",
  },
} satisfies TemplateEntry<LowBalanceProps>;
