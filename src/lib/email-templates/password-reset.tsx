import { Button, Section, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import { EmailLayout, brand, styles } from "./_layout";

interface PasswordResetProps {
  resetUrl?: string;
  expiresIn?: string;
  ipAddress?: string;
}

export default function PasswordResetEmail({
  resetUrl = "https://app.otexads.com/reset?token=xxx",
  expiresIn = "1 hour",
  ipAddress,
}: PasswordResetProps) {
  return (
    <EmailLayout preview="Reset your OtexAds password.">
      <Text style={styles.eyebrow}>Password reset</Text>
      <Text style={styles.h1}>Reset your password</Text>
      <Text style={styles.p}>
        We received a request to reset your OtexAds password. Click the button
        below to choose a new one. This link expires in {expiresIn}.
      </Text>

      <Section style={{ margin: "28px 0" }}>
        <Button href={resetUrl} style={styles.button()}>
          Reset password
        </Button>
      </Section>

      <Text style={{ ...styles.meta, wordBreak: "break-all" }}>
        Or paste this URL into your browser:
        <br />
        <span style={{ color: brand.accent }}>{resetUrl}</span>
      </Text>

      {ipAddress ? (
        <Text style={{ ...styles.meta, marginTop: 20 }}>
          Request originated from IP <strong>{ipAddress}</strong>.
        </Text>
      ) : null}

      <Text style={{ ...styles.p, marginTop: 24, color: brand.muted, fontSize: 13 }}>
        Didn't request this? Ignore this email — your password won't change.
      </Text>
    </EmailLayout>
  );
}

export const template = {
  component: PasswordResetEmail,
  subject: "Reset your OtexAds password",
  displayName: "Password Reset",
  previewData: {
    resetUrl: "https://app.otexads.com/reset?token=abc123",
    expiresIn: "1 hour",
    ipAddress: "102.68.14.22",
  },
} satisfies TemplateEntry<PasswordResetProps>;
