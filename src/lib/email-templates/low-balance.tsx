import { Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import {
  EmailLayout,
  PillButton,
  StatCard,
  brand,
  doodle,
  styles,
} from "./_layout";

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
      accent={brand.warn}
      eyebrow="heads up"
      footerNote="You received this because your wallet fell below your low-balance threshold."
      doodles={
        <>
          {doodle.warnTri(brand.warn)}
          {doodle.arrowSW}
          {doodle.bell(brand.warn)}
          {doodle.dot}
        </>
      }
      hero={
        <>
          Running{" "}
          <span style={{ fontStyle: "italic", color: brand.warn }}>
            low.
          </span>
        </>
      }
    >
      <Text style={styles.lede}>
        Hi {name} — your advertiser wallet just dropped under your{" "}
        <strong>{threshold}</strong> threshold. At the current spend rate,
        active campaigns will pause in <strong>{estimatedRunout}</strong>{" "}
        unless you top up.
      </Text>

      <StatCard
        label="current balance"
        value={currentBalance}
        accent={brand.warn}
        soft={brand.warnSoft}
      />

      <div style={{ textAlign: "center", margin: "24px 0 8px" }}>
        <PillButton href={topUpUrl} color={brand.warn}>
          Top up wallet →
        </PillButton>
      </div>

      <Text
        style={{
          ...styles.p,
          marginTop: 24,
          color: brand.muted,
          fontSize: 13,
          textAlign: "center",
        }}
      >
        Paystack (card · M-Pesa · bank) credits instantly. Campaigns resume
        automatically the moment funds land.
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
