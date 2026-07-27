import { Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import { EmailLayout, PillButton, brand, doodle, styles } from "./_layout";

interface WelcomeProps {
  name?: string;
  role?: "advertiser" | "publisher";
  dashboardUrl?: string;
}

export default function WelcomeEmail({
  name = "there",
  role = "advertiser",
  dashboardUrl = "https://app.otexads.com",
}: WelcomeProps) {
  const roleCopy =
    role === "publisher"
      ? "Add your first ad slot, generate your tag, and start earning from day one — payouts land in M-Pesa or bank once you cross the threshold."
      : "Fund your wallet, launch your first campaign, and reach quality publishers instantly — no middleman noise, no dark inventory.";

  return (
    <EmailLayout
      preview={`Welcome to OtexAds, ${name}.`}
      accent={brand.accent}
      doodles={
        <>
          {doodle.arrowLeft}
          {doodle.wave}
          {doodle.spark}
          {doodle.arrowSW}
          {doodle.cursor}
        </>
      }
      hero={
        <>
          Hello,{" "}
          <span style={{ fontStyle: "italic", color: brand.accent }}>
            {name}.
          </span>
        </>
      }
    >
      <Text style={styles.lede}>
        Nobody clicks "sign up" hoping for a boring welcome email. So —
        welcome to the good side of ad-tech. Clean tracking, transparent
        payouts, real humans on support.
      </Text>
      <Text style={styles.p}>{roleCopy}</Text>

      <div style={{ textAlign: "center", margin: "36px 0 8px" }}>
        <PillButton href={dashboardUrl} color={brand.accent}>
          Open the dashboard →
        </PillButton>
      </div>

      <Text
        style={{
          ...styles.p,
          marginTop: 28,
          color: brand.muted,
          fontSize: 13,
          textAlign: "center",
        }}
      >
        Questions? Just reply — a real teammate reads every message.
      </Text>
    </EmailLayout>
  );
}

export const template = {
  component: WelcomeEmail,
  subject: "Welcome to OtexAds",
  displayName: "Welcome",
  previewData: {
    name: "Aisha",
    role: "advertiser",
    dashboardUrl: "https://app.otexads.com",
  },
} satisfies TemplateEntry<WelcomeProps>;
