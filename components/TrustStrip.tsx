"use client";

import React from "react";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import {
  ActivityIcon,
  BoltIcon,
  RadarIcon,
  LayoutIcon,
} from "@/components/ui/Icons";

const BENEFITS = [
  { icon: ActivityIcon, title: "Real-Time Analysis" },
  { icon: BoltIcon, title: "AI-Assisted Signals" },
  { icon: RadarIcon, title: "Market Monitoring" },
  { icon: LayoutIcon, title: "Simple Interface" },
];

export default function TrustStrip() {
  return (
    <Strip>
      <Container>
        <Inner>
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <Item>
                <IconWrap>
                  <b.icon size={18} />
                </IconWrap>
                <span>{b.title}</span>
              </Item>
            </Reveal>
          ))}
        </Inner>
      </Container>
    </Strip>
  );
}

const Strip = styled.section`
  padding: 10px 0 60px;
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;

  &:hover {
    border-color: rgba(139, 92, 246, 0.35);
    background: rgba(139, 92, 246, 0.05);
    transform: translateY(-2px);
  }
`;

const IconWrap = styled.span`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.25);
  color: #b79bff;
  flex-shrink: 0;
`;
