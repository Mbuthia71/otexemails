import { Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import { EmailLayout, PillButton, brand, doodle, styles } from "./_layout";

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
    <EmailLayout
      preview="Reset your OtexAds password."
      accent={brand.ink}
      eyebrow="password reset"
      doodles={
        <>
          {doodle.lock}
          {doodle.arrowSW}
          {doodle.dot}
        </>
      }
      hero={
        <>
          Forgot it?{" "}
          <span style={{ fontStyle: "italic" }}>Happens.</span>
        </>
      }
    >
      <Text style={styles.lede}>
        Somebody (hopefully you) asked to reset the password on this OtexAds
        account. Tap below to pick a new one. The link is good for {expiresIn}.
      </Text>

      <div style={{ textAlign: "center", margin: "36px 0 12px" }}>
        <PillButton href={resetUrl} color={brand.ink}>
          Reset password
        </PillButton>
      </div>

      <Text
        style={{
          ...styles.meta,
          wordBreak: "break-all",
          textAlign: "center",
          marginTop: 22,
          color: brand.muted,
        }}
      >
        Or copy this URL:
        <br />
        <span style={{ color: brand.ink }}>{resetUrl}</span>
      </Text>

      {ipAddress ? (
        <Text
          style={{
            ...styles.meta,
            marginTop: 20,
            textAlign: "center",
            color: brand.muted,
          }}
        >
          Request seen from IP <strong>{ipAddress}</strong>.
        </Text>
      ) : null}

      <Text
        style={{
          ...styles.p,
          marginTop: 26,
          color: brand.muted,
          fontSize: 13,
          textAlign: "center",
        }}
      >
        Didn't request this? Ignore it — your password stays as it is.
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
