"use client";

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { REGISTER_LINK } from "@/lib/constants";

const PREP_STEPS = [
  { title: "Register with Quotex" },
  { title: "Deposit $100 or more" },
  { title: "Submit your Quotex ID" },
];

/**
 * Hero access funnel: Register → Deposit → Submit ID → paste ID → Verify.
 * Marketing-only (no backend). Verify shows a visual confirmation state.
 */
export default function HeroFunnel() {
  const [id, setId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const disabled = submitted || !id.trim();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (id.trim()) setSubmitted(true);
  };

  return (
    <Card>
      <TopRow>
        <LiveLabel>
          <Ping /> GET ACCESS
        </LiveLabel>
        <MinNote>$100 min deposit</MinNote>
      </TopRow>

      {/* Step 1 — Register (with partner link) */}
      <PrepStep>
        <StepNo>
          <CTAArrow>→</CTAArrow>
        </StepNo>
        <StepText>
          <StepTitle>Register with Quotex</StepTitle>
          <StepHint>Create your account using our partner link</StepHint>
        </StepText>
        <RegisterLink href={REGISTER_LINK} target="_blank" rel="noopener noreferrer">
          Register <ArrowRightIcon size={13} />
        </RegisterLink>
      </PrepStep>

      {/* Steps 2 & 3 — Deposit / Submit */}
      {PREP_STEPS.slice(1).map((s) => (
        <PrepStep key={s.title}>
          <DoneIcon>
            <CheckIcon size={13} />
          </DoneIcon>
          <StepText>
            <StepTitle>{s.title}</StepTitle>
          </StepText>
        </PrepStep>
      ))}

      <Divider />

      {/* Input: paste Quotex ID */}
      <InputWrap>
        <Label htmlFor="quotex-id">Paste your Quotex account ID</Label>
        <Form onSubmit={handleVerify}>
          <Input
            id="quotex-id"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
              setSubmitted(false);
            }}
            placeholder="e.g. 4XXXXXXXXX6"
            inputMode="numeric"
            disabled={submitted}
          />
          <VerifyBtn type="submit" $disabled={disabled}>
            {submitted ? "Requested" : "Verify"}
          </VerifyBtn>
        </Form>
      </InputWrap>

      <Status $ok={submitted}>
        {submitted ? (
          <StatusInner>
            <CheckIcon size={14} />
            Verification requested — our team will confirm your access.
          </StatusInner>
        ) : (
          "After verification you'll receive access to the signal platform."
        )}
      </Status>

      <RiskNote>No guaranteed profits. Trade responsibly.</RiskNote>
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 430px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.015)
  );
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.8),
    0 0 60px -20px rgba(139, 92, 246, 0.4);
  backdrop-filter: blur(12px);
  padding: 22px 22px 18px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -60px;
    right: -40px;
    width: 180px;
    height: 180px;
    background: radial-gradient(
      circle,
      rgba(139, 92, 246, 0.28),
      transparent 70%
    );
    filter: blur(10px);
    pointer-events: none;
  }
`;

const ping = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(2.6); opacity: 0; }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const LiveLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
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

const MinNote = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(34, 211, 238, 0.25);
  background: rgba(34, 211, 238, 0.06);
  color: ${({ theme }) => theme.colors.accentCyan};
`;

const PrepStep = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
`;

const StepNo = styled.span`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 9px;
  display: grid;
  place-items: center;
  background: rgba(139, 92, 246, 0.14);
  border: 1px solid rgba(139, 92, 246, 0.32);
  color: #cbb4ff;
`;

const CTAArrow = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

const DoneIcon = styled.span`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(52, 211, 153, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.32);
  color: ${({ theme }) => theme.colors.positive};
`;

const StepText = styled.div`
  flex: 1;
  min-width: 0;
`;

const StepTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const StepHint = styled.div`
  font-size: 11.5px;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 1px;
`;

const RegisterLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  background: ${({ theme }) => theme.gradient.primary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 6px 18px -6px rgba(139, 92, 246, 0.6);
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 26px -8px rgba(139, 92, 246, 0.7);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 14px 0;
`;

const InputWrap = styled.div`
  margin-bottom: 12px;
`;

const Label = styled.label`
  display: block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 8px;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 0;
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.text};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
    font-family: ${({ theme }) => theme.fonts.body};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accentViolet};
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.18);
  }

  &:disabled {
    opacity: 0.6;
  }
`;

const VerifyBtn = styled.button<{ $disabled: boolean }>`
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: ${({ theme }) => theme.gradient.primary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 6px 18px -6px rgba(139, 92, 246, 0.6);
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.3s ease, opacity 0.2s ease;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.55 : 1)};

  &:hover {
    transform: ${({ $disabled }) => ($disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${({ $disabled }) =>
      $disabled ? "none" : "0 10px 26px -8px rgba(139, 92, 246, 0.7)"};
  }
`;

const Status = styled.p<{ $ok: boolean }>`
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme, $ok }) =>
    $ok ? theme.colors.positive : theme.colors.textMuted};
  min-height: 18px;
`;

const StatusInner = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
`;

const RiskNote = styled.p`
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
`;

