"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { SearchIcon, BoltIcon, RadarIcon, ClockIcon } from "@/components/ui/Icons";

type Signal = {
  asset: string;
  pair: string;
  dir: "CALL" | "PUT" | "HOLD";
  dirColor: string;
  condition: string;
  condColor: string;
  status: string;
  time: string;
  confidence: number;
};

const SIGNALS: Signal[] = [
  {
    asset: "EUR/USD",
    pair: "Forex",
    dir: "CALL",
    dirColor: "#34d399",
    condition: "Bullish Momentum",
    condColor: "#34d399",
    status: "Active",
    time: "09:42",
    confidence: 76,
  },
  {
    asset: "GBP/USD",
    pair: "Forex",
    dir: "PUT",
    dirColor: "#f87171",
    condition: "Resistance Reached",
    condColor: "#fbbf24",
    status: "Active",
    time: "09:31",
    confidence: 68,
  },
  {
    asset: "XAU/USD",
    pair: "Commodity",
    dir: "CALL",
    dirColor: "#34d399",
    condition: "Breakout Above Range",
    condColor: "#8b5cf6",
    status: "Closed",
    time: "09:05",
    confidence: 81,
  },
];


const pulse = keyframes`
  0%, 100% { opacity: 0.45; }
  50% { opacity: 1; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Window = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  background: rgba(10, 10, 14, 0.6);
  backdrop-filter: blur(14px);
  box-shadow: 0 50px 120px -30px rgba(0, 0, 0, 0.85),
    0 24px 60px -30px rgba(139, 92, 246, 0.35);
`;

const Chrome = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 13px 18px;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TrafficLights = styled.div`
  display: flex;
  gap: 7px;
`;

const Light = styled.span<{ $c: string }>`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${({ $c }) => $c};
  opacity: 0.85;
`;

const UrlBar = styled.div`
  flex: 1;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 150px;
  }
`;

const Lock = styled.span`
  font-size: 11px;
`;

const ChromeRight = styled.div`
  width: 60px;
`;

const Body = styled.div`
  display: flex;
  min-height: 360px;
`;

const Sidebar = styled.div`
  width: 170px;
  padding: 20px 14px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: rgba(255, 255, 255, 0.01);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: 14px;
`;

const NavIcon = styled.span`
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: rgba(139, 92, 246, 0.15);
  color: #cbb4ff;
  border: 1px solid rgba(139, 92, 246, 0.3);
`;

const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;


const NavItem = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border-radius: 10px;
  font-size: 13px;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.text : theme.colors.textMuted};
  background: ${({ $active }) =>
    $active ? "rgba(139,92,246,0.12)" : "transparent"};
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? "rgba(139,92,246,0.3)" : "transparent"};
  cursor: default;
`;

const Main = styled.div`
  flex: 1;
  padding: 22px 24px;
  overflow: hidden;
`;

const MainHeader = styled.div`
  margin-bottom: 18px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Heading = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 20px;
  font-weight: 600;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: 999px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.positive};
  background: rgba(52, 211, 153, 0.1);
  border: 1px solid rgba(52, 211, 153, 0.25);
`;

const LiveDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.positive};
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const Sub = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 4px;
`;

const TableHead = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 1.4fr 0.8fr 0.5fr;
  gap: 12px;
  padding: 10px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const Th = styled.div<{ $align?: string }>`
  ${({ $align }) => $align === "right" && "text-align: right;"}
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 1.4fr 0.8fr 0.5fr;
  gap: 12px;
  align-items: center;
  padding: 12px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  animation: ${fadeIn} 0.5s ease both;
  transition: background 0.2s ease;

  &:last-of-type {
    border-bottom: none;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 0.6fr 1fr 0.5fr;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1.3fr 0.7fr 0.8fr;
  }
`;

const AssetCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;


const AssetGlyph = styled.span<{ $color: string }>`
  width: 30px;
  height: 30px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 600;
  font-size: 13px;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => `${$color}1a`};
  border: 1px solid ${({ $color }) => `${$color}44`};
  flex-shrink: 0;
`;

const AssetName = styled.div`
  font-weight: 600;
  font-size: 13px;
  white-space: nowrap;
`;

const AssetPair = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const DirCell = styled.div<{ $color: string }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  font-weight: 600;
  color: ${({ $color }) => $color};
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const CondCell = styled.div<{ color: string }>`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const StatusCell = styled.div<{ $active: boolean }>`
  font-size: 12px;
  color: ${({ $active }) => ($active ? "#34d399" : "#9ca0ab")};
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const TimeCell = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: right;
`;

const AnalysisBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 18px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AnalysisLeft = styled.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  white-space: nowrap;
`;

const AnalysisChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.span<{ $c: string }>`
  padding: 5px 12px;
  border-radius: 999px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  font-weight: 500;
  color: ${({ $c }) => $c};
  background: ${({ $c }) => `${$c}14`};
  border: 1px solid ${({ $c }) => `${$c}38`};
`;

/**
 * Large browser-window style product showcase mockup.
 */
export default function ShowcaseWindow() {
  return (
    <Window>
      <Chrome>
        <TrafficLights>
          <Light $c="#ff5f57" />
          <Light $c="#febc2e" />
          <Light $c="#28c840" />
        </TrafficLights>
        <UrlBar>
          <Lock>🔒</Lock>
          platform.tradingbot.app
        </UrlBar>
        <ChromeRight />
      </Chrome>

      <Body>
        <Sidebar>
          <SidebarLogo>
            <NavIcon><BoltIcon size={16} /></NavIcon>
            <span>TB</span>
          </SidebarLogo>
          <SideNav>
            <NavItem $active>
              <RadarIcon size={16} /> Signals
            </NavItem>
            <NavItem>
              <ClockIcon size={16} /> History
            </NavItem>
            <NavItem>
              <SearchIcon size={16} /> Analysis
            </NavItem>
          </SideNav>
        </Sidebar>

        <Main>
          <MainHeader>
            <TitleRow>
              <Heading>Recent Signals</Heading>
              <Badge>
                <LiveDot /> LIVE
              </Badge>
            </TitleRow>
            <Sub>Latest structured opportunities from the AI engine</Sub>
          </MainHeader>

          <TableHead>
            <Th>Asset</Th>
            <Th>Direction</Th>
            <Th>Market Condition</Th>
            <Th>Status</Th>
            <Th $align="right">Time</Th>
          </TableHead>

          {SIGNALS.map((s) => (
            <Row key={s.asset + s.time}>
              <AssetCell>
                <AssetGlyph $color={s.condColor}>{s.asset.slice(0, 1)}</AssetGlyph>
                <div>
                  <AssetName>{s.asset}</AssetName>
                  <AssetPair>{s.pair}</AssetPair>
                </div>
              </AssetCell>
              <DirCell $color={s.dirColor}>{s.dir}</DirCell>
              <CondCell color={s.condColor}>{s.condition}</CondCell>
              <StatusCell $active={s.status === "Active"}>{s.status}</StatusCell>
              <TimeCell>{s.time}</TimeCell>
            </Row>
          ))}

          <AnalysisBar>
            <AnalysisLeft>
              <span>Analysis Indicators</span>
            </AnalysisLeft>
            <AnalysisChips>
              <Chip $c="#4f7dff">RSI 62</Chip>
              <Chip $c="#8b5cf6">MA Cross</Chip>
              <Chip $c="#22d3ee">Momentum</Chip>
              <Chip $c="#34d399">Structure</Chip>
            </AnalysisChips>
          </AnalysisBar>
        </Main>
      </Body>
    </Window>
  );

}

