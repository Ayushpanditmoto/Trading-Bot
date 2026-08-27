"use client";

import React from "react";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { SECTION_IDS, CTA_LINK } from "@/lib/constants";

const STEPS = [
  {
    num: "01",
    title: "Register",
    desc: "Create your Quotex account using our partner link. It only takes a few minutes.",
  },
  {
    num: "02",
    title: "Deposit",
    desc: "Deposit $100 or more into your Quotex account to qualify for platform access.",
  },
  {
    num: "03",
    title: "Submit Your ID",
    desc: "Enter your Quotex account ID for verification through our secure form.",
  },
  {
    num: "04",
    title: "Get Access",
    desc: "After verification, receive access to the trading signal platform.",
  },
];

export default function HowItWorks() {
  return (
    <Section id={SECTION_IDS.howItWorks}>
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Get Started in 4 Simple Steps"
        />

        <Timeline>
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 120}>
              <StepRow>
                <StepCard>
                  <StepNum>{step.num}</StepNum>
                  <StepBody>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDesc>{step.desc}</StepDesc>
                  </StepBody>
                </StepCard>
                {i < STEPS.length - 1 && <ConnectorLine />}
              </StepRow>
            </Reveal>
          ))}
        </Timeline>

        <Reveal delay={200}>
          <CtaWrap>
            <Button href={CTA_LINK} size="lg">
              Start Registration <ArrowRightIcon size={17} />
            </Button>
          </CtaWrap>
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

const Timeline = styled.div`
  max-width: 720px;
  margin: 56px auto 0;
  display: flex;
  flex-direction: column;

`;

const StepRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepCard = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 26px 28px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.03),
    rgba(255, 255, 255, 0.012)
  );
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.3s ease, border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(139, 92, 246, 0.3);
    box-shadow: 0 24px 50px -30px rgba(139, 92, 246, 0.45);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const StepNum = styled.div`
  display: grid;
  place-items: center;
  width: 74px;
  height: 74px;
  border-radius: 20px;
  flex-shrink: 0;
  background: radial-gradient(
    circle at 30% 25%,
    rgba(139, 92, 246, 0.35),
    rgba(10, 10, 14, 0.9) 72%
  );
  border: 1px solid rgba(139, 92, 246, 0.4);
  box-shadow: 0 0 34px -8px rgba(139, 92, 246, 0.6);
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 24px;
  font-weight: 700;
  color: #d9c9ff;
`;

const StepBody = styled.div``;

const StepTitle = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

const StepDesc = styled.p`
  font-size: 15px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 480px;
`;

const ConnectorLine = styled.div`
  width: 2px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    rgba(139, 92, 246, 0.5),
    rgba(139, 92, 246, 0.15)
  );
`;

const CtaWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

