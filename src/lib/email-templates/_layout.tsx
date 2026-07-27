import {
  Body,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { CSSProperties, ReactNode } from "react";

export const brand = {
  bg: "#ffffff",
  ink: "#1a1a1a",
  body: "#4a4a4a",
  muted: "#8a8a8a",
  rule: "#e6e6e6",
  accent: "#f5b301", // warm yellow bar (Kid & Coe style)
  link: "#2a6df4",
  success: "#0f6e4e",
  warn: "#c26a3a",
  danger: "#a4211a",
} as const;

// Hosted logo (absolute URL so it renders in email clients)
export const LOGO_URL =
  "https://id-preview--8c56b9ee-7f7c-435b-a676-225f651b661b.lovable.app/__l5e/assets-v1/bbe1ac96-ca15-4887-8458-308d335f4548/otexads-logo.png";

const sans =
  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const display =
  "'Italiana', 'Cormorant Garamond', 'Playfair Display', Georgia, serif";
const script = "'Dancing Script', 'Snell Roundhand', 'Segoe Script', cursive";

interface LayoutProps {
  preview: string;
  heading: string; // large thin uppercase heading, e.g. "WELCOME!"
  accent?: string; // color of the small bar under heading
  children: ReactNode;
  signoff?: string; // cursive sign-off, defaults to "The OtexAds Team"
  footerNote?: string;
}

export function EmailLayout({
  preview,
  heading,
  accent = brand.accent,
  children,
  signoff = "The OtexAds Team",
  footerNote,
}: LayoutProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Font
          fontFamily="Italiana"
          fallbackFontFamily="Georgia"
          webFont={{
            url: "https://fonts.gstatic.com/s/italiana/v17/QldNNTtLsx4E__B0XTmRY31Wx7Vv.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Dancing Script"
          fallbackFontFamily="cursive"
          webFont={{
            url: "https://fonts.gstatic.com/s/dancingscript/v25/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3Sup6.woff2",
            format: "woff2",
          }}
          fontWeight={600}
          fontStyle="normal"
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
        <Container
          style={{
            backgroundColor: "#ffffff",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "48px 40px 32px",
          }}
        >
          {/* Logo — original wordmark, rendered large and centered */}
          <Section style={{ textAlign: "center", padding: "8px 0 40px" }}>
            <Img
              src={LOGO_URL}
              alt="otexads"
              width="220"
              height="62"
              style={{
                display: "block",
                margin: "0 auto",
                width: "220px",
                height: "auto",
                border: "0",
                outline: "none",
                textDecoration: "none",
              }}
            />
          </Section>


          {/* Thin display heading */}
          <Section style={{ textAlign: "center", padding: "0 0 8px" }}>
            <Text
              style={{
                margin: 0,
                fontFamily: display,
                fontWeight: 400,
                fontSize: "56px",
                lineHeight: 1.05,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: brand.ink,
              }}
            >
              {heading}
            </Text>
            {/* accent bar */}
            <div
              style={{
                width: "42px",
                height: "3px",
                backgroundColor: accent,
                margin: "22px auto 0",
                borderRadius: "2px",
              }}
            />
          </Section>

          {/* Body */}
          <Section style={{ padding: "40px 4px 0" }}>{children}</Section>

          {/* Sign-off */}
          <Section style={{ padding: "36px 4px 0" }}>
            <Text style={{ ...styles.p, margin: "0 0 6px", color: brand.body }}>
              Cheers,
            </Text>
            <Text
              style={{
                margin: 0,
                fontFamily: script,
                fontSize: "24px",
                color: brand.ink,
                fontWeight: 600,
              }}
            >
              {signoff}
            </Text>
          </Section>

          <Hr
            style={{
              border: "none",
              borderTop: `1px solid ${brand.rule}`,
              margin: "40px 0 24px",
            }}
          />

          {/* Footer */}
          <Section style={{ textAlign: "center", padding: "0 0 8px" }}>
            <Text
              style={{
                margin: "0 0 8px",
                fontSize: "12px",
                lineHeight: 1.6,
                color: brand.muted,
                fontFamily: sans,
              }}
            >
              {footerNote ??
                "You're receiving this because you have an OtexAds account."}
            </Text>
            <Text
              style={{
                margin: 0,
                fontSize: "12px",
                lineHeight: 1.7,
                color: brand.muted,
                fontFamily: sans,
              }}
            >
              OtexAds Limited
              <br />
              Westlands Office Park, Waiyaki Way
              <br />
              Nairobi, Kenya
            </Text>
            <Text
              style={{
                margin: "12px 0 0",
                fontSize: "12px",
                color: brand.muted,
                fontFamily: sans,
              }}
            >
              <Link href="https://otexads.com" style={{ color: brand.muted }}>
                otexads.com
              </Link>
              {"  ·  "}
              <Link
                href="https://otexads.com/support"
                style={{ color: brand.muted }}
              >
                support
              </Link>
              {"  ·  "}
              <Link
                href="https://otexads.com/privacy"
                style={{ color: brand.muted }}
              >
                privacy
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
  display,
  sans,
  script,
  p: {
    margin: "0 0 16px",
    fontSize: "15px",
    lineHeight: 1.7,
    color: brand.body,
    fontFamily: sans,
  } as CSSProperties,
  lede: {
    margin: "0 0 18px",
    fontSize: "15px",
    lineHeight: 1.7,
    color: brand.ink,
    fontFamily: sans,
  } as CSSProperties,
  greet: {
    margin: "0 0 14px",
    fontSize: "16px",
    lineHeight: 1.6,
    color: brand.ink,
    fontFamily: sans,
    fontWeight: 600,
  } as CSSProperties,
  meta: {
    margin: 0,
    fontSize: "13px",
    lineHeight: 1.6,
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
    fontFamily: display,
    fontWeight: 400,
    fontSize: "34px",
    letterSpacing: "0.02em",
    color: brand.ink,
    lineHeight: 1.1,
  } as CSSProperties,
  hr: {
    border: "none",
    borderTop: `1px solid ${brand.rule}`,
    margin: "28px 0",
  } as CSSProperties,
  link: {
    color: brand.link,
    textDecoration: "underline",
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
        borderRadius: "4px",
        padding: "14px 34px",
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
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
}

export function StatCard({
  label,
  value,
  accent = brand.ink,
}: StatCardProps) {
  return (
    <div
      style={{
        border: `1px solid ${brand.rule}`,
        borderLeft: `3px solid ${accent}`,
        borderRadius: "3px",
        padding: "20px 24px",
        margin: "12px 0 24px",
        backgroundColor: "#fafafa",
      }}
    >
      <div
        style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: brand.muted,
          marginBottom: "8px",
          fontFamily: sans,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: display,
          fontWeight: 400,
          fontSize: "34px",
          letterSpacing: "0.01em",
          color: brand.ink,
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
    </div>
  );
}

interface DetailRowProps {
  label: string;
  value: ReactNode;
}

export function DetailRow({ label, value }: DetailRowProps) {
  return (
    <tr>
      <td
        style={{
          padding: "10px 0",
          borderBottom: `1px solid ${brand.rule}`,
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: brand.muted,
          fontFamily: sans,
          width: "40%",
        }}
      >
        {label}
      </td>
      <td
        style={{
          padding: "10px 0",
          borderBottom: `1px solid ${brand.rule}`,
          fontSize: "14px",
          color: brand.ink,
          fontFamily: sans,
          textAlign: "right",
        }}
      >
        {value}
      </td>
    </tr>
  );
}

export function DetailTable({ children }: { children: ReactNode }) {
  return (
    <table
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      style={{ borderCollapse: "collapse", margin: "8px 0 8px" }}
    >
      <tbody>{children}</tbody>
    </table>
  );
}
