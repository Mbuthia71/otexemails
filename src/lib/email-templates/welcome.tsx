import { Button, Section, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import { EmailLayout, brand, styles } from "./_layout";

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
      ? "Add your first ad slot, generate your tag, and start earning from day one."
      : "Fund your wallet, launch your first campaign, and reach quality publishers instantly.";

  return (
    <EmailLayout preview={`Welcome to OtexAds, ${name}.`}>
      <Text style={styles.eyebrow}>Welcome</Text>
      <Text style={styles.h1}>You're in, {name}.</Text>
      <Text style={styles.p}>
        OtexAds connects advertisers with quality publishers — clean tracking,
        transparent payouts, no middleman noise. {roleCopy}
      </Text>

      <Section style={{ margin: "28px 0 8px" }}>
        <Button href={dashboardUrl} style={styles.button()}>
          Open your dashboard
        </Button>
      </Section>

      <Text style={{ ...styles.p, marginTop: 24, color: brand.muted, fontSize: 13 }}>
        Questions? Just reply to this email — a real human on our team will read it.
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
