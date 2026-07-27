import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";

export const brand = {
  ink: "#0a0a0a",
  body: "#3f3f46",
  muted: "#71717a",
  border: "#e4e4e7",
  bg: "#f4f4f5",
  card: "#ffffff",
  accent: "#4f46e5",
  accentSoft: "#eef2ff",
  success: "#0f766e",
  warn: "#b45309",
  danger: "#b91c1c",
} as const;

const fontStack =
  "'Helvetica Neue', Helvetica, Arial, 'Segoe UI', Roboto, sans-serif";

interface LayoutProps {
  preview: string;
  children: ReactNode;
  footerNote?: string;
}

export function EmailLayout({ preview, children, footerNote }: LayoutProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>{preview}</Preview>
      <Body
        style={{
          backgroundColor: brand.bg,
          margin: 0,
          padding: 0,
          fontFamily: fontStack,
          color: brand.body,
        }}
      >
        <Container
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            padding: "32px 16px",
          }}
        >
          <Section style={{ padding: "8px 4px 24px" }}>
            <Text
              style={{
                margin: 0,
                fontSize: "22px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: brand.ink,
              }}
            >
              otexads
            </Text>
          </Section>

          <Section
            style={{
              backgroundColor: brand.card,
              border: `1px solid ${brand.border}`,
              borderRadius: "12px",
              padding: "40px 36px",
            }}
          >
            {children}
          </Section>

          <Section style={{ padding: "24px 8px 8px" }}>
            <Text
              style={{
                margin: 0,
                fontSize: "12px",
                lineHeight: 1.6,
                color: brand.muted,
                textAlign: "center",
              }}
            >
              {footerNote ??
                "You are receiving this email because you have an OtexAds account."}
            </Text>
            <Text
              style={{
                margin: "8px 0 0",
                fontSize: "12px",
                lineHeight: 1.6,
                color: brand.muted,
                textAlign: "center",
              }}
            >
              OtexAds &middot;{" "}
              <Link href="https://otexads.com" style={{ color: brand.muted }}>
                otexads.com
              </Link>{" "}
              &middot;{" "}
              <Link
                href="https://otexads.com/support"
                style={{ color: brand.muted }}
              >
                Support
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export const styles = {
  h1: {
    margin: "0 0 12px",
    fontSize: "26px",
    lineHeight: 1.25,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    color: brand.ink,
  } as const,
  eyebrow: {
    margin: "0 0 20px",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: brand.accent,
  },
  p: {
    margin: "0 0 16px",
    fontSize: "15px",
    lineHeight: 1.65,
    color: brand.body,
  } as const,
  hr: {
    borderColor: brand.border,
    margin: "28px 0",
  } as const,
  meta: {
    margin: 0,
    fontSize: "13px",
    lineHeight: 1.6,
    color: brand.muted,
  } as const,
  metaLabel: {
    margin: "0 0 2px",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: brand.muted,
  },
  amount: {
    margin: 0,
    fontSize: "32px",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    color: brand.ink,
  } as const,
  button: (color: string = brand.accent) => ({
    backgroundColor: color,
    color: "#ffffff",
    borderRadius: "8px",
    padding: "12px 22px",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-block",
  }),
};
