import { Button, Section, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import { EmailLayout, brand, styles } from "./_layout";

interface VerifyEmailProps {
  verifyUrl?: string;
  expiresIn?: string;
}

export default function VerifyEmail({
  verifyUrl = "https://app.otexads.com/verify?token=xxx",
  expiresIn = "24 hours",
}: VerifyEmailProps) {
  return (
    <EmailLayout preview="Confirm your OtexAds email address.">
      <Text style={styles.eyebrow}>Verify email</Text>
      <Text style={styles.h1}>Confirm your email address</Text>
      <Text style={styles.p}>
        Tap the button below to confirm your email and activate your OtexAds
        account. This link expires in {expiresIn}.
      </Text>

      <Section style={{ margin: "28px 0" }}>
        <Button href={verifyUrl} style={styles.button()}>
          Confirm email
        </Button>
      </Section>

      <Text style={{ ...styles.meta, wordBreak: "break-all" }}>
        Or paste this URL into your browser:
        <br />
        <span style={{ color: brand.accent }}>{verifyUrl}</span>
      </Text>

      <Text style={{ ...styles.p, marginTop: 24, color: brand.muted, fontSize: 13 }}>
        If you didn't create an OtexAds account, you can safely ignore this email.
      </Text>
    </EmailLayout>
  );
}

export const template = {
  component: VerifyEmail,
  subject: "Confirm your OtexAds email",
  displayName: "Verify Email",
  previewData: {
    verifyUrl: "https://app.otexads.com/verify?token=abc123",
    expiresIn: "24 hours",
  },
} satisfies TemplateEntry<VerifyEmailProps>;
