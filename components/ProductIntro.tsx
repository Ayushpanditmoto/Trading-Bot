"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { SECTION_IDS } from "@/lib/constants";
import mainNew from "@/image/main_new.png";

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
          <Frame>
            <Image
              src={mainNew}
              alt="Trading Bot platform preview"
              width={1366}
              height={768}
              priority
              placeholder="blur"
              sizes="(min-width: 1180px) 1100px, 100vw"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Frame>
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

const Frame = styled.div`
  margin-top: 56px;
  position: relative;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  box-shadow: 0 40px 100px -30px rgba(0, 0, 0, 0.8),
    0 24px 60px -30px rgba(139, 92, 246, 0.35);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    border-radius: inherit;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
    pointer-events: none;
  }
`;
