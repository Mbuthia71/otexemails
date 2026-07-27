import { Link, Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import { EmailLayout, PillButton, brand, styles } from "./_layout";

interface PasswordResetProps {
  name?: string;
  resetUrl?: string;
  expiresIn?: string;
  ipAddress?: string;
  requestedAt?: string;
}

export default function PasswordResetEmail({
  name = "there",
  resetUrl = "https://app.otexads.com/reset?token=xxx",
  expiresIn = "1 hour",
  ipAddress,
  requestedAt,
}: PasswordResetProps) {
  return (
    <EmailLayout
      preview="Reset your OtexAds password."
      heading="Reset Password"
      accent={brand.accent}
    >
      <Text style={styles.greet}>Hi {name},</Text>

      <Text style={styles.p}>
        We received a request to reset the password for your OtexAds account.
        Click the button below to choose a new password. This link expires in{" "}
        {expiresIn}.
      </Text>

      <div style={{ textAlign: "center", margin: "32px 0 24px" }}>
        <PillButton href={resetUrl} color={brand.ink}>
          Reset password
        </PillButton>
      </div>

      <Text style={styles.p}>
        Or paste this URL into your browser:
        <br />
        <Link href={resetUrl} style={{ ...styles.link, wordBreak: "break-all" }}>
          {resetUrl}
        </Link>
      </Text>

      {(ipAddress || requestedAt) && (
        <Text
          style={{
            ...styles.p,
            fontSize: 13,
            color: brand.muted,
            marginTop: 20,
          }}
        >
          {requestedAt ? <>Requested {requestedAt}</> : null}
          {ipAddress ? (
            <>
              {requestedAt ? " from " : "Requested from "}IP{" "}
              <strong style={{ color: brand.body }}>{ipAddress}</strong>.
            </>
          ) : (
            "."
          )}
        </Text>
      )}

      <Text style={{ ...styles.p, color: brand.muted, fontSize: 13 }}>
        Didn't request this? You can safely ignore this email — your password
        won't change. For account safety, contact{" "}
        <Link href="mailto:security@otexads.com" style={styles.link}>
          security@otexads.com
        </Link>{" "}
        if you're worried.
      </Text>
    </EmailLayout>
  );
}

export const template = {
  component: PasswordResetEmail,
  subject: "Reset your OtexAds password",
  displayName: "Password Reset",
  previewData: {
    name: "Aisha",
    resetUrl: "https://app.otexads.com/reset?token=abc123",
    expiresIn: "1 hour",
    ipAddress: "102.68.14.22",
    requestedAt: "14 Feb 2026, 09:12 EAT",
  },
} satisfies TemplateEntry<PasswordResetProps>;
