"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { PlusIcon } from "@/components/ui/Icons";
import { SECTION_IDS } from "@/lib/constants";

const FAQS = [
  {
    q: "How does the platform work?",
    a: "The Trading Bot platform continuously analyzes market data through multiple analytical factors and condenses it into clear, structured trading signals you can review at a glance.",
  },
  {
    q: "How do I get access?",
    a: "Register on Quotex through our partner link, deposit $100 or more, then submit your Quotex account ID for verification. Once verified, you receive access to the platform.",
  },
  {
    q: "Why do I need a Quotex account?",
    a: "Quotex is the brokerage used to execute trades. Our platform provides the market analysis and signals; your Quotex account is where you trade.",
  },
  {
    q: "Why is a $100 deposit required?",
    a: "The minimum deposit ensures you have sufficient capital to actually act on the signals once you have access. It is set at a level that lets new traders get started comfortably.",
  },
  {
    q: "Where do I submit my Quotex ID?",
    a: "After registering and depositing, you submit your Quotex ID through the secure access form on our website. Our team then verifies it and grants access.",
  },
  {
    q: "Does the platform guarantee profits?",
    a: "No. No platform can guarantee profits. AI signals are informational and based on probabilistic market analysis. Always trade responsibly and never risk more than you can afford to lose.",
  },
  {
    q: "Can I use the platform on mobile?",
    a: "Yes. The platform is fully responsive and works on desktop, tablet, and mobile browsers so you can review signals wherever you are.",
  },
  {
    q: "Is trading risk-free?",
    a: "No. Trading carries significant risk and can result in loss of capital. Signals do not guarantee profits. Never invest money you cannot afford to lose.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id={SECTION_IDS.faq}>
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
        />

        <List>
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={Math.min(i * 60, 240)}>
                <Item $open={isOpen}>
                  <Question
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <QText>{faq.q}</QText>
                    <Toggle $open={isOpen}>
                      <PlusIcon size={18} />
                    </Toggle>
                  </Question>
                  <Answer $open={isOpen}>{faq.a}</Answer>
                </Item>
              </Reveal>
            );
          })}
        </List>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  padding: 100px 0;
  scroll-margin-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 70px 0;
  }
`;

const List = styled.div`
  max-width: 760px;
  margin: 48px auto 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Item = styled.div<{ $open: boolean }>`
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid
    ${({ theme, $open }) =>
      $open ? "rgba(139, 92, 246, 0.3)" : theme.colors.border};
  background: ${({ $open }) =>
    $open ? "rgba(139, 92, 246, 0.04)" : "rgba(255, 255, 255, 0.015)"};
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease;
`;

const Question = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 24px;
  background: none;
  border: none;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
`;

const QText = styled.span`
  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.display};
`;

const Toggle = styled.span<{ $open: boolean }>`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: transform 0.3s ease, color 0.3s ease, background 0.3s ease;

  ${({ $open }) =>
    $open &&
    `
    transform: rotate(45deg);
    color: #fff;
    background: rgba(139, 92, 246, 0.6);
  `}
`;

const Answer = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? "300px" : "0")};
  opacity: ${({ $open }) => ($open ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
  padding: ${({ $open }) => ($open ? "0 24px 22px" : "0 24px")};
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
