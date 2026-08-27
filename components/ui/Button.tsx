"use client";

import React from "react";
import styled, { css } from "styled-components";

type Variant = "primary" | "ghost" | "outline";
type Size = "md" | "lg";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
}

/**
 * Primary CTA button rendered as an anchor.
 */
export default function Button({
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton as="a" $variant={variant} $size={size} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.a<{ $variant: Variant; $size: Size }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 999px;
  font-weight: 500;
  letter-spacing: -0.01em;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.3s ease, background 0.3s ease,
    border-color 0.3s ease, opacity 0.2s ease;
  will-change: transform;

  ${({ $size }) =>
    $size === "lg"
      ? css`
          padding: 15px 30px;
          font-size: 16px;
        `
      : css`
          padding: 11px 22px;
          font-size: 14px;
        `}

  ${({ $variant }) => {
    switch ($variant) {
      case "ghost":
        return css`
          color: ${({ theme }) => theme.colors.text};
          background: transparent;
          border: 1px solid transparent;
          &:hover {
            background: rgba(255, 255, 255, 0.04);
          }
        `;
      case "outline":
        return css`
          color: ${({ theme }) => theme.colors.text};
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid ${({ theme }) => theme.colors.borderStrong};
          &:hover {
            border-color: ${({ theme }) => theme.colors.accentViolet};
            background: rgba(255, 255, 255, 0.04);
          }
        `;
      case "primary":
      default:
        return css`
          color: #fff;
          background: ${({ theme }) => theme.gradient.primary};
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 24px -8px rgba(139, 92, 246, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.18);
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 34px -10px rgba(139, 92, 246, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.22);
          }
        `;
    }
  }}

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accentViolet};
    outline-offset: 2px;
  }
`;
