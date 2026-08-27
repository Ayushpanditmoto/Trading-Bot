"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

/**
 * Abstract AI/trading visualization: a sophisticated network + waveform
 * graphic rendered with pure SVG/CSS. Marketing mockup only.
 */
export default function AIAnalysisVisual() {
  return (
    <Stage>
      <GlowTop />
      <GlowBottom />

      <Grid />

      {/* Floating analysis chips */}
      <Chip $x={6} $y={12} $delay={0}>
        <Dot $c="#4f7dff" /> Price Action
      </Chip>
      <Chip $x={74} $y={10} $delay={1.2}>
        <Dot $c="#fbbf24" /> Volatility
      </Chip>
      <Chip $x={10} $y={68} $delay={0.6}>
        <Dot $c="#22d3ee" /> Momentum
      </Chip>
      <Chip $x={72} $y={74} $delay={1.8}>
        <Dot $c="#8b5cf6" /> Structure
      </Chip>

      {/* Central waveform / network */}
      <Network>
        <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid meet" width="100%">
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#8b5cf6" />
              <stop offset="0.5" stopColor="#4f7dff" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </radialGradient>
          </defs>

          <line x1="120" y1="120" x2="260" y2="90" stroke="rgba(139,92,246,0.25)" strokeWidth="1" />
          <line x1="260" y1="90" x2="400" y2="150" stroke="rgba(139,92,246,0.25)" strokeWidth="1" />
          <line x1="400" y1="150" x2="520" y2="110" stroke="rgba(139,92,246,0.25)" strokeWidth="1" />
          <line x1="120" y1="120" x2="180" y2="230" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
          <line x1="180" y1="230" x2="400" y2="150" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
          <line x1="400" y1="150" x2="460" y2="250" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
          <line x1="520" y1="110" x2="460" y2="250" stroke="rgba(139,92,246,0.18)" strokeWidth="1" />
          <line x1="260" y1="90" x2="320" y2="240" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
          <line x1="320" y1="240" x2="460" y2="250" stroke="rgba(139,92,246,0.18)" strokeWidth="1" />

          {[
            [120, 120],
            [260, 90],
            [400, 150],
            [520, 110],
            [180, 230],
            [320, 240],
            [460, 250],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="18" fill="url(#nodeGlow)" />
              <circle cx={cx} cy={cy} r="4" fill="#8b5cf6" />
              <circle cx={cx} cy={cy} r="4" stroke="#0a0a0e" strokeWidth="2" fill="#b79bff" />
            </g>
          ))}

          {/* Animated waveform */}
          <WavePath
            d="M40 200 Q 90 150 140 190 T 260 180 T 360 190 T 460 170 T 600 185"
            fill="none"
            stroke="url(#waveGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <WaveGhost
            d="M60 210 Q 110 170 160 200 T 280 190 T 380 200 T 480 185 T 600 200"
            fill="none"
            stroke="url(#waveGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>

        {/* Center AI engine medallion */}
        <Core>
          <CoreRing />
          <CoreGlyph>✦</CoreGlyph>
          <CoreLabel>AI ENGINE</CoreLabel>
          <CoreSub>Multi-factor analysis</CoreSub>
        </Core>

        {/* Signal node floating over the waveform */}
        <SignalDot $delay={0.8}>
          <SignalInner />
        </SignalDot>
      </Network>
    </Stage>
  );
}

const floatY = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

const dash = keyframes`
  to { stroke-dashoffset: -120; }
`;

const glowPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.15); opacity: 1; }
`;

const Stage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  min-height: 320px;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  background:
    radial-gradient(60% 80% at 50% 0%, rgba(139, 92, 246, 0.12), transparent 60%),
    radial-gradient(50% 60% at 85% 90%, rgba(34, 211, 238, 0.08), transparent 60%),
    linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  box-shadow: 0 40px 100px -30px rgba(0, 0, 0, 0.8);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 240px;
  }
`;

const GlowTop = styled.div`
  position: absolute;
  top: -120px;
  left: 20%;
  width: 400px;
  height: 300px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%);
  filter: blur(20px);
  pointer-events: none;
`;

const GlowBottom = styled.div`
  position: absolute;
  bottom: -140px;
  right: 10%;
  width: 380px;
  height: 300px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.18), transparent 70%);
  filter: blur(20px);
  pointer-events: none;
`;

const Grid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 75%);
`;

const Chip = styled.div<{ $x: number; $y: number; $delay: number }>`
  position: absolute;
  top: ${({ $y }) => $y}%;
  left: ${({ $x }) => $x}%;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(10, 10, 14, 0.7);
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  backdrop-filter: blur(8px);
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  z-index: 4;
  animation: ${floatY} 6s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const Dot = styled.span<{ $c: string }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $c }) => $c};
  box-shadow: 0 0 8px 0 ${({ $c }) => $c};
`;

const Network = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 40px;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 16px;
  }
`;

const WavePath = styled.path`
  stroke-dasharray: 6 8;
  animation: ${dash} 22s linear infinite;
`;

const WaveGhost = styled.path`
  animation: ${pulse} 4s ease-in-out infinite;
`;

const Core = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background: radial-gradient(circle at 30% 20%, rgba(139,92,246,0.35), rgba(10,10,14,0.85) 70%);
  border: 1px solid rgba(139, 92, 246, 0.4);
  box-shadow: 0 0 50px -8px rgba(139, 92, 246, 0.7);
  z-index: 5;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 108px;
    height: 108px;
  }
`;

const CoreRing = styled.div`
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  border: 1px dashed rgba(139, 92, 246, 0.35);
  animation: ${glowPulse} 4s ease-in-out infinite;
`;

const CoreGlyph = styled.div`
  font-size: 26px;
  color: #cbb4ff;
  animation: ${glowPulse} 3s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 20px;
  }
`;

const CoreLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: ${({ theme }) => theme.colors.text};
`;

const CoreSub = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 100px;
  text-align: center;
  line-height: 1.4;
`;

const SignalDot = styled.div<{ $delay: number }>`
  position: absolute;
  bottom: 22%;
  right: 30%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(34, 211, 238, 0.15);
  border: 1px solid rgba(34, 211, 238, 0.6);
  animation: ${glowPulse} 2.4s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 12px;
    height: 12px;
  }
`;

const SignalInner = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22d3ee;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 5px;
    height: 5px;
  }
`;

