"use client";

import React from "react";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { CTA_LINK } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <Section>
      <Backdrop />
      <Container>
        <Reveal>
          <Inner>
            <Title>
              Make Better Trading Decisions With{" "}
              <Gradient>Better Information.</Gradient>
            </Title>
            <Copy>
              Explore AI-powered market analysis built for modern traders.
            </Copy>
            <Button href={CTA_LINK} size="lg">
              Get Started <ArrowRightIcon size={17} />
            </Button>
            <Risk>Signals are informational and do not guarantee profits.</Risk>
          </Inner>
        </Reveal>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  padding: 130px 0;
  text-align: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 90px 0;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(50% 55% at 30% 20%, rgba(139, 92, 246, 0.16), transparent 60%),
    radial-gradient(45% 50% at 75% 80%, rgba(34, 211, 238, 0.1), transparent 60%);
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: ${({ theme }) => theme.colors.text};
  max-width: 760px;
`;

const Gradient = styled.span`
  background: ${({ theme }) => theme.gradient.primary};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Copy = styled.p`
  margin: 22px auto 36px;
  max-width: 520px;
  font-size: 19px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Risk = styled.p`
  margin-top: 26px;
  font-size: 12.5px;
  color: ${({ theme }) => theme.colors.textMuted};
`;
