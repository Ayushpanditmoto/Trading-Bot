import React from "react";
import styled from "styled-components";

export default function Container({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 40px;
  }
`;
