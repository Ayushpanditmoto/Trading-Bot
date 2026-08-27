"use client";

import React from "react";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { CTA_LINK, LOGIN_LINK } from "@/lib/constants";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "AI Technology", href: "#ai-technology" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Login", href: LOGIN_LINK },
      { label: "Access", href: CTA_LINK },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Risk Disclosure", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <FooterEl>
      <Container>
        <Top>
          <Brand>
            <Logo href="#" />
            <Tagline>
              AI-powered market analysis built for modern traders.
            </Tagline>
          </Brand>
          <Columns>
            {COLUMNS.map((col) => (
              <Col key={col.title}>
                <ColTitle>{col.title}</ColTitle>
                {col.links.map((link) => (
                  <ColLink key={link.label} href={link.href}>
                    {link.label}
                  </ColLink>
                ))}
              </Col>
            ))}
          </Columns>
        </Top>

        <Bottom>
          <Copyright>© {new Date().getFullYear()} Trading Bot. All rights reserved.</Copyright>
          <Contact>Contact · support@tradingbot.app</Contact>
        </Bottom>

        <RiskStrip>
          Risk Disclosure: Trading binary options and other financial instruments
          carries a high level of risk and may not be suitable for all investors.
          You could lose some or all of your invested capital. Signals and market
          analysis provided by this platform are informational and educational in
          nature and do not constitute financial advice. No representation is made
          that any account will or is likely to achieve profits or losses similar to
          those discussed anywhere on this site. Never invest money you cannot
          afford to lose, and always seek independent financial advice.
        </RiskStrip>
      </Container>
    </FooterEl>
  );
}

const FooterEl = styled.footer`
  position: relative;
  padding: 70px 0 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.3));
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

const Brand = styled.div`
  max-width: 280px;
`;

const Tagline = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ColTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 6px;
`;

const ColLink = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 50px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Copyright = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Contact = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const RiskStrip = styled.p`
  margin-top: 28px;
  font-size: 11.5px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 1000px;
`;
