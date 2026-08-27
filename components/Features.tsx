"use client";

import React from "react";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import {
  ActivityIcon,
  LayersIcon,
  DatabaseIcon,
  ClockIcon,
  LayoutIcon,
  BellIcon,
} from "@/components/ui/Icons";
import { SECTION_IDS } from "@/lib/constants";

const FEATURES = [
  {
    icon: ActivityIcon,
    title: "Real-Time Signals",
    desc: "Receive market signals as new opportunities are detected by the engine.",
  },
  {
    icon: LayersIcon,
    title: "Market Analysis",
    desc: "Understand the market conditions behind each signal, not just the direction.",
  },
  {
    icon: DatabaseIcon,
    title: "Multi-Factor Analysis",
    desc: "Evaluate multiple market factors instead of relying on a single indicator.",
  },
  {
    icon: ClockIcon,
    title: "Signal History",
    desc: "Review previous signals and platform activity to stay informed.",
  },
  {
    icon: LayoutIcon,
    title: "Clean Interface",
    desc: "Simple information without unnecessary complexity or noise.",
  },
  {
    icon: BellIcon,
    title: "Fast Notifications",
    desc: "Stay informed the moment new signals become available.",
  },
];

export default function Features() {
  return (
    <Section id={SECTION_IDS.features}>
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need. Nothing You Don't."
        />

        <Grid>
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}>
              <Card>
                <IconWrap>
                  <f.icon size={22} />
                </IconWrap>
                <Title>{f.title}</Title>
                <Desc>{f.desc}</Desc>
              </Card>
            </Reveal>
          ))}
        </Grid>
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  position: relative;
  padding: 30px 26px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.01)
  );
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.3s ease, border-color 0.3s ease,
    box-shadow 0.3s ease, background 0.3s ease;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background: radial-gradient(
      120% 100% at 50% 0%,
      rgba(139, 92, 246, 0.12),
      transparent 55%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(139, 92, 246, 0.3);
    background: rgba(255, 255, 255, 0.025);
    box-shadow: 0 30px 60px -30px rgba(139, 92, 246, 0.4);

    &::before {
      opacity: 1;
    }
  }
`;

const IconWrap = styled.div`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 13px;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.28);
  color: #b79bff;
  margin-bottom: 22px;
`;

const Title = styled.h3`
  font-size: 19px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
