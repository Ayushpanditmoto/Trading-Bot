"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { TrendingUpIcon, CheckIcon, ClockIcon } from "@/components/ui/Icons";

/**
 * Marketing mockup of the AI signal card shown in the hero.
 */
export default function SignalCard() {
  return (
    <Card>
      <Header>
        <Live>
          <Ping />
          AI Signal Engine
        </Live>
        <Time>
          <ClockIcon size={14} /> 09:42:18 UTC
        </Time>
      </Header>

      <AssetRow>
        <div>
          <AssetName>EUR/USD</AssetName>
          <PairLabel>Forex · Spot</PairLabel>
        </div>
        <CallBadge>
          <TrendingUpIcon size={15} /> CALL
        </CallBadge>
      </AssetRow>

      <Divider />

      <SectionLabel>Market Analysis</SectionLabel>
      <MiniChart>
        <GridLine $y={12} />
        <GridLine $y={32} />
        <GridLine $y={52} />
        <svg viewBox="0 0 220 62" preserveAspectRatio="none" width="100%" height="62">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4f7dff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#4f7dff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#4f7dff" />
              <stop offset="0.6" stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <path
            d="M0 48 L28 44 L48 38 L70 41 L92 30 L116 34 L140 22 L164 26 L188 12 L220 6"
            fill="none"
            stroke="url(#strokeGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0 48 L28 44 L48 38 L70 41 L92 30 L116 34 L140 22 L164 26 L188 12 L220 6 L220 62 L0 62 Z"
            fill="url(#chartFill)"
          />
          <circle cx="188" cy="12" r="4" fill="#22d3ee" stroke="#050507" strokeWidth="2" />
        </svg>
      </MiniChart>

      <Divider />

      <MomentumRow>
        <SectionLabel>Bullish Momentum</SectionLabel>
        <Meter>
          <MeterFill />
        </Meter>
        <MeterValue>76%</MeterValue>
      </MomentumRow>

      <Detected>
        <CheckCircle>
          <CheckIcon size={13} />
        </CheckCircle>
        <span>Signal Detected</span>
        <SignalTime>just now</SignalTime>
      </Detected>
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.015)
  );
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(255, 255, 255, 0.02) inset,
    0 0 60px -20px rgba(139, 92, 246, 0.4);
  backdrop-filter: blur(12px);
  padding: 20px 20px 14px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -60px;
    right: -40px;
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.28), transparent 70%);
    filter: blur(10px);
    pointer-events: none;
  }
`;

const ping = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(2.6); opacity: 0; }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const Live = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Ping = styled.span`
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.positive};
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.positive};
    animation: ${ping} 1.6s ease-out infinite;
  }
`;

const Time = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const AssetRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0 14px;
`;

const AssetName = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const PairLabel = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 2px;
`;

const CallBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(52, 211, 153, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.32);
  color: ${({ theme }) => theme.colors.positive};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 14px 0;
`;

const SectionLabel = styled.div`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 10px;
`;

const MiniChart = styled.div`
  position: relative;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.015);
`;

const GridLine = styled.div<{ $y: number }>`
  position: absolute;
  left: 0;
  right: 0;
  top: ${({ $y }) => $y}px;
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
  z-index: 0;
`;

const MomentumRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  ${SectionLabel} {
    margin: 0;
    white-space: nowrap;
  }
`;

const Meter = styled.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
`;

const MeterFill = styled.div`
  width: 76%;
  height: 100%;
  border-radius: 999px;
  background: ${({ theme }) => theme.gradient.primary};
`;

const MeterValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Detected = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(52, 211, 153, 0.08);
  border: 1px solid rgba(52, 211, 153, 0.2);
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const CheckCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(52, 211, 153, 0.18);
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.positive};
`;

const SignalTime = styled.span`
  margin-left: auto;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

