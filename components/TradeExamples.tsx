"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { SECTION_IDS } from "@/lib/constants";
import tradeImg from "@/image/Trade.png";
import trade2Img from "@/image/trade2.png";

export default function TradeExamples() {
  return (
    <Section id={SECTION_IDS.tradeExamples}>
      <Container>
        <SectionHeading
          eyebrow="Live Trades"
          title="Real Signals. Real Markets."
          subtitle="Actual sessions captured straight from the platform — signal direction, live price action and market structure exactly as you'll see them while trading."
        />

        <Stack>
          <Reveal delay={150}>
            <Frame>
              <Image
                src={tradeImg}
                alt="Trading Bot live trade signals dashboard"
                width={2940}
                height={1668}
                placeholder="blur"
                sizes="(min-width: 1180px) 1100px, 100vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Frame>
          </Reveal>

          <Reveal delay={250}>
            <Frame>
              <Image
                src={trade2Img}
                alt="Trading Bot trade session results view"
                width={2940}
                height={1668}
                placeholder="blur"
                sizes="(min-width: 1180px) 1100px, 100vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Frame>
          </Reveal>
        </Stack>
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

const Stack = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 24px;
  }
`;

const Frame = styled.div`
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