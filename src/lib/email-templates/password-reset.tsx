import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { TemplateEntry } from "./registry";

interface PasswordResetProps {
  resetUrl?: string;
  expiresIn?: string;
}

const cream = "#f6f4ef";
const sage = "#7a8a6a";
const terra = "#c26a3a";
const ink = "#3a3a3a";

export default function PasswordResetEmail({
  resetUrl = "#",
  expiresIn = "1 hour",
}: PasswordResetProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Reset your Mossling password.</Preview>
      <Body style={{ backgroundColor: cream, margin: 0, padding: 0, fontFamily: "Georgia, serif" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            margin: "32px auto",
            maxWidth: "520px",
            padding: "40px",
            border: `2px solid ${sage}20`,
          }}
        >
          <Section style={{ textAlign: "center", marginBottom: "24px" }}>
            <Text
              style={{
                color: terra,
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Password Reset
            </Text>
          </Section>

          <Heading
            as="h1"
            style={{
              color: ink,
              fontSize: "28px",
              fontWeight: 500,
              lineHeight: 1.2,
              margin: "0 0 16px",
              textAlign: "center",
            }}
          >
            Let&apos;s get you back in.
          </Heading>

          <Text
            style={{
              color: ink,
              fontSize: "16px",
              lineHeight: 1.6,
              margin: "0 0 24px",
              textAlign: "center",
            }}
          >
            Click the button below to reset your password. This link expires in {expiresIn}.
          </Text>

          <Section style={{ textAlign: "center", margin: "32px 0" }}>
            <Button
              href={resetUrl}
              style={{
                backgroundColor: terra,
                color: "#ffffff",
                borderRadius: "999px",
                padding: "14px 28px",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Reset Password
            </Button>
          </Section>

          <Text
            style={{
              color: "#6b6b6b",
              fontSize: "13px",
              lineHeight: 1.5,
              margin: "24px 0 0",
              textAlign: "center",
              wordBreak: "break-all",
            }}
          >
            Or paste this URL into your browser: {resetUrl}
          </Text>

          <Text
            style={{
              color: "#6b6b6b",
              fontSize: "13px",
              lineHeight: 1.5,
              margin: "24px 0 0",
              textAlign: "center",
            }}
          >
            If you didn&apos;t request a reset, you can ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export const template = {
  component: PasswordResetEmail,
  subject: "Reset your Mossling password",
  displayName: "Password Reset",
  previewData: {
    resetUrl: "https://mossling.studio/reset?token=abc123",
    expiresIn: "1 hour",
  },
} satisfies TemplateEntry<PasswordResetProps>;
