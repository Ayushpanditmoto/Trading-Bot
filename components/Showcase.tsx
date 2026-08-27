"use client";

import React from "react";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ShowcaseWindow from "@/components/mockups/ShowcaseWindow";

export default function Showcase() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Inside the Platform"
          title="Your Signals. At a Glance."
          subtitle="See assets, signal direction, market conditions and status all in one clean, readable view."
        />

        <Reveal delay={150}>
          <WindowWrap>
            <ShowcaseWindow />
          </WindowWrap>
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

const WindowWrap = styled.div`
  margin-top: 56px;
`;
