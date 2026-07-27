import { Text } from "@react-email/components";
import type { TemplateEntry } from "./registry";
import { EmailLayout, PillButton, brand, doodle, styles } from "./_layout";

interface VerifyEmailProps {
  verifyUrl?: string;
  expiresIn?: string;
}

export default function VerifyEmail({
  verifyUrl = "https://app.otexads.com/verify?token=xxx",
  expiresIn = "24 hours",
}: VerifyEmailProps) {
  return (
    <EmailLayout
      preview="Confirm your OtexAds email address."
      accent={brand.accent}
      eyebrow="one tap"
      doodles={
        <>
          {doodle.envelope}
          {doodle.arrowSW}
          {doodle.dot}
          {doodle.spark}
        </>
      }
      hero={
        <>
          Is this{" "}
          <span style={{ fontStyle: "italic", color: brand.accent }}>
            really
          </span>{" "}
          you?
        </>
      }
    >
      <Text style={styles.lede}>
        Tap the button to confirm your email and unlock your OtexAds account.
        The link expires in {expiresIn}, so don't leave it in the tab pile.
      </Text>

      <div style={{ textAlign: "center", margin: "36px 0 12px" }}>
        <PillButton href={verifyUrl} color={brand.accent}>
          Confirm email
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
        Button shy? Paste this into your browser:
        <br />
        <span style={{ color: brand.accent }}>{verifyUrl}</span>
      </Text>

      <Text
        style={{
          ...styles.p,
          marginTop: 26,
          color: brand.muted,
          fontSize: 13,
          textAlign: "center",
        }}
      >
        Didn't sign up? Ignore this — nothing happens.
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
