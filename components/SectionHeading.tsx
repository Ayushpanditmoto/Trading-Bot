"use client";

import React from "react";
import styled from "styled-components";
import Reveal from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal>
      <Header $align={align}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Title>{title}</Title>
        {subtitle && <Subtitle $align={align}>{subtitle}</Subtitle>}
      </Header>
    </Reveal>
  );
}

const Header = styled.div<{ $align: "center" | "left" }>`
  max-width: 720px;
  margin: ${({ $align }) => ($align === "center" ? "0 auto" : "0")};
  text-align: ${({ $align }) => $align};
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentViolet};
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.25);
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.08;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.03em;
`;

const Subtitle = styled.p<{ $align: "center" | "left" }>`
  margin-top: 18px;
  font-size: 17px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 620px;
  margin-left: ${({ $align }) => ($align === "center" ? "auto" : "0")};
  margin-right: ${({ $align }) => ($align === "center" ? "auto" : "0")};
`;
