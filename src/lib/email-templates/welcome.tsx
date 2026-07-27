import { Link, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import { EmailLayout, PillButton, brand, styles } from "./_layout";

interface WelcomeProps {
  name?: string;
  email?: string;
  role?: "advertiser" | "publisher";
  dashboardUrl?: string;
  verifyUrl?: string;
}

export default function WelcomeEmail({
  name = "there",
  email = "you@example.com",
  role = "advertiser",
  dashboardUrl = "https://app.otexads.com",
  verifyUrl = "https://app.otexads.com/verify?token=xxx",
}: WelcomeProps) {
  const roleLine =
    role === "publisher"
      ? "As a publisher, you can add ad slots, generate your tag, and start earning right away. Payouts land in M-Pesa or bank as soon as you cross the KSh 3,000 threshold."
      : "As an advertiser, you can fund your wallet via Paystack, launch a campaign in minutes, and reach vetted publishers across Kenya and East Africa.";

  return (
    <EmailLayout
      preview={`Welcome to OtexAds, ${name}.`}
      heading="Welcome!"
      accent={brand.accent}
    >
      <Text style={styles.greet}>Hi {name},</Text>

      <Text style={styles.p}>
        You have successfully created your OtexAds account with the following
        email address:{" "}
        <Link href={`mailto:${email}`} style={styles.link}>
          {email}
        </Link>
        . In order to access all areas of the platform you must activate your
        account by clicking{" "}
        <Link href={verifyUrl} style={styles.link}>
          here
        </Link>
        .
      </Text>

      <Text style={styles.p}>{roleLine}</Text>

      <Text style={styles.p}>
        If you have any questions, just reply to this email or write to{" "}
        <Link href="mailto:support@otexads.com" style={styles.link}>
          support@otexads.com
        </Link>
        . We read every message.
      </Text>

      <div style={{ textAlign: "center", margin: "34px 0 8px" }}>
        <PillButton href={dashboardUrl} color={brand.ink}>
          Open dashboard
        </PillButton>
      </div>
    </EmailLayout>
  );
}

export const template = {
  component: WelcomeEmail,
  subject: "Welcome to OtexAds",
  displayName: "Welcome",
  previewData: {
    name: "Aisha",
    email: "aisha.k@example.com",
    role: "advertiser",
    dashboardUrl: "https://app.otexads.com",
    verifyUrl: "https://app.otexads.com/verify?token=abc123",
  },
} satisfies TemplateEntry<WelcomeProps>;
