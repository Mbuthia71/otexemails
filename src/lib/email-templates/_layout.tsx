import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { CSSProperties, ReactNode } from "react";

export const brand = {
  paper: "#efece4",
  paperDeep: "#e6e2d6",
  ink: "#0e0e0c",
  body: "#2a2a26",
  muted: "#7a766c",
  rule: "#d9d4c6",
  accent: "#1d4ed8",
  accentSoft: "#e6ecfb",
  success: "#0f6e4e",
  successSoft: "#dff0e6",
  warn: "#b8541b",
  warnSoft: "#f7e6d5",
  danger: "#a4211a",
} as const;

const sans =
  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const serif = "'Fraunces', 'Playfair Display', Georgia, 'Times New Roman', serif";

interface LayoutProps {
  preview: string;
  eyebrow?: string;
  hero: ReactNode;
  doodles?: ReactNode;
  accent?: string;
  children: ReactNode;
  footerNote?: string;
}

export function EmailLayout({
  preview,
  eyebrow,
  hero,
  doodles,
  accent = brand.ink,
  children,
  footerNote,
}: LayoutProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Font
          fontFamily="Fraunces"
          fallbackFontFamily="Georgia"
          webFont={{
            url: "https://fonts.gstatic.com/s/fraunces/v31/6NUh8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0dwYI.woff2",
            format: "woff2",
          }}
          fontWeight={700}
          fontStyle="normal"
        />
        <Font
          fontFamily="Fraunces"
          fallbackFontFamily="Georgia"
          webFont={{
            url: "https://fonts.gstatic.com/s/fraunces/v31/6NUu8FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk3sMxAJvVj4iFj-EIcw.woff2",
            format: "woff2",
          }}
          fontWeight={700}
          fontStyle="italic"
        />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7.woff2",
            format: "woff2",
          }}
          fontWeight={600}
          fontStyle="normal"
        />
      </Head>
      <Preview>{preview}</Preview>
      <Body
        style={{
          backgroundColor: "#ffffff",
          margin: 0,
          padding: 0,
          fontFamily: sans,
          color: brand.body,
        }}
      >
        {/* outer paper canvas */}
        <Container
          style={{
            backgroundColor: brand.paper,
            maxWidth: "640px",
            margin: "0 auto",
            padding: "48px 32px 40px",
          }}
        >
          {/* scattered doodles zone */}
          <Section style={{ textAlign: "center", padding: "8px 0 0" }}>
            <Text
              style={{
                margin: 0,
                fontFamily: serif,
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "28px",
                color: brand.ink,
                letterSpacing: "-0.02em",
              }}
            >
              otex<span style={{ color: accent }}>·</span>ads
            </Text>
          </Section>

          {doodles ? (
            <Section style={{ padding: "36px 0 4px", textAlign: "center" }}>
              {doodles}
            </Section>
          ) : (
            <Section style={{ height: 32 }} />
          )}

          {/* Hero headline */}
          <Section style={{ padding: "8px 0 28px", textAlign: "center" }}>
            {eyebrow ? (
              <Text
                style={{
                  margin: "0 0 14px",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: brand.muted,
                }}
              >
                {eyebrow}
              </Text>
            ) : null}
            <div
              style={{
                fontFamily: serif,
                fontWeight: 700,
                fontSize: "60px",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                color: brand.ink,
              }}
            >
              {hero}
            </div>
          </Section>

          {/* Body */}
          <Section style={{ padding: "8px 8px 12px" }}>{children}</Section>

          {/* Footer */}
          <Section style={{ padding: "40px 0 0", textAlign: "center" }}>
            <Text
              style={{
                margin: "0 0 10px",
                fontFamily: serif,
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "18px",
                color: brand.ink,
              }}
            >
              — the otexads team
            </Text>
            <Text
              style={{
                margin: "6px 0 0",
                fontSize: "12px",
                lineHeight: 1.6,
                color: brand.muted,
              }}
            >
              {footerNote ??
                "You're receiving this because you have an OtexAds account."}
            </Text>
            <Text
              style={{
                margin: "6px 0 0",
                fontSize: "12px",
                lineHeight: 1.6,
                color: brand.muted,
              }}
            >
              OtexAds ·{" "}
              <Link href="https://otexads.com" style={{ color: brand.muted }}>
                otexads.com
              </Link>{" "}
              ·{" "}
              <Link
                href="https://otexads.com/support"
                style={{ color: brand.muted }}
              >
                support
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/* ---------- shared building blocks ---------- */

export const styles = {
  serif,
  sans,
  p: {
    margin: "0 0 18px",
    fontSize: "16px",
    lineHeight: 1.6,
    color: brand.body,
    fontFamily: sans,
  } as CSSProperties,
  lede: {
    margin: "0 0 22px",
    fontSize: "17px",
    lineHeight: 1.55,
    color: brand.ink,
    fontFamily: sans,
  } as CSSProperties,
  meta: {
    margin: 0,
    fontSize: "13px",
    lineHeight: 1.55,
    color: brand.body,
    fontFamily: sans,
  } as CSSProperties,
  metaLabel: {
    margin: "0 0 4px",
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase" as const,
    color: brand.muted,
    fontFamily: sans,
  } as CSSProperties,
  amount: {
    margin: 0,
    fontFamily: serif,
    fontWeight: 700,
    fontSize: "38px",
    letterSpacing: "-0.02em",
    color: brand.ink,
    lineHeight: 1,
  } as CSSProperties,
  hr: {
    border: "none",
    borderTop: `1px solid ${brand.rule}`,
    margin: "28px 0",
  } as CSSProperties,
};

interface PillButtonProps {
  href: string;
  children: ReactNode;
  color?: string;
  textColor?: string;
}

export function PillButton({
  href,
  children,
  color = brand.ink,
  textColor = "#ffffff",
}: PillButtonProps) {
  return (
    <a
      href={href}
      style={{
        backgroundColor: color,
        color: textColor,
        borderRadius: "999px",
        padding: "18px 44px",
        fontSize: "15px",
        fontWeight: 600,
        letterSpacing: "0.01em",
        textDecoration: "none",
        display: "inline-block",
        fontFamily: sans,
      }}
    >
      {children}
    </a>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  accent?: string;
  soft?: string;
}

export function StatCard({
  label,
  value,
  accent = brand.ink,
  soft = brand.paperDeep,
}: StatCardProps) {
  return (
    <div
      style={{
        backgroundColor: soft,
        border: `1px solid ${brand.rule}`,
        borderRadius: "18px",
        padding: "22px 24px",
        margin: "8px 0 24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: accent,
          marginBottom: "10px",
          fontFamily: sans,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: serif,
          fontWeight: 700,
          fontSize: "42px",
          letterSpacing: "-0.03em",
          color: brand.ink,
          lineHeight: 1,
        }}
      >
        {value}
      </div>
    </div>
  );
}

/* Minimal inline SVG doodles — scattered above the hero */

const doodleWrap: CSSProperties = {
  display: "inline-block",
  margin: "0 10px",
  verticalAlign: "middle",
};

export const doodle = {
  arrowSW: (
    <span style={doodleWrap}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M20 4 L6 20 M6 12 L6 20 L14 20" stroke="#0e0e0c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  ),
  arrowRight: (
    <span style={doodleWrap}>
      <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
        <path d="M2 7 L26 7 M20 2 L26 7 L20 12" stroke="#0e0e0c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  ),
  arrowLeft: (
    <span style={doodleWrap}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M12 7 L2 7 M7 2 L2 7 L7 12" stroke="#0e0e0c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  ),
  dot: (
    <span style={doodleWrap}>
      <svg width="14" height="14" viewBox="0 0 14 14">
        <circle cx="7" cy="7" r="5" fill="#0e0e0c" />
      </svg>
    </span>
  ),
  spark: (
    <span style={doodleWrap}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1 L11.5 8.5 L19 10 L11.5 11.5 L10 19 L8.5 11.5 L1 10 L8.5 8.5 Z" fill="#0e0e0c" />
      </svg>
    </span>
  ),
  cursor: (
    <span style={doodleWrap}>
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        <path d="M2 2 L2 16 L6 12 L9 18 L11 17 L8 11 L14 11 Z" fill="#0e0e0c" />
      </svg>
    </span>
  ),
  coin: (color = "#0e0e0c") => (
    <span style={doodleWrap}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke={color} strokeWidth="2" />
        <path d="M11 6 L11 16 M8 9 L14 9 M8 13 L14 13" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  ),
  bell: (color = "#0e0e0c") => (
    <span style={doodleWrap}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3 C7 3 5 6 5 10 L5 14 L3 17 L19 17 L17 14 L17 10 C17 6 15 3 11 3 Z M9 19 C9 20.5 10 21 11 21 C12 21 13 20.5 13 19" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
      </svg>
    </span>
  ),
  lock: (
    <span style={doodleWrap}>
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
        <rect x="3" y="10" width="14" height="10" rx="2" stroke="#0e0e0c" strokeWidth="2" />
        <path d="M6 10 V7 A4 4 0 0 1 14 7 V10" stroke="#0e0e0c" strokeWidth="2" />
      </svg>
    </span>
  ),
  envelope: (
    <span style={doodleWrap}>
      <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
        <rect x="2" y="2" width="22" height="16" rx="2" stroke="#0e0e0c" strokeWidth="2" />
        <path d="M2 4 L13 12 L24 4" stroke="#0e0e0c" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </span>
  ),
  wave: (
    <span style={doodleWrap}>
      <svg width="40" height="14" viewBox="0 0 40 14" fill="none">
        <path d="M2 7 Q7 1 12 7 T22 7 T32 7 T42 7" stroke="#0e0e0c" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </span>
  ),
  checkCircle: (color = "#0f6e4e") => (
    <span style={doodleWrap}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="11" stroke={color} strokeWidth="2" />
        <path d="M7 13 L11 17 L19 9" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </span>
  ),
  warnTri: (color = "#b8541b") => (
    <span style={doodleWrap}>
      <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
        <path d="M13 2 L25 22 L1 22 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M13 9 L13 15 M13 18 L13 19" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </span>
  ),
};
