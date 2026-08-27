"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { ArrowRightIcon, SparkleIcon } from "@/components/ui/Icons";

const INPUTS = [
  { label: "Price Action", c: "#4f7dff" },
  { label: "Market Structure", c: "#8b5cf6" },
  { label: "Momentum", c: "#22d3ee" },
  { label: "Volatility", c: "#fbbf24" },
  { label: "Technical Indicators", c: "#e879f9" },
  { label: "Pattern Analysis", c: "#34d399" },
];

/**
 * AI Technology section visual: multiple analytical layers flowing into the
 * signal engine and producing a structured output.
 */
export default function AISignalEngine() {
  return (
    <Flow>
      {/* Inputs */}
      <Column>
        <ColumnLabel>
          <span>Analytical Inputs</span>
        </ColumnLabel>
        <InputList>
          {INPUTS.map((input) => (
            <InputChip key={input.label} $c={input.c}>
              <Dot $c={input.c} />
              {input.label}
            </InputChip>
          ))}
        </InputList>
      </Column>

      <Connector>
        <ArrowRightIcon size={22} />
        <FlowLine />
      </Connector>

      {/* Engine */}
      <Engine>
        <EngineHalo />
        <EngineBody>
          <SparkleIcon size={26} />
          <EngineTitle>AI SIGNAL ENGINE</EngineTitle>
          <EngineSub>Multi-factor · Real-time</EngineSub>
        </EngineBody>
      </Engine>

      <Connector>
        <ArrowRightIcon size={22} />
        <FlowLine />
      </Connector>

      {/* Output */}
      <Column>
        <ColumnLabel>
          <span style={{ color: "var(--accent-cyan)" }}>Output</span>
        </ColumnLabel>
        <OutputCard>
          <OutputTag>STRUCTURED</OutputTag>
          <OutputTitle>TRADING SIGNAL</OutputTitle>
          <OutputMeta>
            <Metric>
              <MetricLabel>Direction</MetricLabel>
              <MetricChip>CALL</MetricChip>
            </Metric>
            <Metric>
              <MetricLabel>Asset</MetricLabel>
              <MetricValue>EUR/USD</MetricValue>
            </Metric>
            <Metric>
              <MetricLabel>Confidence</MetricLabel>
              <MetricValue>76%</MetricValue>
            </Metric>
          </OutputMeta>
        </OutputCard>
      </Column>
    </Flow>
  );
}

const Flow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 20px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 28px;
    align-items: center;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
`;

const ColumnLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
  gap: 10px;

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const InputList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const InputChip = styled.div<{ $c: string }>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({ $c }) => $c};
    transform: translateY(-1px);
  }
`;

const Dot = styled.span<{ $c: string }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $c }) => $c};
  box-shadow: 0 0 8px 0 ${({ $c }) => $c};
`;

const Connector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textMuted};
  gap: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    transform: rotate(90deg);
    margin: -10px 0;
  }
`;

const FlowLine = styled.span`
  width: 2px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme.colors.accentViolet},
    transparent
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40px;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.colors.accentViolet},
      transparent
    );
  }
`;

const glow = keyframes`
  0%, 100% { opacity: 0.35; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.06); }
`;

const Engine = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-width: 170px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 0;
  }
`;

const EngineHalo = styled.div`
  position: absolute;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%);
  animation: ${glow} 4s ease-in-out infinite;
`;

const EngineBody = styled.div`
  position: relative;
  z-index: 1;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
  color: #cbb4ff;
  background: radial-gradient(
    circle at 30% 25%,
    rgba(139, 92, 246, 0.4),
    rgba(10, 10, 14, 0.9) 72%
  );
  border: 1px solid rgba(139, 92, 246, 0.45);
  box-shadow: 0 0 60px -10px rgba(139, 92, 246, 0.7);
`;

const EngineTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.text};
`;

const EngineSub = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const OutputCard = styled.div`
  padding: 18px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(
    160deg,
    rgba(34, 211, 238, 0.06),
    rgba(255, 255, 255, 0.015)
  );
  border: 1px solid rgba(34, 211, 238, 0.25);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OutputTag = styled.div`
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 10px;
  letter-spacing: 0.14em;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accentCyan};
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid rgba(34, 211, 238, 0.2);
  padding: 4px 10px;
  border-radius: 999px;
`;

const OutputTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const OutputMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Metric = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const MetricLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const MetricValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const MetricChip = styled.span<{ $green?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
  color: ${({ $green, theme }) =>
    $green ? theme.colors.positive : theme.colors.accentCyan};
  background: ${({ $green }) =>
    $green ? "rgba(52, 211, 153, 0.12)" : "rgba(34, 211, 238, 0.1)"};
  border: 1px solid
    ${({ $green }) =>
      $green ? "rgba(52, 211, 153, 0.3)" : "rgba(34, 211, 238, 0.25)"};
`;

