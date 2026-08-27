"use client";

import React from "react";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroFunnel from "@/components/HeroFunnel";
import { ArrowRightIcon, SparkleIcon } from "@/components/ui/Icons";
import { CTA_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <Section>
      <Backdrop />
      <Container>
        <Grid>
          <CopyWrap>
            <Reveal>
              <Badge>
                <SparkleIcon size={14} />
                AI-Powered Market Analysis
              </Badge>
            </Reveal>

            <Reveal delay={100}>
              <Headline>
                Trade Smarter With <Gradient>AI-Powered</Gradient> Signals
              </Headline>
            </Reveal>

            <Reveal delay={200}>
              <SubCopy>
                Real-time market analysis designed to help traders identify
                structured trading opportunities with greater clarity.
              </SubCopy>
            </Reveal>

            <Reveal delay={300}>
              <CtaRow>
                <Button href={CTA_LINK} size="lg">
                  Get Started <ArrowRightIcon size={17} />
                </Button>
                <Button href="#how-it-works" variant="outline" size="lg">
                  How It Works <DownArrow>↓</DownArrow>
                </Button>
              </CtaRow>
            </Reveal>

            <Reveal delay={400}>
              <RiskNote>
                <Shield /> No guaranteed profits. Trade responsibly.
              </RiskNote>
            </Reveal>
          </CopyWrap>

          <VisualWrap>
            <Reveal direction="none" delay={300}>
              <HeroFunnel />
            </Reveal>
          </VisualWrap>
        </Grid>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  padding: 170px 0 90px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 140px 0 60px;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(55% 45% at 18% 12%, rgba(139, 92, 246, 0.18), transparent 60%),
    radial-gradient(45% 40% at 85% 30%, rgba(79, 125, 255, 0.14), transparent 60%),
    radial-gradient(40% 35% at 60% 85%, rgba(34, 211, 238, 0.08), transparent 60%);
`;

const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 60px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 56px;
    text-align: center;
  }
`;

const CopyWrap = styled.div`
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 auto;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentCyan};
  background: rgba(34, 211, 238, 0.07);
  border: 1px solid rgba(34, 211, 238, 0.22);
`;

const Headline = styled.h1`
  margin-top: 24px;
  font-size: clamp(40px, 6vw, 68px);
  line-height: 1.02;
  letter-spacing: -0.035em;
  color: ${({ theme }) => theme.colors.text};
`;

const Gradient = styled.span`
  background: ${({ theme }) => theme.gradient.primary};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubCopy = styled.p`
  margin-top: 24px;
  font-size: 19px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 520px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

const DownArrow = styled.span`
  color: ${({ theme }) => theme.colors.accentViolet};
`;

const RiskNote = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

const Shield = styled.span`
  width: 15px;
  aspect-ratio: 1;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
  display: grid;
  place-items: center;
  font-size: 10px;
`;

const VisualWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
