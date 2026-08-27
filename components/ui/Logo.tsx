import React from "react";
import styled from "styled-components";
import { BRAND_NAME } from "@/lib/constants";

interface LogoProps {
  size?: number;
  withText?: boolean;
  href?: string;
}

/**
 * Brand logo: a minimal gradient "A" mark + wordmark.
 */
export default function Logo({
  size = 30,
  withText = true,
  href,
}: LogoProps) {
  const content = (
    <Row>
      <BrandMark $size={size}>
        <span className="glyph" aria-hidden="true">
          TB
        </span>
      </BrandMark>
      {withText && <Wordmark>{BRAND_NAME}</Wordmark>}
    </Row>
  );

  if (href) {
    return (
      <LinkHref href={href} aria-label="Trading Bot — home">
        {content}
      </LinkHref>
    );
  }

  return content;
}

const Row = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const BrandMark = styled.span<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: ${({ theme }) => theme.gradient.primary};
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 8px 24px -8px rgba(139, 92, 246, 0.7),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);

  .glyph {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 700;
    font-size: calc(${({ $size }) => $size}px * 0.4);
    color: #fff;
    letter-spacing: -0.02em;
  }
`;

const Wordmark = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.text};
`;

const LinkHref = styled.a`
  display: inline-flex;
  align-items: center;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.85;
  }
`;
