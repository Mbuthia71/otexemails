import { Link, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import { EmailLayout, PillButton, brand, styles } from "./_layout";

interface VerifyEmailProps {
  name?: string;
  verifyUrl?: string;
  expiresIn?: string;
}

export default function VerifyEmail({
  name = "there",
  verifyUrl = "https://app.otexads.com/verify?token=xxx",
  expiresIn = "24 hours",
}: VerifyEmailProps) {
  return (
    <EmailLayout
      preview="Confirm your OtexAds email address."
      heading="Confirm Email"
      accent={brand.accent}
    >
      <Text style={styles.greet}>Hi {name},</Text>

      <Text style={styles.p}>
        Thanks for signing up. Please confirm this is your email address by
        clicking the button below. The link is valid for {expiresIn}.
      </Text>

      <div style={{ textAlign: "center", margin: "32px 0 24px" }}>
        <PillButton href={verifyUrl} color={brand.ink}>
          Confirm email
        </PillButton>
      </div>

      <Text style={styles.p}>
        If the button doesn't work, paste this link into your browser:
        <br />
        <Link href={verifyUrl} style={{ ...styles.link, wordBreak: "break-all" }}>
          {verifyUrl}
        </Link>
      </Text>

      <Text style={{ ...styles.p, color: brand.muted, fontSize: 13 }}>
        Didn't create an OtexAds account? You can safely ignore this email —
        nothing will happen.
      </Text>
    </EmailLayout>
  );
}

export const template = {
  component: VerifyEmail,
  subject: "Confirm your OtexAds email",
  displayName: "Verify Email",
  previewData: {
    name: "Aisha",
    verifyUrl: "https://app.otexads.com/verify?token=abc123",
    expiresIn: "24 hours",
  },
} satisfies TemplateEntry<VerifyEmailProps>;
