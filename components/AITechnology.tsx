"use client";

import React from "react";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AISignalEngine from "@/components/mockups/AISignalEngine";
import { SECTION_IDS } from "@/lib/constants";

export default function AITechnology() {
  return (
    <Section id={SECTION_IDS.aiTechnology}>
      <Backdrop />
      <Container>
        <SectionHeading
          eyebrow="AI Technology"
          title="Powered by Intelligent Market Analysis"
          subtitle="Multiple analytical layers feed into a single AI signal engine, condensing complex market data into one clear output — a structured trading signal."
        />

        <Reveal delay={150}>
          <EngineShell>
            <AISignalEngine />
          </EngineShell>
        </Reveal>

        <Reveal delay={250}>
          <Disclaimer>
            Market analysis is probabilistic, not predictive. Signals are
            informational and do not guarantee outcomes.
          </Disclaimer>
        </Reveal>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  padding: 110px 0;
  scroll-margin-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 70px 0;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    45% 40% at 50% 30%,
    rgba(139, 92, 246, 0.08),
    transparent 70%
  );
`;

const EngineShell = styled.div`
  margin-top: 56px;
  padding: 40px 36px;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.01)
  );
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 24px 18px;
  }
`;

const Disclaimer = styled.p`
  margin: 28px auto 0;
  max-width: 560px;
  text-align: center;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
`;
