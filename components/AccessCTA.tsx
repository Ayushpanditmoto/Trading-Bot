"use client";

import React from "react";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { SECTION_IDS, CTA_LINK } from "@/lib/constants";

export default function AccessCTA() {
  return (
    <Section id={SECTION_IDS.access}>
      <Container>
        <Reveal>
          <Card>
            <Glow />
            <Inner>
              <Eyebrow>Get Access</Eyebrow>
              <Title>Ready to Get Started?</Title>
              <Copy>
                Create your Quotex account through our partner link, deposit
                $100+, and submit your account ID to request platform access.
              </Copy>
              <Button href={CTA_LINK} size="lg">
                Get Started <ArrowRightIcon size={17} />
              </Button>
              <Risk>Trading involves risk. Signals do not guarantee profits.</Risk>
            </Inner>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  padding: 80px 0;
  scroll-margin-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 60px 0;
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  padding: 80px 40px;
  text-align: center;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: linear-gradient(
    170deg,
    rgba(139, 92, 246, 0.1),
    rgba(255, 255, 255, 0.015)
  );
  border: 1px solid rgba(139, 92, 246, 0.22);
  box-shadow: 0 40px 110px -40px rgba(139, 92, 246, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 56px 22px;
  }
`;

const Glow = styled.div`
  position: absolute;
  top: -160px;
  left: 50%;
  transform: translateX(-50%);
  width: 560px;
  height: 320px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.35), transparent 70%);
  filter: blur(20px);
  pointer-events: none;
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Eyebrow = styled.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentCyan};
  margin-bottom: 18px;
`;

const Title = styled.h2`
  font-size: clamp(30px, 4.5vw, 46px);
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text};
`;

const Copy = styled.p`
  margin: 18px auto 36px;
  max-width: 540px;
  font-size: 17px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Risk = styled.p`
  margin-top: 24px;
  font-size: 12.5px;
  color: ${({ theme }) => theme.colors.textMuted};
`;
