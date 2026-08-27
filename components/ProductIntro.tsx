"use client";

import React from "react";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AIAnalysisVisual from "@/components/mockups/AIAnalysisVisual";
import { SECTION_IDS } from "@/lib/constants";

export default function ProductIntro() {
  return (
    <Section id={SECTION_IDS.product}>
      <Container>
        <SectionHeading
          eyebrow="The Platform"
          title="A Smarter Way to Analyze the Market"
          subtitle="The Trading Bot platform combines live market data and multiple analytical factors into clear, structured signals — so you spend less time decoding charts and more time understanding market conditions."
        />

        <Reveal delay={150}>
          <VisualWrap>
            <AIAnalysisVisual />
          </VisualWrap>
        </Reveal>
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

const VisualWrap = styled.div`
  margin-top: 56px;
`;
