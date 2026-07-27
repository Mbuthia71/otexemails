import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Column,
  Section,
  Text,
} from "@react-email/components";
import type { TemplateEntry } from "./registry";

interface OrderConfirmationProps {
  orderId?: string;
  customerName?: string;
  items?: Array<{ name: string; qty: number; price: string }>;
  total?: string;
  shippingAddress?: string;
}

const cream = "#f6f4ef";
const sage = "#7a8a6a";
const terra = "#c26a3a";
const ink = "#3a3a3a";

export default function OrderConfirmationEmail({
  orderId = "MOSS-0000",
  customerName = "friend",
  items = [{ name: "Wildflower Tote", qty: 1, price: "$48.00" }],
  total = "$48.00",
  shippingAddress = "123 Cozy Lane\nPortland, OR 97201",
}: OrderConfirmationProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Your Mossling order {orderId} is confirmed.</Preview>
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
              Order Confirmed
            </Text>
          </Section>

          <Heading
            as="h1"
            style={{
              color: ink,
              fontSize: "28px",
              fontWeight: 500,
              lineHeight: 1.2,
              margin: "0 0 12px",
              textAlign: "center",
            }}
          >
            Thank you, {customerName}.
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
            We received your order <strong>{orderId}</strong> and are already stitching it
            together with care.
          </Text>

          <Section
            style={{
              backgroundColor: cream,
              borderRadius: "16px",
              padding: "20px",
              marginBottom: "24px",
            }}
          >
            {items.map((item, i) => (
              <Row key={i} style={{ marginBottom: "12px" }}>
                <Column style={{ width: "60%" }}>
                  <Text style={{ color: ink, fontSize: "15px", margin: 0, fontWeight: 600 }}>
                    {item.name}
                  </Text>
                </Column>
                <Column style={{ width: "20%" }}>
                  <Text style={{ color: ink, fontSize: "15px", margin: 0, textAlign: "center" }}>
                    × {item.qty}
                  </Text>
                </Column>
                <Column style={{ width: "20%" }}>
                  <Text style={{ color: ink, fontSize: "15px", margin: 0, textAlign: "right" }}>
                    {item.price}
                  </Text>
                </Column>
              </Row>
            ))}
            <Row style={{ borderTop: `2px dashed ${sage}40`, paddingTop: "12px", marginTop: "12px" }}>
              <Column>
                <Text style={{ color: ink, fontSize: "16px", margin: 0, fontWeight: 700 }}>
                  Total: {total}
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={{ marginBottom: "24px" }}>
            <Text style={{ color: sage, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" }}>
              Shipping to
            </Text>
            <Text style={{ color: ink, fontSize: "15px", lineHeight: 1.5, margin: 0, whiteSpace: "pre-line" }}>
              {shippingAddress}
            </Text>
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
            Questions? Reply to this email — a real human will read it.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export const template = {
  component: OrderConfirmationEmail,
  subject: "Your Mossling order is confirmed",
  displayName: "Order Confirmation",
  previewData: {
    orderId: "MOSS-1847",
    customerName: "Aisha",
    items: [
      { name: "Wildflower Tote", qty: 1, price: "$48.00" },
      { name: "Tiny Cabin Ornament", qty: 2, price: "$24.00" },
    ],
    total: "$96.00",
    shippingAddress: "123 Cozy Lane\nPortland, OR 97201",
  },
} satisfies TemplateEntry<OrderConfirmationProps>;
