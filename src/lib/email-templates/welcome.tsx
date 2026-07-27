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

interface WelcomeProps {
  name?: string;
  ctaUrl?: string;
}

const cream = "#f6f4ef";
const sage = "#7a8a6a";
const terra = "#c26a3a";
const ink = "#3a3a3a";

export default function WelcomeEmail({ name = "friend", ctaUrl = "#" }: WelcomeProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Welcome to Mossling — your cozy corner starts here.</Preview>
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
              Mossling Studio
            </Text>
          </Section>

          <Heading
            as="h1"
            style={{
              color: ink,
              fontSize: "32px",
              fontWeight: 500,
              lineHeight: 1.15,
              margin: "0 0 20px",
              textAlign: "center",
            }}
          >
            Softer than a snowfall, {name}.
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
            Welcome to the studio. You&apos;ll be the first to know about new wildflower
            totes, tiny cabin ornaments, and the occasional hand-stitched secret.
          </Text>

          <Section style={{ textAlign: "center", margin: "32px 0" }}>
            <Button
              href={ctaUrl}
              style={{
                backgroundColor: sage,
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
              Explore the Collection
            </Button>
          </Section>

          <Text
            style={{
              color: "#6b6b6b",
              fontSize: "13px",
              lineHeight: 1.5,
              margin: "24px 0 0",
              textAlign: "center",
            }}
          >
            If you didn&apos;t sign up for Mossling emails, you can safely ignore this message.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export const template = {
  component: WelcomeEmail,
  subject: "Welcome to Mossling — your cozy corner starts here",
  displayName: "Welcome",
  previewData: { name: "Aisha", ctaUrl: "https://mossling.studio/gallery" },
} satisfies TemplateEntry<WelcomeProps>;
