"use client";

import React from "react";
import styled, { css } from "styled-components";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  /** Direction the content travels from, or "none" for a simple fade. */
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  className?: string;
}

/**
 * Lightweight scroll-reveal wrapper using IntersectionObserver + CSS transitions.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const dir: "up" | "left" | "right" | "none" = direction ?? "up";

  return (
    <Wrapper
      ref={ref}
      $inView={inView}
      $direction={dir}
      $delay={delay}
      className={className}
    >
      {children}
    </Wrapper>
  );
}

const hidden = css`
  opacity: 0;
`;

const transforms: Record<NonNullable<RevealProps["direction"]>, string> = {
  up: "translate3d(0, 28px, 0)",
  left: "translate3d(-32px, 0, 0)",
  right: "translate3d(32px, 0, 0)",
  none: "translate3d(0, 0, 0)",
};

const Wrapper = styled.div<{
  $inView: boolean;
  $direction: "up" | "left" | "right" | "none";
  $delay: number;
}>`
  ${({ $inView }) => !$inView && hidden}
  transform: ${({ $direction }) => transforms[$direction]};
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: ${({ $delay }) => `${$delay}ms`};
  will-change: opacity, transform;

  ${({ $inView }) =>
    $inView &&
    css`
      opacity: 1;
      transform: translate3d(0, 0, 0);
    `}
`;
